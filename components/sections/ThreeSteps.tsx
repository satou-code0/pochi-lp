"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquareText, 
  Code, 
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    title: 'ヒアリング',
    description: '業務の流れを丁寧にお聞きします',
    icon: MessageSquareText,
    color: 'bg-primary text-white',
    oneWord: '対話'
  },
  {
    title: '開発・実装',
    description: 'オーダーメイドでAIアプリを構築',
    icon: Code,
    color: 'bg-secondary text-white',
    oneWord: '創造'
  },
  {
    title: '納品・運用',
    description: '導入後も伴走サポートします',
    icon: CheckCircle,
    color: 'bg-primary text-white',
    oneWord: '安心'
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
            たった<span className="text-primary">3ステップ</span>でAIアプリ導入
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            「オシゴトポチッと」は、あなたの業務に完全にフィットするAIアプリを開発します。
            ヒアリングから開発、運用まで、すべてをワンストップでサポートするので安心です。
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
              
              <span className="text-sm font-medium uppercase text-secondary mb-1">{step.oneWord}</span>
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