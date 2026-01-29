'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '서비스', href: '/#pricing' },
    { label: '개발 분야', href: '/#fields' },
    { label: '포트폴리오', href: '/#portfolio' },
    { label: '문의', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              91
            </div>
            <span className="hidden text-lg font-bold text-foreground sm:inline">91도</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            className="hidden bg-primary px-4 py-2 text-sm font-medium text-primary-foreground rounded-lg transition-colors hover:opacity-90 md:inline-block"
          >
            시작하기
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="메뉴"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border bg-background py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/70 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="bg-primary px-4 py-2 text-sm font-medium text-primary-foreground rounded-lg text-center transition-colors hover:opacity-90"
                onClick={() => setIsOpen(false)}
              >
                시작하기
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
