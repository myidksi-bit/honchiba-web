import Link from "next/link";
import { contact } from "@/lib/site";

export default function ContactBand() {
  return (
    <section className="bg-forest text-ivory">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <p className="eyebrow text-[#e3c891]">Contact</p>
          <p className="mt-2 font-serif text-2xl">
            회원권 상담과 이용 문의는 서울 사무소로 연락해 주세요.
          </p>
          <p className="mt-2 text-sm text-ivory/70">{contact.seoulOffice}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={contact.telHref} className="btn btn-brass">
            전화 상담 {contact.tel}
          </a>
          <Link href="/membership" className="btn btn-ghost">
            회원권 안내
          </Link>
        </div>
      </div>
    </section>
  );
}
