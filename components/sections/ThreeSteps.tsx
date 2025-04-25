"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MousePointerClick, 
  Cog, 
  ClipboardCheck 
} from 'lucide-react';

const steps = [
  {
    title: 'ボタンをポチッ',
    description: '専用ボタンをクリックするだけで処理を開始。複雑な操作は一切必要ありません。',
    icon: MousePointerClick,
    color: 'bg-primary text-white',
  },
  {
    title: '自動処理',
    description: 'AIがデータを解析し、必要な作業を自動的に処理。バックグラウンドで確実に実行します。',
    icon: Cog,
    color: 'bg-secondary text-white',
  },
  {
    title: 'レポート受け取り',
    description: '処理結果をわかりやすくレポート化。安心の完了通知と詳細な作業内容を確認できます。',
    icon: ClipboardCheck,
    color: 'bg-primary text-white',
  },
];

export default function ThreeSteps() {
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
    <section className="section-padding bg-muted/50" id="how-it-works">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            たった<span className="text-primary">3ステップ</span>で業務効率化
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            「オシゴトポチッと」があれば、複雑な業務もシンプルに。
            誰でも簡単に使えるシステムで、バックオフィス業務の生産性を飛躍的に向上させます。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`${step.color} p-4 rounded-full mb-6`}>
                <step.icon className="h-8 w-8" />
              </div>
              
              <div className="absolute -mt-12 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Connecting lines between steps (desktop only) */}
        <div className="hidden md:block relative">
          <div className="absolute top-[-120px] left-[32%] w-[36%] border-t-2 border-dashed border-primary/50"></div>
        </div>
      </div>
    </section>
  );
}