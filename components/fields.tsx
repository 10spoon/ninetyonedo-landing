'use client';

import { BarChart3, Zap, BookOpen } from 'lucide-react';

const fields = [
  {
    title: '플랫폼 & 매칭',
    description: '중개 서비스, 커뮤니티, 마켓플레이스 등',
    icon: BarChart3,
    iconBg: 'bg-primary',
  },
  {
    title: '소프트웨어 & 앱',
    description: 'SaaS, 웹 서비스, 내부 솔루션 등',
    icon: Zap,
    iconBg: 'bg-secondary',
  },
  {
    title: '콘텐츠 & 지식 서비스',
    description: '큐레이션, 교육, 컨설팅, IP 기반 서비스 등',
    icon: BookOpen,
    iconBg: 'bg-accent',
  },
];

export function Fields() {
  return (
    <section id="fields" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-foreground sm:text-4xl">
            개발 가능 분야
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            다양한 분야의 프로젝트 경험으로 맞춤 개발합니다
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {fields.map((field, idx) => {
            const IconComponent = field.icon;
            return (
              <div
                key={idx}
                className="border-[3px] border-foreground bg-card p-8 shadow-brutal hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center ${field.iconBg} border-2 border-foreground shadow-brutal-sm`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{field.title}</h3>
                <p className="mt-3 text-foreground/60">{field.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
