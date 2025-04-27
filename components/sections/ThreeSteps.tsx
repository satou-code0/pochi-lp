"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquareText, 
  Code, 
  CheckCircle,
  FileSpreadsheet,
  FileSearch,
  Lightbulb,
  LayoutDashboard,
  Settings,
  RefreshCw
} from 'lucide-react';

const steps = [
  {
    title: 'ヒアリング',
    description: '業務の流れを丁寧にお聞きします',
    icon: MessageSquareText,
    color: 'bg-primary text-white',
    oneWord: '対話',
    detailedDescription: '現場の課題や業務フローを深く理解するためのヒアリングを実施します。実際の業務現場を見学し、担当者様の声を直接お聞きすることで、最適なソリューションを設計するための土台を作ります。',
    points: [
      {
        icon: <FileSpreadsheet className="h-5 w-5" />,
        title: '業務フロー分析',
        desc: '現状の業務プロセスを可視化し、非効率な部分を特定'
      },
      {
        icon: <FileSearch className="h-5 w-5" />,
        title: '要件定義',
        desc: '課題解決に必要な機能と優先順位を明確化'
      },
      {
        icon: <Lightbulb className="h-5 w-5" />,
        title: 'ソリューション提案',
        desc: 'AI技術を活用した最適な解決策をご提案'
      }
    ]
  },
  {
    title: '開発・実装',
    description: 'オーダーメイドでAIアプリを構築',
    icon: Code,
    color: 'bg-secondary text-white',
    oneWord: '創造',
    detailedDescription: 'ヒアリングで明確になった要件に基づき、御社の業務に完全にフィットするアプリケーションを開発します。最新のAI技術と使いやすいインターフェースで、現場での導入がスムーズに行えるよう設計します。',
    points: [
      {
        icon: <LayoutDashboard className="h-5 w-5" />,
        title: 'UI/UX設計',
        desc: '直感的で使いやすいインターフェースを設計'
      },
      {
        icon: <Code className="h-5 w-5" />,
        title: 'AIモデル構築',
        desc: '業務特化型のAIモデルをカスタム開発'
      },
      {
        icon: <Settings className="h-5 w-5" />,
        title: '既存システム連携',
        desc: '社内システムとのシームレスな統合を実現'
      }
    ]
  },
  {
    title: '納品・運用',
    description: '導入後も伴走サポートします',
    icon: CheckCircle,
    color: 'bg-primary text-white',
    oneWord: '安心',
    detailedDescription: 'アプリケーションの納品後も、継続的なサポートを提供します。現場での運用状況を確認し、必要に応じて機能改善や拡張を行います。長期的なパートナーとして、御社のDX推進を支援します。',
    points: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: '導入トレーニング',
        desc: '現場スタッフへの丁寧な使用方法説明と研修'
      },
      {
        icon: <RefreshCw className="h-5 w-5" />,
        title: '継続的改善',
        desc: '利用状況に基づく定期的な機能改善とアップデート'
      },
      {
        icon: <MessageSquareText className="h-5 w-5" />,
        title: '専任サポート',
        desc: '専任担当者による迅速な問い合わせ対応'
      }
    ]
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
    <section className="section-padding bg-muted/30" id="how-it-works">
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-gray-100 relative"
            >
              {/* Header */}
              <div className="relative">
                <div className={`${step.color} p-6 pl-14 flex items-center justify-between`}>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{step.oneWord}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <div className="p-3 bg-white/20 rounded-full">
                    <step.icon className="h-7 w-7" />
                  </div>
                </div>
                
                <div className="absolute top-1/2 -translate-y-1/2 left-4 w-7 h-7 bg-white text-primary font-bold rounded-full flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-5">{step.detailedDescription}</p>
                
                <div className="space-y-4">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{point.title}</h4>
                        <p className="text-sm text-muted-foreground">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Connecting arrows (desktop only)
          <div className="hidden lg:block absolute top-1/3 left-[calc(33.33%-10px)] w-[calc(33.33%+20px)] z-10">
            <div className="relative h-0">
              <div className="absolute w-full flex items-center justify-center">
                <div className="h-0.5 w-full bg-primary/30"></div>
                <div className="absolute right-0 h-3 w-3 rotate-45 border-t-2 border-r-2 border-primary/60"></div>
              </div>
            </div>
          </div> */}
          
          {/* <div className="hidden lg:block absolute top-1/3 left-[calc(66.66%-10px)] w-[calc(33.33%+20px)] z-10">
            <div className="relative h-0">
              <div className="absolute w-full flex items-center justify-center">
                <div className="h-0.5 w-full bg-primary/30"></div>
                <div className="absolute right-0 h-3 w-3 rotate-45 border-t-2 border-r-2 border-primary/60"></div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}