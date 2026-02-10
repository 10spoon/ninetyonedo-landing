'use client';

import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { submitContact } from '@/app/actions';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await submitContact(formData);

    setIsSubmitting(false);

    if (result.success) {
      toast.success('상담 신청이 완료되었습니다. 곧 연락드리겠습니다!');
      (event.target as HTMLFormElement).reset();
    } else {
      toast.error(result.error || '오류가 발생했습니다.');
    }
  }

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-foreground sm:text-4xl">
            91도와 상담 시작하기
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            아이디어에 대해 공유해주세요. <strong>밀착 상담</strong>을 통해 실제 구현 가능한 최적의 개발 방향을 제안해드립니다.
          </p>
        </div>

        <div className="border-[3px] border-foreground bg-card p-8 sm:p-12 shadow-brutal-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="예: 김사업"
                  className="w-full px-4 py-2 border-2 border-foreground bg-background text-foreground placeholder:text-foreground/40 shadow-brutal-sm focus:shadow-[1px_1px_0px_black] focus:translate-x-[2px] focus:translate-y-[2px] transition-all focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@91do.co.kr"
                  className="w-full px-4 py-2 border-2 border-foreground bg-background text-foreground placeholder:text-foreground/40 shadow-brutal-sm focus:shadow-[1px_1px_0px_black] focus:translate-x-[2px] focus:translate-y-[2px] transition-all focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                전화번호
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="010-1234-5678"
                className="w-full px-4 py-2 border-2 border-foreground bg-background text-foreground placeholder:text-foreground/40 shadow-brutal-sm focus:shadow-[1px_1px_0px_black] focus:translate-x-[2px] focus:translate-y-[2px] transition-all focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                프로젝트 설명
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="당신의 아이디어와 목표에 대해 설명해주세요..."
                rows={5}
                className="w-full px-4 py-2 border-2 border-foreground bg-background text-foreground placeholder:text-foreground/40 shadow-brutal-sm focus:shadow-[1px_1px_0px_black] focus:translate-x-[2px] focus:translate-y-[2px] transition-all focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary px-8 py-3 text-base font-bold text-primary-foreground border-2 border-foreground shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  처리 중...
                </>
              ) : (
                '상담 신청하기'
              )}
            </button>
          </form>

          <div className="mt-12 border-t-2 border-foreground pt-12">
            <p className="text-center font-bold text-foreground mb-8">
              다른 방식으로 연락하고 싶으신가요?
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-accent border-2 border-foreground shadow-brutal-sm">
                  <Mail size={20} className="text-foreground" />
                </div>
                <p className="text-sm text-foreground/60">이메일</p>
                <a
                  href="mailto:contact@91do.co.kr"
                  className="font-bold text-foreground hover:text-primary"
                >
                  contact@91do.co.kr
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-accent border-2 border-foreground shadow-brutal-sm">
                  <Phone size={20} className="text-foreground" />
                </div>
                <p className="text-sm text-foreground/60">전화</p>
                <a
                  href="tel:050713278090"
                  className="font-bold text-foreground hover:text-primary"
                >
                  0507-1327-8090
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center bg-accent border-2 border-foreground shadow-brutal-sm">
                  <MapPin size={20} className="text-foreground" />
                </div>
                <p className="text-sm text-foreground/60">위치</p>
                <p className="font-bold text-foreground">서울 (홍대, 강남)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
