import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactFormEmail } from '@/lib/email/send-email';

// 動的な処理を許可する設定
export const dynamic = 'force-dynamic';

// お問い合わせフォームのバリデーションスキーマ
const contactFormSchema = z.object({
  company: z.string().min(1, { message: '会社名を入力してください' }),
  name: z.string().min(1, { message: '担当者名を入力してください' }),
  email: z.string().email({ message: '有効なメールアドレスを入力してください' }),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // リクエストデータの取得
    const data = await request.json();
    
    // バリデーション
    const validationResult = contactFormSchema.safeParse(data);
    
    if (!validationResult.success) {
      // バリデーションエラーを返す
      return NextResponse.json(
        { 
          success: false, 
          errors: validationResult.error.errors 
        }, 
        { status: 400 }
      );
    }
    
    // バリデーション済みデータ
    const validatedData = validationResult.data;
    
    // メール送信処理
    const emailSent = await sendContactFormEmail({
      company: validatedData.company,
      name: validatedData.name,
      email: validatedData.email,
      message: validatedData.message,
    });
    
    if (emailSent) {
      // メール送信成功
      return NextResponse.json(
        { 
          success: true, 
          message: 'お問い合わせを受け付けました。３営業日以内に担当者よりご連絡いたします。' 
        }, 
        { status: 200 }
      );
    } else {
      // メール送信失敗
      return NextResponse.json(
        { 
          success: false, 
          message: 'メール送信に失敗しました。しばらく経ってから再度お試しください。' 
        }, 
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('Contact API Error:', error);
    
    // サーバーエラー
    return NextResponse.json(
      { 
        success: false, 
        message: 'サーバーエラーが発生しました。しばらく経ってから再度お試しください。' 
      }, 
      { status: 500 }
    );
  }
} 