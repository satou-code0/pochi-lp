"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '@/components/shared/ContactForm';

export default function CtaSection() {
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
    <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              今日から<span className="text-primary">ポチッと</span>
              <br />始めてみませんか？
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              14日間の無料トライアルで、貴社の業務効率化を体験してみてください。
              専任コンサルタントが導入から活用までしっかりサポートします。
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>初期費用0円、導入後すぐに効果を実感</span>
              </li>
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>業界最短2日で導入完了</span>
              </li>
              <li className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>専任担当者によるセットアップサポート</span>
              </li>
            </ul>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center border-2 border-white font-bold">A</div>
                <div className="h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center border-2 border-white font-bold">B</div>
                <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center border-2 border-white font-bold">C</div>
              </div>
              <div className="text-sm">
                <p>4,000社以上の導入実績</p>
                <p className="text-muted-foreground">平均満足度 4.8/5.0</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center">無料デモを申し込む</h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';