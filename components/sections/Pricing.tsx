"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';
import { Button } from '../ui/button';

const pricingPlans = [
  {
    name: 'Lite',
    description: '小規模チーム向け基本プラン',
    price: '19,800',
    features: [
      { name: '同時ユーザー数', value: '5名まで' },
      { name: '自動化タスク数', value: '月20回まで', included: true },
      { name: 'OCR機能', value: '基本のみ', included: true },
      { name: 'データ保存期間', value: '3ヶ月', included: true },
      { name: '承認フロー', value: '1段階', included: true },
      { name: 'API連携', value: '3つまで', included: true },
      { name: 'カスタムワークフロー', value: '非対応', included: false },
      { name: '専任サポート', value: '非対応', included: false },
    ],
  },
  {
    name: 'Standard',
    description: '中規模企業向け拡張プラン',
    price: '49,800',
    popular: true,
    features: [
      { name: '同時ユーザー数', value: '20名まで' },
      { name: '自動化タスク数', value: '月100回まで', included: true },
      { name: 'OCR機能', value: '高精度', included: true },
      { name: 'データ保存期間', value: '1年', included: true },
      { name: '承認フロー', value: '3段階', included: true },
      { name: 'API連携', value: '10個まで', included: true },
      { name: 'カスタムワークフロー', value: '5つまで', included: true },
      { name: '専任サポート', value: 'メールのみ', included: true },
    ],
  },
  {
    name: 'Pro',
    description: '大規模企業向け高機能プラン',
    price: '99,800',
    features: [
      { name: '同時ユーザー数', value: '無制限' },
      { name: '自動化タスク数', value: '無制限', included: true },
      { name: 'OCR機能', value: 'AI高精度', included: true },
      { name: 'データ保存期間', value: '無制限', included: true },
      { name: '承認フロー', value: '無制限', included: true },
      { name: 'API連携', value: '無制限', included: true },
      { name: 'カスタムワークフロー', value: '無制限', included: true },
      { name: '専任サポート', value: '24時間対応', included: true },
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
            <span className="text-primary">料金プラン</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            規模や目的に応じて最適なプランをお選びいただけます。
            すべてのプランは14日間の無料トライアル付きです。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${
                plan.popular 
                  ? 'border-primary relative transform md:scale-105 md:-translate-y-2' 
                  : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                  人気プラン
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">¥{plan.price}</span>
                  <span className="text-muted-foreground"> / 月</span>
                </div>
                
                <Button 
                  className={`w-full mb-8 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  14日間無料で試す
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm">{feature.name}</span>
                      <div className="flex items-center">
                        {feature.included !== undefined ? (
                          feature.included ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          <span className="text-sm font-medium">{feature.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            カスタムプランも承ります。お気軽にお問い合わせください。
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            法人向けカスタムプランについて
          </Button>
        </div>
      </div>
    </section>
  );
}