'use client';

import { Video, Film, Radio } from 'lucide-react';

const services = [
  {
    title: '촬영',
    description: '제품 소개, 인터뷰, 브랜드 영상 등 목적에 맞는 촬영',
    icon: Video,
    iconBg: 'bg-primary',
  },
  {
    title: '편집',
    description: '숏폼, 유튜브, 프로모션 등 플랫폼 맞춤 편집',
    icon: Film,
    iconBg: 'bg-secondary',
  },
  {
    title: '스트리밍',
    description: '라이브 커머스, 웨비나, 온라인 행사 송출',
    icon: Radio,
    iconBg: 'bg-accent',
  },
];

export function VideoProduction() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-foreground sm:text-4xl">
            영상 콘텐츠 제작
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            서비스와 함께 브랜드를 알릴 영상도 제작합니다
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="border-[3px] border-foreground bg-card p-8 shadow-brutal hover:shadow-brutal-sm hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center ${service.iconBg} border-2 border-foreground shadow-brutal-sm`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-foreground/60">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/50">
            * 영상 제작은 별도 견적으로 진행됩니다. 상담 시 문의해주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
