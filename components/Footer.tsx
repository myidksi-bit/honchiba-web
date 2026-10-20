import Link from "next/link";
import { contact, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl tracking-[0.06em] text-ivory">
            혼치바 글로벌10
          </p>
          <p className="mt-1 text-[10px] tracking-[0.3em] text-brass">
            HONCHIBA GLOBAL 10
          </p>
          <p className="mt-5 text-sm leading-relaxed">
            1970년 개장, 27홀.
            <br />
            {contact.clubAddress}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-ivory">서울 사무소</p>
          <p className="mt-3 text-sm leading-relaxed">
            {contact.seoulOffice}
            <br />
            고객센터{" "}
            <a
              href={contact.telHref}
              className="text-ivory underline-offset-4 hover:underline"
            >
              {contact.tel}
            </a>
            <br />
            판매회사 {contact.seller}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-ivory">바로가기</p>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-ivory/50">
          © 2026 Honchiba Country Club. 본 내용은 혼치바컨트리클럽 운영 규정안에
          따라 변경될 수 있습니다.
        </p>
      </div>
    </footer>
  );
}
