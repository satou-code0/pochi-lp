import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Noto_Sans_JP } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

// Import Inter for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Import Poppins for headings
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Import Noto Sans JP from Google Fonts instead of local files
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'オシゴトポチッと | ポチッと押すだけ、バックオフィス完了',
  description: '毎日の"面倒"を、ボタンひとつで自動化する業務効率化アプリ。人件費削減、作業時間短縮、ミス率低減を実現します。',
  openGraph: {
    title: 'オシゴトポチッと | ポチッと押すだけ、バックオフィス完了',
    description: '毎日の"面倒"を、ボタンひとつで自動化する業務効率化アプリ',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'オシゴトポチッと',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${notoSansJP.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}