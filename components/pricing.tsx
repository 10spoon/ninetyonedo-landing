'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: '랜딩 페이지',
    price: '20만원',
    duration: '',
    description: '아이디어 검증 / 사전 수요 수집용',
    features: [
      '단일 페이지 랜딩',
      '메일링 리스트 수집',
      '밀착 상담 (대면/비대면 선택 가능)',
      '상담 후 48시간 이내 전달',
      '완료 후 1개월 이내 2회 수정'
    ],
    recommended: [
      '서비스 반응을 먼저 보고 싶은 경우',
      '투자/지원사업/마케팅 전 사전 검증',
    ],
    highlight: false,
  },
  {
    name: '핵심 기능 1개 구현',
    price: '100만원',
    duration: '',
    description: '"이 기능만 있으면 설명이 된다" 단계',
    features: [
      '최대 3페이지 구성',
      '핵심 기능 1개 구현',
      '밀착 상담 (대면/비대면 선택 가능)',
      '상담 후 5일 이내 전달',
      '완료 후 90일 이내 5회 수정'
    ],
    recommended: [
      '데모가 필요한 단계',
      '고객에게 직접 써보게 하고 싶은 경우',
    ],
    highlight: false,
  },
  {
    name: '실사용 가능한 MVP 앱',
    price: '상담 후 결정',
    duration: '',
    description: '실제 사용자 유입이 가능한 수준',
    features: [
      '최대 10페이지 구성',
      '실 서비스 가능한 구조',
      '밀착 상담 (대면/비대면 선택 가능)',
      '상담 후 10일 이내 전달',
      '완료 후 180일 이내 10회 수정'
    ],
    recommended: [
      '바로 운영·테스트를 시작하고 싶은 경우',
      '초기 유저 확보를 목표로 하는 경우',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-foreground sm:text-4xl">
            서비스 개발 패키지
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            단계별로 맞춘 패키지로 필요한 것만 개발합니다
          </p>
          <p className="mt-2 text-sm text-foreground/40">
            * 모든 금액은 VAT 별도입니다
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative border-[3px] border-foreground shadow-brutal-lg transition-all ${pkg.highlight
                ? 'bg-secondary md:scale-105'
                : 'bg-card'
                }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 border-2 border-foreground shadow-brutal-sm text-sm font-bold">
                  인기
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-2 text-sm text-foreground/60">{pkg.description}</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-foreground">
                      {pkg.price}
                    </span>
                    {pkg.duration && (
                      <span className="text-sm text-foreground/60">{pkg.duration}</span>
                    )}
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className={`mt-6 block w-full py-2 px-4 text-center font-bold border-2 border-foreground shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${pkg.highlight
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted'
                    }`}
                >
                  문의하기
                </Link>

                <div className="mt-8 border-t-2 border-foreground pt-8">
                  <h4 className="text-sm font-bold text-foreground mb-4">
                    포함 사항
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70">
                        <span className="flex-shrink-0 mt-0.5 h-5 w-5 flex items-center justify-center bg-accent border border-foreground">
                          <Check size={12} className="text-foreground" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t-2 border-foreground pt-8">
                  <h4 className="text-sm font-bold text-foreground mb-4">
                    추천 상황
                  </h4>
                  <ul className="space-y-2">
                    {pkg.recommended.map((rec, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/70">
                        <span className="text-primary font-bold">👉</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
