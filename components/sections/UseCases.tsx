"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Check, Building, AlertCircle, TrendingDown, Clock, Ban } from 'lucide-react';

const useCases = [
  {
    title: '手書きメモ → スプレッドシート自動転記',
    description: 'OCR × Sheets 連携で現場作業を効率化',
    image: '/gif/ocr.gif',
    industry: '建設現場・フィールドサービス',
    before: [
      '現場メモを写真→事務員が手入力',
      '誤入力／残業が慢性化'
    ],
    after: [
      'スマホで撮影',
      'AIが文字認識＆分類',
      'シート自動更新・月報PDF自動作成'
    ],
    benefits: [
      { icon: <Clock className="h-5 w-5" />, text: '入力作業時間', value: '8時間/週 削減' },
      { icon: <Ban className="h-5 w-5" />, text: '転記ミス', value: 'ゼロに削減' }
    ]
  },
  {
    title: '見積書・請求書 ワンクリック生成 & メール送信',
    description: '業務文書の作成・送信を自動化',
    image: '/gif/billgif.gif',
    industry: '製造／クリエイティブ／士業',
    before: [
      'テンプレをコピーして数字を書き換え→PDF化→メール添付',
      '漏れや二重請求のリスク'
    ],
    after: [
      '品番・数量を入力→ポチッ',
      'AIが単価・税を計算→PDF生成',
      '取引先へ自動メール & 売掛台帳更新'
    ],
    benefits: [
      { icon: <TrendingDown className="h-5 w-5" />, text: '作成時間', value: '90%削減' },
      { icon: <Ban className="h-5 w-5" />, text: '請求漏れ', value: 'ほぼゼロに' }
    ]
  },
  {
    title: '在庫 & EC 在庫 同期 + 発注点予測',
    description: 'AIが販売ペースを学習し最適在庫を維持',
    image: '/gif/stock.gif',
    industry: '小売／メーカー (10〜100名)',
    before: [
      '倉庫在庫とネットショップの数がズレる',
      '欠品／過剰在庫による機会損失'
    ],
    after: [
      '倉庫システムCSVをアップ or API連携',
      'AIが販売ペースを学習し安全在庫を算出',
      'ボタン1つで EC 在庫反映 & 発注アラート'
    ],
    benefits: [
      { icon: <TrendingDown className="h-5 w-5" />, text: '欠品率', value: '12%→2%に改善' },
      { icon: <TrendingDown className="h-5 w-5" />, text: '在庫コスト', value: '18%削減' }
    ]
  },
];

export default function UseCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-muted/50" id="usecases">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">こんなの</span>作れます
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            オシゴトポチッとは業種や業務に合わせた完全オーダーメイドのAIアプリを開発します。
            これまでに実現した主な開発例をご紹介します。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-80 xl:h-96 w-full rounded-xl overflow-hidden ">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">{useCase.description}</p>
                
                <div className="mb-4 flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">対象業種：{useCase.industry}</span>
                </div>
                
                <div className="space-y-6 mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-destructive/10 flex items-center justify-center mr-3">
                        <AlertCircle className="h-5 w-5 text-destructive" />
                      </div>
                      <span className="font-medium">Before（課題）</span>
                    </div>
                    <ul className="space-y-2 pl-11">
                      {useCase.before.map((item, idx) => (
                        <li key={idx} className="list-disc text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">After（AIアプリ導入）</span>
                    </div>
                    <ul className="space-y-2 pl-11">
                      {useCase.after.map((item, idx) => (
                        <li key={idx} className="list-disc">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="font-medium text-lg">導入効果</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600">
                            {benefit.icon}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-muted-foreground">{benefit.text}</span>
                            <p className="text-green-700 font-bold">{benefit.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}