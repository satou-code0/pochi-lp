import nodemailer from 'nodemailer';

export type EmailData = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

/**
 * メール送信ユーティリティ
 * 環境変数に設定されたSMTP設定を使用してメールを送信します
 */
export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // 環境変数からSMTP設定を取得
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const from = process.env.SMTP_FROM || 'noreply@example.com';

    // SMTP設定が不完全な場合はエラー
    if (!user || !pass) {
      console.error('SMTP設定が不完全です: ユーザー名またはパスワードが設定されていません');
      return false;
    }

    // メール送信用のトランスポーターを作成
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    // メール送信
    const info = await transporter.sendMail({
      from: `"オシゴトポチッと" <${from}>`,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html || data.text.replace(/\n/g, '<br>'),
    });

    console.log('メール送信成功:', info.messageId);
    return true;
  } catch (error) {
    console.error('メール送信エラー:', error);
    return false;
  }
}

/**
 * お問い合わせフォームからのメール送信
 * フォームデータを受け取り、管理者とユーザーに確認メールを送信します
 */
export async function sendContactFormEmail(formData: {
  company: string;
  name: string;
  email: string;
  message?: string;
}): Promise<boolean> {
  try {
    // 管理者宛メールの内容を作成
    const adminEmailData: EmailData = {
      to: process.env.ADMIN_EMAIL || 'info@zylix.co.jp',
      subject: '【オシゴトポチッと】新規お問い合わせ',
      text: createAdminEmailText(formData),
    };

    // 自動返信メールの内容を作成
    const userEmailData: EmailData = {
      to: formData.email,
      subject: '【オシゴトポチッと】お問い合わせありがとうございます',
      text: createUserEmailText(formData),
    };

    // 両方のメールを送信
    const adminEmailSent = await sendEmail(adminEmailData);
    const userEmailSent = await sendEmail(userEmailData);

    // 両方のメールが送信成功した場合のみtrueを返す
    return adminEmailSent && userEmailSent;
  } catch (error) {
    console.error('コンタクトフォームメール送信エラー:', error);
    return false;
  }
}

// 管理者向けメール本文の作成
function createAdminEmailText(formData: {
  company: string;
  name: string;
  email: string;
  message?: string;
}): string {
  return `
オシゴトポチッとウェブサイトから新しいお問い合わせがありました。

【会社名】
${formData.company}

【担当者名】
${formData.name}

【メールアドレス】
${formData.email}

【お問い合わせ内容】
${formData.message || '(入力なし)'}

----
このメールは自動送信されています。
`;
}

// ユーザー向け自動返信メール本文の作成
function createUserEmailText(formData: {
  company: string;
  name: string;
  email: string;
  message?: string;
}): string {
  return `
${formData.name} 様

この度はオシゴトポチッとにお問い合わせいただき、誠にありがとうございます。
お問い合わせを受け付けました。内容を確認の上、担当者より折り返しご連絡いたします。

【お問い合わせ内容】
会社名: ${formData.company}
お名前: ${formData.name}
メールアドレス: ${formData.email}
お問い合わせ内容:
${formData.message || '(入力なし)'}

※このメールは自動返信です。
返信いただいてもお答えできない場合がございますので、ご了承ください。

--
株式会社ZYLIX
オシゴトポチッと 事務局
https://zylix.co.jp
`;
} 