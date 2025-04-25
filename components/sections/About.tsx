"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Settings, Wrench } from 'lucide-react';

const features = [
  {
    title: '完全オーダーメイド',
    description: '最初のヒアリングから要件定義 → 設計 → 開発 → 保守までワンストップ。',
    icon: Settings,
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'AI 自動化',
    description: '見積書作成・経費入力・進捗集計などをボタンひと押しで実行。',
    icon: Code,
    color: 'bg-secondary/10 text-secondary',
  },
  {
    title: 'まるごと伴走',
    description: '導入後の操作レッスンや機能追加も、専属エンジニアが対応。',
    icon: Wrench,
    color: 'bg-green-100 text-green-600',
  },
];

export default function About() {
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
    <section className="section-padding" id="about">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">オシゴトポチッと</span> は
            </h2>
            
            <p className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
              <span className="bg-primary/10 px-2 py-1 rounded text-primary">AI を組み込んだ Web アプリ</span>を<br />
              <span className="bg-primary/10 px-2 py-1 rounded text-primary">完全オーダーメイド</span>で開発する受注型サービスです。
            </p>
            
            <p className="text-lg text-muted-foreground mb-2">
              IT の専門知識がなくても大丈夫。<br />
              御社の "いまのやり方" をそのまま AI に覚えさせ、
              面倒なルーチンを <span className="font-bold">ボタン 1 つ</span> にまとめます。
            </p>
            <p className="text-xs text-muted-foreground mb-4">※ 業務の複雑さによっては、複数のボタンや手順が必要になる場合もあります。</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="w-full h-px bg-border my-12"></div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              3 つの特徴
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${feature.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h4 className="text-xl font-bold mb-2">
                  <span className="text-primary">{feature.title}</span>
                </h4>
                
                <p className="text-muted-foreground text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 