import Link from 'next/link';
import { Twitter, Facebook, Github, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              オシゴトポチッと
            </h3>
            <p className="text-zinc-400 mb-6">
              お客様の業務に完全にフィットするAIアプリケーションを
              オーダーメイドで開発します
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-base font-bold mb-4">開発サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  帳票自動作成システム
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  営業支援アプリ開発
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  在庫管理システム
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  業務効率化AI開発
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                  導入後サポート
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-base font-bold mb-4">お問い合わせ</h4>
            <address className="not-italic">
              <p className="text-zinc-400 mb-2">株式会社ZYLIX</p>
              <p className="text-zinc-400 mb-2">〒810-0001</p>
              <p className="text-zinc-400 mb-2">福岡県福岡市中央区天神4丁目6-28天神ファーストビル7階</p>
              <div className="flex items-center text-zinc-400 mb-2">
                <Mail className="h-4 w-4 mr-2" />
                <Link href="mailto:info@zylix.co.jp" className="hover:text-primary transition-colors">
                  info@zylix.co.jp
                </Link>
              </div>
              <div className="flex items-center text-zinc-400">
                <Phone className="h-4 w-4 mr-2" />
                <Link href="tel:05071078280" className="hover:text-primary transition-colors">
                  050-7107-8280
                </Link>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p>© 2025 株式会社ZYLIX All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-zinc-500 hover:text-primary transition-colors cursor-pointer">プライバシーポリシー</Link>
              <Link href="/terms" className="text-zinc-500 hover:text-primary transition-colors cursor-pointer">利用規約</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}