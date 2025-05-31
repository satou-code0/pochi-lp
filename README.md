# オシゴトポチッと Landing Page

このプロジェクトは「オシゴトポチッと」のランディングページです。ポチッと押すだけでバックオフィス業務を自動化するサービスを紹介するサイトです。

## 機能

- モダンなデザインのランディングページ
- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- アニメーション効果（Framer Motionによる実装）
- フォーム検証と送信機能
- SEO対策済み

## 技術スタック

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form
- Zod

## セットアップ方法

1. リポジトリをクローンする
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. 依存関係をインストールする
   ```bash
   npm install
   ```

3. 開発サーバーを起動する
   ```bash
   npm run dev
   ```

4. ブラウザで http://localhost:3000 を開く

## 開発時の注意事項

- 開発サーバーの停止は `Ctrl+C` で行ってください
- Next.js 13.5.6にアップデート済みのため、プロセス終了時のエラーは解決されています

## ビルド方法

本番用ビルドを作成するには以下のコマンドを実行します：

```bash
npm run build
```

ビルド結果は `out` ディレクトリに出力されます。

## デプロイ

このプロジェクトは静的サイトとしてエクスポートできるため、Vercel、Netlify、GitHub Pagesなど様々なホスティングサービスにデプロイ可能です。

## プロジェクト構造

- `/app` - Next.js アプリケーションのメインコード
- `/components` - 再利用可能なUIコンポーネント
- `/lib` - ユーティリティ関数やヘルパー
- `/public` - 静的ファイル（画像、フォントなど）
- `/hooks` - カスタムReact Hooks

## カスタマイズ

- `app/globals.css` でグローバルスタイルを編集できます
- `components/sections/` 内の各コンポーネントでセクションごとのコンテンツを編集できます
- `tailwind.config.ts` でTailwindの設定をカスタマイズできます

## ライセンス

All rights reserved.