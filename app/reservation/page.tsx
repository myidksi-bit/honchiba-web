import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site";
import heroImage from "@/public/images/green-1.jpg";

export const metadata: Metadata = {
  title: "예약",
  description: "혼치바 컨트리클럽 예약은 X골프앱에서 진행됩니다.",
};

export default function ReservationPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Reservation"
        title="예약"
        lead="혼치바 컨트리클럽 예약은 X골프앱에서 진행됩니다."
        position="center 80%"
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-forest/15 bg-white p-8">
            <p className="eyebrow">App</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-forest">
              X골프앱에서 예약
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              라운드와 숙박 예약은 X골프앱에서 신청해 주세요. 회원은 우선 예약이
              가능하며, 비회원은 1개월 후부터 예약할 수 있습니다.
            </p>
          </div>
          <div className="border border-forest/15 bg-white p-8">
            <p className="eyebrow">Call</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-forest">
              예약 문의
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              예약 방법이나 이용에 관한 문의는 고객센터로 연락해 주세요.
            </p>
            <a
              href={contact.telHref}
              className="mt-5 inline-block font-serif text-3xl font-semibold text-forest"
            >
              {contact.tel}
            </a>
          </div>
        </div>

        <div className="mt-10 bg-sand p-8">
          <h2 className="font-serif text-xl font-semibold text-forest">예약 전 확인하세요</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            <li>· 회원 예약은 횟수 제한이 없으며 정회원 동반이 필수입니다.</li>
            <li>· 성수기(3~5월, 9~11월)에도 회원은 최대 3박 연박이 가능합니다.</li>
            <li>· 2인 라운드는 회원만 가능합니다.</li>
            <li>· 왕복 픽업 서비스(나리타 ↔ 혼치바)는 회원 대상이며 최소 4인 이상일 때 제공됩니다.</li>
          </ul>
          <Link href="/membership" className="btn btn-primary mt-6">
            회원 혜택 보기
          </Link>
        </div>
      </section>
    </>
  );
}
