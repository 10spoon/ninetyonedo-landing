'use client';

import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: '휴먼큐레이터스 (HumanQurators)',
        description: '교육 전문가들을 위한 콘텐츠 큐레이션 서비스',
        url: 'https://humanqurators.com',
        tags: ['SaaS', '큐레이션'],
        color: 'bg-emerald-500/10'
    },
    {
        title: '써치클래스',
        description: '전국 학원 강의 검색 및 비교 서비스',
        url: 'https://searchclass.kr',
        tags: ['플랫폼', '검색 엔진'],
        color: 'bg-blue-500/10'
    },
    {
        title: 'SSALMUG',
        description: '소셜 기반 앱테크 및 커뮤니티 플랫폼',
        url: 'https://ssalmug.com',
        tags: ['모바일 앱', '소셜'],
        color: 'bg-orange-500/10'
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-20 sm:py-28 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                        포트폴리오
                    </h2>
                    <p className="mt-4 text-lg text-foreground/60">
                        91도가 함께 고민하고 현실로 만든 프로젝트들입니다.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
                                <ExternalLink size={20} className="text-primary" />
                            </div>

                            <div className={`mb-6 inline-block rounded-lg px-3 py-1 text-xs font-semibold text-primary ${project.color}`}>
                                {project.tags.join(' / ')}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <span className="text-sm font-medium text-foreground/40 group-hover:text-primary/70 transition-colors">
                                {project.url.replace('https://', '')}
                            </span>
                        </a>
                    ))}

                    {/* Next Project CTA Card */}
                    <a
                        href="/#contact"
                        className="group relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-8 transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary/5 text-center"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                            <span className="text-2xl font-bold">+</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            다음 프로젝트는 당신!
                        </h3>
                        <p className="text-sm text-foreground/60 mb-6">
                            여러분의 아이디어를 현실로<br />조립할 준비가 되어 있습니다.
                        </p>
                        <span className="text-sm font-semibold text-primary group-hover:underline">
                            상담 신청하기 →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
