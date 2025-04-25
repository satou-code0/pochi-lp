"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Banknote, 
  Clock, 
  BarChart3 
} from 'lucide-react';

const benefits = [
  {
    title: '人件費',
    value: '-40%',
    description: 'バックオフィス業務の自動化により、人件費を40%削減可能です。',
    icon: Banknote,
    color: 'bg-orange-100 text-primary',
  },
  {
    title: '作業時間',
    value: '-120h',
    description: '月間の作業時間を最大120時間削減。他の重要業務に集中できます。',
    icon: Clock,
    color: 'bg-blue-100 text-secondary',
  },
  {
    title: 'ミス率',
    value: '-95%',
    description: '手作業によるミスを95%削減。正確な処理で業務品質が向上します。',
    icon: BarChart3,
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
            <span className="text-primary">導入効果</span>で選ばれています
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            「オシゴトポチッと」の導入企業が実感している数字をご紹介します。
            業種や規模を問わず、確実な効果を実感いただけます。
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
                {benefit.value}
              </p>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}