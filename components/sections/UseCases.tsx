"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Check } from 'lucide-react';

const useCases = [
  {
    title: '経費精算の自動化',
    description: 'レシートをアップロードするだけで自動的にデータ化。承認フローも自動化できます。',
    image: '/images/usecase-expenses.png',
  },
  {
    title: '請求書処理の効率化',
    description: '受領した請求書を自動で読み取り、会計システムに連携。支払い処理までスムーズに完了します。',
    image: '/images/usecase-invoices.png',
  },
  {
    title: '勤怠管理の簡素化',
    description: '従業員の勤怠データを自動集計。シフト管理や給与計算との連携も簡単に実現できます。',
    image: '/images/usecase-attendance.png',
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
            <span className="text-primary">ユースケース</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            オシゴトポチットはさまざまなバックオフィス業務の自動化を実現します。
            主な活用シーンをご紹介します。
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
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-foreground">
                        {index === 0 && item === 1 && '手入力の工数を削減し、入力ミスをゼロに'}
                        {index === 0 && item === 2 && '承認フローを自動化し、処理時間を短縮'}
                        {index === 0 && item === 3 && 'リアルタイムでの経費状況の可視化を実現'}
                        
                        {index === 1 && item === 1 && 'OCRで請求書データを自動抽出し転記作業を削減'}
                        {index === 1 && item === 2 && '支払いスケジュール管理と自動リマインド機能'}
                        {index === 1 && item === 3 && '会計システムとのシームレスな連携を実現'}
                        
                        {index === 2 && item === 1 && '打刻データの自動集計で集計作業を大幅に削減'}
                        {index === 2 && item === 2 && '異常値の自動検出でチェック工数を削減'}
                        {index === 2 && item === 3 && '給与計算システムへのデータ連携を自動化'}
                      </span>
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