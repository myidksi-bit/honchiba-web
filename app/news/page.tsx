import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import heroImage from "@/public/images/entrance.jpg";

export const metadata: Metadata = {
  title: "소식지",
  description: "회원 의견을 반영한 개선 내용과 혼치바 컨트리클럽의 현장 소식.",
};

const categories = [
  {
    name: "개선사항",
    sub: "회원님의 목소리",
    text: "회원 의견을 반영하여 개선한 내용을 매주 게시합니다.",
  },
  {
    name: "부대시설",
    sub: null,
    text: "잔디 파종, 카트 팔걸이, 거울 추가 등 개선 내용을 사진과 함께 전합니다.",
  },
  { name: "현장소식", sub: null, text: "김장나눔행사 등 클럽의 행사와 현장 이야기." },
  { name: "직원소개", sub: null, text: "신입사원을 비롯한 혼치바의 직원들을 소개합니다." },
  { name: "지역소개", sub: null, text: "주변 온천과 식당 등 지역 정보를 소개합니다." },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="News"
        title="소식지"
        lead="회원님의 목소리로 달라지는 혼치바의 이야기를 전합니다."
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => (
            <div key={c.name} className="border border-forest/15 bg-white p-6">
              <h2 className="font-serif text-lg font-semibold text-forest">{c.name}</h2>
              {c.sub && <p className="mt-1 text-xs text-brass">{c.sub}</p>}
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-sand px-6 py-14 text-center">
          <p className="font-serif text-xl text-forest">첫 소식을 준비하고 있습니다.</p>
          <p className="mt-2 text-sm text-muted">
            게시가 시작되면 이곳에서 최신 소식을 확인하실 수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}
