import type { Metadata } from "next";
import Link from "next/link";
import FamilyClubDetail from "@/components/FamilyClubDetail";
import PageHero from "@/components/PageHero";
import { familyClubs, familyDiscount } from "@/lib/familyClubs";

export const metadata: Metadata = {
  title: "패밀리CC",
  description:
    "혼치바 글로벌10 회원의 패밀리 골프장, 라스베이거스 컨트리클럽과 팜밸리 컨트리클럽 안내. 그린피 50% 할인(회원 비동반 게스트 요금 기준).",
};

export default function FamilyCcPage() {
  return (
    <>
      <PageHero
        eyebrow="Family Country Clubs"
        title="패밀리CC"
        lead="라스베이거스와 팜데저트, 미국의 두 패밀리 골프장에서도 글로벌10 회원 혜택을 누리세요."
      />

      <nav
        aria-label="패밀리CC 바로가기"
        className="sticky top-16 z-30 border-b border-forest/10 bg-ivory/95 backdrop-blur"
      >
        <ul className="container-x flex gap-6 overflow-x-auto py-3 text-sm whitespace-nowrap">
          {familyClubs.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="text-ink/70 hover:text-forest">
                {c.ko}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-x pt-12 sm:pt-16">
        <div className="flex flex-col gap-4 bg-forest px-6 py-6 text-ivory sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-serif text-xl font-semibold text-white sm:text-2xl">
              {familyDiscount.title}
            </p>
            <p className="mt-2 text-sm text-ivory/85">{familyDiscount.clubs}</p>
            <p className="mt-1 text-xs text-[#e3c891]">* {familyDiscount.basis}</p>
          </div>
          <Link href="/membership" className="btn btn-brass shrink-0">
            글로벌10 회원권 보기
          </Link>
        </div>
      </section>

      {familyClubs.map((c, idx) => (
        <section
          key={c.id}
          id={c.id}
          className={`scroll-mt-32 ${idx % 2 === 1 ? "bg-sand" : ""}`}
        >
          <div className="container-x py-16 sm:py-20">
            <p className="eyebrow">{c.en}</p>
            <h2 className="h-display mt-3">{c.ko}</h2>
            <p className="mt-2 text-sm text-muted">{c.location}</p>
            <div className="mt-8">
              <FamilyClubDetail club={c} />
            </div>
          </div>
        </section>
      ))}

      <section className="container-x py-10">
        <p className="text-sm text-muted">
          클럽 정보는 각 클럽 공식 소개 자료 기준이며, 시설 운영과 이용 조건은 현지 사정에
          따라 달라질 수 있습니다.
        </p>
      </section>
    </>
  );
}
