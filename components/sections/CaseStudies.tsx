"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '../ui/button';

const caseStudies = [
  {
    company: '株式会社テックイノベーション',
    industry: 'IT / SaaS',
    logo: '/images/case-logo-1.png',
    quote: '経費精算の処理時間が1/5になりました。以前は経理担当者が丸2日かけていた業務が、今では数時間で完了します。',
    person: '経理部長 田中様',
    results: ['処理時間 80%削減', '経理部門の工数 60%削減', '従業員満足度 30%向上'],
  },
  {
    company: '松本物流株式会社',
    industry: '物流 / 輸送',
    logo: '/images/case-logo-2.png',
    quote: '全国80拠点の勤怠管理を一元化できました。拠点ごとに異なっていた管理方法を統一でき、本社での集計作業が激減しています。',
    person: '人事部 佐藤様',
    results: ['管理工数 70%削減', 'データ集計時間 85%削減', '人事戦略立案時間 40%増加'],
  },
  {
    company: '医療法人ヘルスケア',
    industry: '医療 / 介護',
    logo: '/images/case-logo-3.png',
    quote: '複数の施設間での請求書処理が自動化され、各施設の事務作業が大幅に削減。スタッフが患者様のケアに集中できるようになりました。',
    person: '理事長 鈴木様',
    results: ['事務作業 65%削減', '入力ミス 95%削減', '患者対応時間 25%増加'],
  },
];

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const slideRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };
  
  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding" id="casestudies">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">導入事例</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            様々な業種のお客様にご利用いただいています。
            実際の導入効果をご紹介します。
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div ref={slideRef} className="relative h-full overflow-hidden p-6 md:p-10">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="min-w-full px-10 md:px-16"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="mb-6 h-16 w-32 relative">
                        <Image
                          src={study.logo}
                          alt={study.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                      <p className="text-secondary mb-6">{study.industry}</p>
                      
                      <div className="relative">
                        <Quote className="absolute text-primary/20 h-12 w-12 -top-4 -left-4" />
                        <blockquote className="text-lg text-foreground/80 mb-6 relative z-10 pl-6">
                          "{study.quote}"
                        </blockquote>
                      </div>
                      
                      <p className="text-foreground font-medium">{study.person}</p>
                    </div>
                    
                    <div className="bg-muted/30 p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-4">導入効果</h4>
                      <ul className="space-y-4">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                              <Check className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-2">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm hover:bg-background/90"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm hover:bg-background/90"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

import { Check } from 'lucide-react';