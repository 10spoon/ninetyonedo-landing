'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-secondary border-2 border-foreground shadow-brutal-sm px-4 py-2">
            <div className="h-3 w-3 bg-accent border border-foreground" />
            <span className="text-sm font-bold text-foreground">주식회사 91도</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight text-foreground sm:text-6xl md:text-7xl px-4">
            <span className="block sm:inline">완벽한 설계보다 </span>
            <span className="block sm:inline">중요한 것은</span>
            <br className="hidden sm:block" />
            <span className="text-primary mt-2 block sm:mt-0 sm:inline bg-secondary/30 px-2">현실에 잘 조립되는 서비스</span>입니다.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 leading-relaxed px-4">
            <span className="block sm:inline">아이디어와 현실 사이의 마찰을 줄이기 위해 </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">설계·개발·출시 전 과정에 의도적인 여유를 남깁니다.</span>
          </p>

          <div className="mt-8 inline-block bg-muted border-2 border-foreground shadow-brutal-sm px-6 py-3">
            <p className="text-sm font-bold text-foreground">
              &ldquo;아이디어가 착 조립되는 각도, 91도&rdquo;
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center">
            <Link
              href="/#pricing"
              className="inline-block bg-primary px-8 py-3 text-base font-bold text-primary-foreground border-2 border-foreground shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              패키지 보기
            </Link>
            <Link
              href="/#contact"
              className="inline-block bg-secondary px-8 py-3 text-base font-bold text-foreground border-2 border-foreground shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              밀착 상담 받기
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 bg-primary border-2 border-foreground shadow-brutal p-6">
              <div className="text-4xl font-black text-primary-foreground">48시간</div>
              <p className="text-sm text-primary-foreground/80 font-semibold">랜딩 페이지 제작</p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-secondary border-2 border-foreground shadow-brutal p-6">
              <div className="text-4xl font-black text-foreground">5일</div>
              <p className="text-sm text-foreground/70 font-semibold">핵심 기능 구현</p>
            </div>
            <div className="flex flex-col items-center gap-2 bg-accent border-2 border-foreground shadow-brutal p-6">
              <div className="text-4xl font-black text-foreground">10일</div>
              <p className="text-sm text-foreground/70 font-semibold">실사용 서비스 제작</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
