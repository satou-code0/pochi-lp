"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Check } from 'lucide-react';

const useCases = [
  {
    title: '帳票自動作成システム',
    description: '業界特有の帳票をAIで自動生成',
    image: '/images/usecase-expenses.png',
    details: [
      '複雑な業界固有フォーマットに完全対応',
      '既存システムとシームレスに連携',
      '承認フローも含めた一貫プロセスを実現'
    ]
  },
  {
    title: '営業支援アプリ',
    description: '御社の営業フローに合わせたCRM',
    image: '/images/usecase-invoices.png',
    details: [
      '既存営業プロセスをそのままデジタル化',
      'AI分析で顧客対応パターンを最適化',
      '商談履歴と成約率を自動分析'
    ]
  },
  {
    title: '在庫管理システム',
    description: 'AIが在庫状況を予測・管理',
    image: '/images/usecase-attendance.png',
    details: [
      '御社特有の在庫管理ルールを完全実装',
      '需要予測AIで適正在庫を自動計算',
      '発注から納品までの全プロセス可視化'
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
            <span className="text-primary">開発事例</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            オシゴトポチットは業種や業務に合わせた完全オーダーメイドのAIアプリを開発します。
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
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{useCase.description}</p>
                
                <ul className="space-y-3">
                  {useCase.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}