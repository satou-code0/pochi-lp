"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: '開発期間はどのくらいかかりますか？',
    answer: '規模や複雑さによって異なりますが、小規模なアプリケーションで約1〜2ヶ月、中規模で3〜4ヶ月程度です。要件定義の段階で具体的な納期をご提案します。',
  },
  {
    question: '開発に必要な情報はどのようなものですか？',
    answer: '現在の業務フローや使用しているシステム、解決したい課題などをお聞かせください。開発チームが丁寧にヒアリングを行い、必要な情報を整理します。特別な準備は必要ありません。',
  },
  {
    question: 'データセキュリティは大丈夫ですか？',
    answer: 'SupabaseとVercelのセキュアなインフラを活用し、ユーザーのデータは256ビット暗号化で保護されています。金融・医療分野で求められる水準のセキュリティ設計を取り入れており、安心してご利用いただけます。',
  },
  {
    question: '開発後のサポート体制はどうなっていますか？',
    answer: 'すべてのプランに保守サポートが含まれています。システムの動作確認、軽微な修正、利用方法のサポートなどを行います。サポート期間はプランによって異なります。',
  },
  {
    question: '既存のシステムと連携できますか？',
    answer: '可能です。主要な会計システム、勤怠管理システム、CRMなどとの連携実績があります。APIが公開されていないシステムの場合でも、CSV連携など代替手段をご提案します。',
  },
  {
    question: '開発後に機能追加や変更はできますか？',
    answer: 'もちろん可能です。実際の利用状況を見ながら必要な機能を追加したり、ワークフローの変更に合わせてシステムを進化させることができます。追加開発は別途お見積りいたします。',
  },
];

export default function Faq() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="section-padding" id="faq">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">よくある質問</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            カスタム開発に関するよくいただく質問をまとめました。
            その他のご質問はお問い合わせフォームからお気軽にどうぞ。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          
        </motion.div>
      </div>
    </section>
  );
}