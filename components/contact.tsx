'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="bg-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            91도와 상담 시작하기
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            아이디어에 대해 공유해주세요. <strong>밀착 상담</strong>을 통해 실제 구현 가능한 최적의 개발 방향을 제안해드립니다.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  이름
                </label>
                <input
                  type="text"
                  placeholder="예: 김사업"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                전화번호
              </label>
              <input
                type="tel"
                placeholder="010-1234-5678"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                프로젝트 설명
              </label>
              <textarea
                placeholder="당신의 아이디어와 목표에 대해 설명해주세요..."
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground rounded-lg transition-opacity hover:opacity-90"
            >
              상담 신청하기
            </button>
          </form>

          <div className="mt-12 border-t border-border pt-12">
            <p className="text-center font-medium text-foreground mb-8">
              다른 방식으로 연락하고 싶으신가요?
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <p className="text-sm text-foreground/60">이메일</p>
                <a
                  href="mailto:contact@91do.co.kr"
                  className="font-medium text-foreground hover:text-primary"
                >
                  contact@91do.co.kr
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone size={20} className="text-primary" />
                </div>
                <p className="text-sm text-foreground/60">전화</p>
                <a
                  href="tel:050713278090"
                  className="font-medium text-foreground hover:text-primary"
                >
                  0507-1327-8090
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <p className="text-sm text-foreground/60">위치</p>
                <p className="font-medium text-foreground">서울 (홍대, 강남)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
