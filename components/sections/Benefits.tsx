"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Clock, 
  Sparkles 
} from 'lucide-react';

const benefits = [
  {
    title: '業務効率向上',
    value: '生産性 +65%',
    description: '余計な作業がなくなり本業に集中',
    icon: TrendingUp,
    color: 'bg-orange-100 text-primary',
  },
  {
    title: '開発期間短縮',
    value: '最短2週間',
    description: '迅速な開発で早期に効果を実感',
    icon: Clock,
    color: 'bg-blue-100 text-secondary',
  },
  {
    title: 'カスタム最適化',
    value: '適合度 98%',
    description: '御社の業務フローに完全対応',
    icon: Sparkles,
    color: 'bg-green-100 text-green-600',
  },
];

export default function Benefits() {
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
    <section className="section-padding" id="benefits">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">オーダーメイド開発</span>だからできること
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            「オシゴトポチッと」による完全カスタマイズのAIアプリ開発は、
            汎用ツールでは実現できない業務最適化を可能にします。
            あなたの会社だけのための特別なソリューションを提供します。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`${benefit.color} p-4 rounded-full mb-6`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {benefit.value}<sup className="text-xs text-primary align-top">※</sup>
              </p>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-xs text-muted-foreground text-center mt-6">
          <p>※ 弊社実施の導入企業聞き取りアンケートによる値</p>
        </div>
      </div>
    </section>
  );
}