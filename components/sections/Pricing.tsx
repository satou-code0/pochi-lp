"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const pricingPlans = [
  {
    name: 'シンプル',
    description: '単発作業の自動化',
    price: '15万円〜',
    priceDetail: '税抜',
    maintenance: '1.5万円〜/月',
    included: [
      '要件ヒアリング 1回',
      '画面数 3以内',
      'クラウド連携 1系統',
      '操作ガイド付き',
    ],
    bestFor: [
      '「単発作業を自動化したい」',
      '「紙→デジタルへ まず1本」',
    ],
    examples: [
      'OCR(画像認識) × スプレッドシート保存',
      '名刺 → 顧客リスト化',
      'レシート撮影 → 経費台帳へ',
    ],
    features: [
      { name: '要件定義・ヒアリング', included: true },
      { name: 'UI/UXデザイン', included: true },
      { name: 'AI機能実装', included: true },
      { name: '保守サポート', value: '6ヶ月', included: true },
      { name: '専任担当者', included: true },
      { name: 'カスタマイズ範囲', value: '標準', included: true },
    ],
  },
  {
    name: 'スタンダード',
    description: '月次ルーチンの自動化',
    price: '45万円〜',
    priceDetail: '税抜',
    maintenance: '3万円〜/月',
    popular: true,
    included: [
      '画面数 10以内',
      'クラウド／メール連携 2〜3系統',
      'UX相談 2サイクル',
      '導入トレーニング 1h',
    ],
    bestFor: [
      '「月次ルーチンをまとめて自動化」',
      '「社内10〜30名で使う」',
    ],
    examples: [
      '売上日報 → 集計レポート自動送信',
      '在庫表 ↔ ネットショップ自動同期',
      '顧客問い合わせ → AIで一次返信',
    ],
    features: [
      { name: '要件定義・ヒアリング', included: true },
      { name: 'UI/UXデザイン', included: true },
      { name: 'AI機能実装', included: true },
      { name: '保守サポート', value: '1年', included: true },
      { name: '専任担当者', included: true },
      { name: 'カスタマイズ範囲', value: '拡張', included: true },
    ],
  },
  {
    name: 'プロ',
    description: '部門横断のワークフロー',
    price: '90万円〜',
    priceDetail: '税抜',
    maintenance: '5万円〜/月',
    included: [
      '画面数 20以内',
      '外部API 5系統まで',
      'AIモデル個別チューニング',
      'Slack／Teams通知連携',
      '対面トレーニング 3h',
    ],
    bestFor: [
      '「部門横断のワークフローを一本化」',
      '「100名規模・複数拠点で利用」',
    ],
    examples: [
      '見積〜受注〜請求を1画面で管理',
      '複数クラウド間のファイル自動整理',
      '翻訳AI付き 海外取引書類の生成',
    ],
    features: [
      { name: '要件定義・ヒアリング', included: true },
      { name: 'UI/UXデザイン', included: true },
      { name: 'AI機能実装', included: true },
      { name: '保守サポート', value: '1年', included: true },
      { name: '専任担当者', included: true },
      { name: 'カスタマイズ範囲', value: '高度', included: true },
    ],
  },
  {
    name: 'エンタープライズ',
    description: '全社DXプロジェクト',
    price: '要見積もり',
    priceDetail: '概算200万円〜',
    maintenance: '要見積もり',
    included: [
      'ユーザー数 300名以上',
      'SSO / 権限管理',
      '専用インフラ / SLA 99.9%',
      'データ移行 / セキュリティ監査',
    ],
    bestFor: [
      '「全社DXプロジェクト」',
      '「厳格なセキュリティ要件」',
    ],
    examples: [
      '基幹システム連携 AIワークフロー',
      '多言語対応 カスタマーサクセス基盤',
    ],
    features: [
      { name: '要件定義・ヒアリング', included: true },
      { name: 'UI/UXデザイン', included: true },
      { name: 'AI機能実装', included: true },
      { name: '保守サポート', value: '無制限', included: true },
      { name: '専任担当者', included: true },
      { name: 'カスタマイズ範囲', value: 'フル', included: true },
    ],
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-muted/50" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">開発費用</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            業務規模や複雑さに応じた最適なプランをご用意しています。
            IT補助金申請サポート付きで初期費用を抑えられます。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 h-full flex flex-col ${
                plan.popular 
                  ? 'border-primary relative transform md:scale-105 md:-translate-y-2' 
                  : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                  おすすめ
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{plan.description}</p>
                
                <div className="mb-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{plan.priceDetail}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">保守管理費: <span className="font-medium">{plan.maintenance}</span></p>
                </div>
                
                <h4 className="font-medium text-sm border-b pb-1 mb-2">含まれる範囲</h4>
                <ul className="text-sm space-y-1 mb-4">
                  {plan.included.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-sm border-b pb-1 mb-2">こんな課題に最適</h4>
                <ul className="text-sm space-y-1 mb-4">
                  {plan.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-medium text-sm border-b pb-1 mb-2">代表アプリ例</h4>
                <ul className="text-sm space-y-1 mb-6">
                  {plan.examples.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-1">▶</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <a 
                    href="#cta"
                    className={`block text-center py-2 px-4 rounded-md text-white font-medium w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                  >
                    無料相談を申し込む
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-sm text-muted-foreground max-w-2xl mx-auto">
          <h4 className="font-medium text-center mb-3">料金に関する補足事項</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">※</span>
              <span>月額保守管理費には、システムの稼働監視、セキュリティアップデート、サーバー/ドメイン費用が含まれています。</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">※</span>
              <span>有料APIの利用料金（OpenAI、Google、AWS等の外部サービス利用費）は別途発生します。</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">※</span>
              <span>保守管理費は利用規模やカスタマイズの程度により変動します。詳細は個別にご相談ください。</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            お客様の業務に最適なカスタム開発プランをご提案いたします。まずはお気軽にご相談ください。
          </p>
          <a 
            href="#cta"
            className="inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            詳細を問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
}