import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Noto_Sans_JP } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

// Import Inter for body text with fallback
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Import Poppins for headings with fallback
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-poppins',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Import Noto Sans JP from Google Fonts with fallback
const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'オシゴトポチッと | あとはAIがぜんぶ。',
  description: 'AIが考えて動く。あなたはボタンを押すだけ。あとはAIがぜんぶ。中小企業のバックオフィス業務をAIが自動化し、コスト削減と時間短縮を実現します。',
  openGraph: {
    title: 'オシゴトポチッと | あとはAIがぜんぶ。',
    description: 'AIが考えて動く。あなたはボタンを押すだけ。あとはAIがぜんぶ。中小企業のバックオフィス業務をAIが自動化し、コスト削減と時間短縮を実現します。',
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