import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FamilyClubDetail from "@/components/FamilyClubDetail";
import { familyClubs, familyDiscount } from "@/lib/familyClubs";
import lvccHero from "@/public/images/family-lvcc-hero.jpg";
import pvccHero from "@/public/images/family-pvcc-hero.jpg";

export const metadata: Metadata = {
  title: "패밀리CC",
  description:
    "혼치바 글로벌10 회원의 패밀리 골프장, 라스베이거스 컨트리클럽과 팜밸리 컨트리클럽 안내. 그린피 50% 할인(회원 비동반 게스트 요금 기준).",
};

export default function FamilyCcPage() {
  return (
    <>
      <section className="relative flex min-h-[320px] items-end overflow-hidden bg-forest-deep sm:min-h-[420px]">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="relative">
            <Image
              src={lvccHero}
              alt="석양 무렵 라스베이거스 컨트리클럽 클럽하우스와 코스, 뒤편의 호텔 건물"
              fill
              priority
              placeholder="blur"
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={pvccHero}
              alt="야자수 길 옆 팜밸리 컨트리클럽 입구 석조 사인"
              fill
              priority
              placeholder="blur"
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: "left 85%" }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-transparent" />
        <div className="container-x relative py-10 sm:py-14">
          <p className="eyebrow text-[#e3c891]">Family Country Clubs</p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-5xl">패밀리CC</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            라스베이거스와 팜데저트, 미국의 두 패밀리 골프장에서도 글로벌10 회원 혜택을 누리세요.
          </p>
        </div>
      </section>

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
