import { ImageResponse } from 'next/og';

export const alt = '91도 - 밀착 상담 기반 MVP 개발 파트너';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadGoogleFont(font: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
    },
  }).then((res) => res.text());

  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype|woff)'\)/);
  if (!match) {
    throw new Error('Could not find font URL in CSS');
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const fontBold = await loadGoogleFont('Noto+Sans+KR', 900);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#f5f0e8',
          padding: '40px',
          fontFamily: 'Noto Sans KR',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            border: '6px solid #1a1a1a',
            boxShadow: '12px 12px 0px #1a1a1a',
            padding: '60px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#4040e0',
                  border: '4px solid #1a1a1a',
                  boxShadow: '4px 4px 0px #1a1a1a',
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: 900,
                }}
              >
                91
              </div>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#1a1a1a',
                }}
              >
                주식회사 91도
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontSize: '64px',
                  fontWeight: 900,
                  color: '#1a1a1a',
                  lineHeight: 1.2,
                }}
              >
                밀착 상담 기반
              </span>
              <span
                style={{
                  fontSize: '64px',
                  fontWeight: 900,
                  color: '#4040e0',
                  lineHeight: 1.2,
                }}
              >
                MVP 개발 파트너
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 32px',
                backgroundColor: '#4040e0',
                border: '4px solid #1a1a1a',
                boxShadow: '4px 4px 0px #1a1a1a',
                color: '#ffffff',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 900 }}>48시간</span>
              <span style={{ fontSize: '16px', fontWeight: 900, opacity: 0.85 }}>
                랜딩 페이지
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 32px',
                backgroundColor: '#e0c840',
                border: '4px solid #1a1a1a',
                boxShadow: '4px 4px 0px #1a1a1a',
                color: '#1a1a1a',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 900 }}>5일</span>
              <span style={{ fontSize: '16px', fontWeight: 900 }}>핵심 기능 구현</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 32px',
                backgroundColor: '#40c060',
                border: '4px solid #1a1a1a',
                boxShadow: '4px 4px 0px #1a1a1a',
                color: '#1a1a1a',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 900 }}>10일</span>
              <span style={{ fontSize: '16px', fontWeight: 900 }}>
                실사용 서비스
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 32px',
                backgroundColor: '#f5f0e8',
                border: '4px solid #1a1a1a',
                boxShadow: '4px 4px 0px #1a1a1a',
                color: '#1a1a1a',
              }}
            >
              <span style={{ fontSize: '20px', fontWeight: 900 }}>
                91do.co.kr
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Noto Sans KR',
          data: fontBold,
          weight: 900,
          style: 'normal' as const,
        },
      ],
    }
  );
}
