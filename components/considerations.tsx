'use client';

const sections = [
  {
    title: '공통 사항',
    items: [
      'PC / 모바일 모두 대응하는 반응형 웹으로 제작',
      '초기 MVP에 최적화된 구조로 개발',
    ],
  },
  {
    title: '비용 및 유의사항',
    subsections: [
      {
        subtitle: '도메인, 호스팅, 앱스토어 등록 비용은 별도입니다.',
        items: [
          '도메인(.com 기준): 약 2.5만원/년',
          '앱 등록비: Apple App Store 15만원 / Google Play 15만원',
          '직접 등록, 단 등록 방법 매뉴얼 제공',
        ],
      },
      {
        subtitle: 'AI 기능 추가 시',
        items: [
          'ChatGPT API, Gemini API는 직접 계정 생성',
          '사용량 기반 비용은 AI 제공사(OpenAI, Google)에 직접 결제',
        ],
      },
    ],
  },
  {
    title: '상담 방식',
    items: [
      '기본: 비대면 밀착 상담',
      '대면 밀착 상담 가능 지역: 서울(홍대, 강남)',
    ],
  },
];

export function Considerations() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {section.title}
              </h3>

              {section.items && (
                <ul className="space-y-3 mb-8">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/70">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="space-y-6">
                  {section.subsections.map((sub, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-foreground mb-3">
                        {sub.subtitle}
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {sub.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-foreground/70">
                            <span className="text-primary">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
