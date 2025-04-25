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
    question: '導入にどれくらいの時間がかかりますか？',
    answer: '基本的な導入は最短2営業日で完了します。お客様の業務フローの複雑さによって期間は前後しますが、専任の導入支援チームがスムーズな立ち上げをサポートします。',
  },
  {
    question: '既存のシステムと連携できますか？',
    answer: '多くの主要な会計システム、勤怠管理システム、ERPなどとAPI連携が可能です。対応していないシステムの場合でも、CSVエクスポート/インポート機能を使って連携できます。詳細は導入前の無料コンサルティングでご確認いただけます。',
  },
  {
    question: 'セキュリティ対策は万全ですか？',
    answer: 'ISO27001認証を取得しており、データは256bit暗号化で保護されています。また、SOC2 Type2監査にも対応済みで、金融機関での導入実績も多数ございます。',
  },
  {
    question: 'カスタマイズは可能ですか？',
    answer: 'StandardプランとProプランではカスタムワークフローの作成が可能です。特に複雑なカスタマイズが必要な場合は、専門チームによるオーダーメイド開発も承っております（別途費用）。',
  },
  {
    question: '契約期間の縛りはありますか？',
    answer: 'すべてのプランは月額契約と年額契約（2ヶ月分お得）からお選びいただけます。最低契約期間の縛りはなく、いつでも解約可能です。ただし、年額契約の場合は残月数分の返金はございませんのでご了承ください。',
  },
  {
    question: 'サポート体制について教えてください',
    answer: 'Liteプランはチャットとナレッジベースによるセルフサポート、Standardプランはそれに加えてメールサポート（平日10-18時）、Proプランは24時間365日対応の専任サポートと電話サポートが含まれています。',
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
            導入を検討される際によくいただく質問をまとめました。
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