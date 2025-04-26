"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

// フォームのバリデーションスキーマ
const formSchema = z.object({
  company: z.string().min(1, {
    message: '会社名を入力してください',
  }),
  name: z.string().min(1, {
    message: '担当者名を入力してください',
  }),
  email: z.string().email({
    message: '有効なメールアドレスを入力してください',
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  // 送信状態の管理
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    // 送信状態をリセット
    setSubmitStatus('idle');
    setErrorMessage(null);
    setIsSubmitting(true);
    
    try {
      // APIエンドポイントにPOSTリクエスト
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      // レスポンスをJSONとして解析
      const result = await response.json();
      
      if (response.ok && result.success) {
        // 送信成功
        setSubmitStatus('success');
        form.reset();
        toast({
          title: "送信完了しました！",
          description: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
          duration: 5000,
        });
      } else {
        // API側でエラーが発生
        setSubmitStatus('error');
        setErrorMessage(result.message || 'お問い合わせ送信中にエラーが発生しました。');
        toast({
          title: "エラーが発生しました",
          description: result.message || "送信に失敗しました。時間をおいて再度お試しください。",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      // ネットワークエラーなど
      setSubmitStatus('error');
      setErrorMessage('ネットワークエラーが発生しました。インターネット接続を確認してください。');
      toast({
        title: "エラーが発生しました",
        description: "ネットワークエラーが発生しました。インターネット接続を確認してください。",
        variant: "destructive",
        duration: 5000,
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 送信状態表示エリア */}
        {submitStatus === 'success' && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">送信完了</AlertTitle>
            <AlertDescription className="text-green-700">
              お問い合わせを受け付けました。担当者よりご連絡いたします。
            </AlertDescription>
          </Alert>
        )}
        
        {submitStatus === 'error' && errorMessage && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>エラーが発生しました</AlertTitle>
            <AlertDescription>
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>会社名</FormLabel>
                <FormControl>
                  <Input placeholder="株式会社ポチット" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>担当者名</FormLabel>
                <FormControl>
                  <Input placeholder="山田 太郎" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="your-email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問い合わせ内容（任意）</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="ご質問やご要望があればご記入ください" 
                  rows={5}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              送信中...
            </>
          ) : (
            'ポチッと送信'
          )}
        </Button>
      </form>
    </Form>
  );
}