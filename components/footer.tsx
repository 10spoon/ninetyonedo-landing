'use client';

import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <h3 className="font-bold text-foreground text-lg">주식회사 91도</h3>
            <p className="mt-2 text-sm text-foreground/60">
              세상과 착 조립되는 각도, 91도가 함께합니다.
            </p>
            <div className="mt-6 space-y-2 text-sm text-foreground/60">
              <p className="flex items-center gap-2">
                <MapPin size={14} /> 경기도 김포시 김포한강1로 250, 2층 213-79호
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} /> contact@91do.co.kr
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> 0507-1327-8090
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-sm text-foreground/60 md:text-right">
            <p>© {currentYear} 주식회사 91도 (91Do Co., Ltd.). All rights reserved.</p>
            <p>사업자등록번호: 207-86-02530</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
