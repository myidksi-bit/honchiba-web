"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-ivory/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="leading-none">
          <span className="block font-serif text-lg font-semibold tracking-[0.18em] text-forest">
            HONCHIBA
          </span>
          <span className="mt-1 block text-[10px] tracking-[0.3em] text-brass">
            COUNTRY CLUB
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-brass ${
                  active ? "font-bold text-forest" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={contact.telHref} className="btn btn-primary px-4 py-2">
            {contact.tel}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-forest transition-transform ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-[7px] left-0 h-0.5 w-6 bg-forest transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-forest transition-transform ${
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-ivory lg:hidden">
          <ul className="container-x py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-forest/10 py-4 text-base text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <a href={contact.telHref} className="btn btn-primary w-full">
                전화 상담 {contact.tel}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
