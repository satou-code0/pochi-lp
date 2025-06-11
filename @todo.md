# プロジェクトタスク一覧

## UI/UXコンポーネントの改善
- [x] Pricingコンポーネントの修正
  - [x] エンタープライズプランの削除
  - [x] プラン数を4つから3つに変更
  - [x] グリッドレイアウトをlg:grid-cols-3に変更
  - [x] レスポンシブデザインの維持
- [x] UseCasesコンポーネントの修正
  - [x] 画像パスの修正（@/public/gif/billgif.gif → /gif/billgif.gif）
  - [x] Next.js標準のpublicフォルダ参照方式に統一
- [x] 🟡 Heroセクションの改善
  - [x] 「30秒でわかるAIデモを見る」ボタンの削除
  - [x] ビデオモーダル機能の完全削除
  - [x] 空いたスペースの適切なコンテンツ追加
    - [x] AIの価値提案メッセージカードの追加
    - [x] 「今すぐ始める」CTAボタンの実装
  - [x] アニメーションと視覚的バランスの維持
  - [x] レスポンシブデザインの確保
- [x] 🔴 Google Fontsタイムアウトエラーの解決
  - [x] Inter、Poppins、Noto Sans JPフォントにフォールバック設定追加
  - [x] Tailwind ConfigにカスタムフォントファミリーFallback定義
  - [x] Next.jsフォント最適化設定の改善
  - [x] ネットワークエラー耐性の向上

## 開発環境の改善
- [x] 開発サーバー起動時の警告解消
  - [x] metadata.metadataBase未設定警告の解決
    - [x] app/layout.tsxにmetadataBase設定を追加
    - [x] 環境変数NEXT_PUBLIC_SITE_URLの対応
  - [x] browserslist古い警告の解決
    - [x] npx update-browserslist-db@latestの実行
    - [x] caniuse-liteデータベースの更新
  - [x] 開発サーバーの正常起動確認
- [x] プロセス終了時エラーの根本的解決
  - [x] Next.js 13.5.1 → 13.5.6へのアップデート
    - [x] package.jsonのNext.jsバージョン更新
    - [x] npm installによるアップデート実行
    - [x] SIGINTエラーの完全解決確認
  - [x] 不要なカスタムスクリプトの削除
    - [x] scripts/dev.jsファイルの削除
    - [x] package.jsonスクリプトの標準化
    - [x] READMEファイルの更新
  - [x] 開発サーバーの安定動作確認
  - [x] エラーなしでのプロセス終了確認

## コンタクトフォーム機能改善
- [~] Vercel API Routesを使ったコンタクトフォーム送信機能の実装
  - [x] 実装計画の立案
  - [x] メール送信ライブラリのインストールと設定
    - [x] Nodemailerのインストール
    - [x] 環境変数の設定（SMTP認証情報）
  - [x] API Routeの実装
    - [x] `app/api/contact/route.ts`の作成
    - [x] POSTリクエストハンドラの実装
    - [x] バリデーション処理の追加
    - [x] エラーハンドリングの実装
  - [x] ContactFormコンポーネントの修正
    - [x] API Route呼び出しの実装
    - [x] 送信状態の管理改善
    - [x] エラーメッセージの改善
  - [ ] テストとデバッグ
    - [ ] ローカル環境でのテスト
    - [ ] 本番環境でのテスト 