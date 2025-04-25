import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              オシゴトポチッと
            </h3>
            <p className="text-zinc-400 mb-6">
              毎日の"面倒"を、ボタンひとつで自動化する業務効率化アプリ
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-base font-bold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  費用精算自動化
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  請求書処理
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  勤怠管理
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  承認フロー
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  カスタム開発
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-base font-bold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  お知らせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-base font-bold mb-4">お問い合わせ</h4>
            <address className="not-italic">
              <p className="text-zinc-400 mb-2">株式会社ポチットテクノロジー</p>
              <p className="text-zinc-400 mb-2">〒107-0062</p>
              <p className="text-zinc-400 mb-2">東京都港区南青山1-2-3</p>
              <p className="text-zinc-400 mb-2">ポチットビル 5F</p>
              <p className="text-zinc-400 mb-4">
                <Link href="mailto:info@pochit.co.jp" className="hover:text-primary transition-colors">
                  info@pochit.co.jp
                </Link>
              </p>
              <p className="text-zinc-400">
                <Link href="tel:0312345678" className="hover:text-primary transition-colors">
                  03-1234-5678
                </Link>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <p>© 2025 株式会社ポチットテクノロジー All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}