import type { Metadata } from "next";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import heroImage from "@/public/images/scenery-6.jpg";

export const metadata: Metadata = {
  title: "주변 가볼만한 곳",
  description: "혼치바 컨트리클럽 인근 쇼핑, 온천, 식당 안내.",
};

const places = [
  {
    tag: "쇼핑 · 식당가",
    name: "이온타운 오유미노",
    distance: "차량 약 10분",
    text: [
      "라운드 전후에 동선 낭비 없이 들러 생필품이나 간식을 사기 좋은 거리입니다.",
      "관광객으로 북적이는 도심형 대형 아울렛과 달리 현지의 소소한 일상을 느끼며 쾌적하게 쇼핑할 수 있습니다.",
      "패밀리레스토랑, 회전초밥, 면 요리 전문점 등 누구나 편하게 한 끼를 해결할 수 있는 대중적인 브랜드와 카페가 입점해 있습니다.",
    ],
    info: null,
  },
  {
    tag: "온천",
    name: "천연온천 유부네 이치하라 지하라다이점",
    distance: "차량 약 5~10분",
    text: [
      "2024년 3월에 개장한 천연온천입니다. 흑탕(검은 온천수) 노천탕과 두 종류의 사우나로 라운드의 피로를 풀어보세요.",
    ],
    info: "평일 성인 980엔 · 주말·공휴일 1,180엔 · 9:00~24:00 (요금 변동 가능)",
  },
  {
    tag: "식당",
    name: "야키니쿠 준",
    distance: "코티지에서 약 470m · 도보 6~7분",
    text: [
      "등급 높은 고기를 합리적인 가격에 낸다는 점을 내세우는 야키니쿠 레스토랑입니다. 대표 메뉴는 상급 우설 소금구이.",
      "김치·나물부터 냉면, 갈비국밥 같은 마무리 메뉴까지 갖추고 있습니다.",
    ],
    info: null,
  },
];

export default function NearbyPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Nearby"
        title="주변 가볼만한 곳"
        lead="골프 뒤에 이어지는 즐거움"
        position="center 70%"
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {places.map((p) => (
            <article key={p.name} className="flex flex-col border border-forest/15 bg-white p-7">
              <p className="eyebrow">{p.tag}</p>
              <h2 className="mt-3 font-serif text-xl leading-snug font-semibold text-forest">
                {p.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-brass">{p.distance}</p>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                {p.text.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              {p.info && (
                <p className="mt-auto border-t border-forest/15 pt-4 text-xs leading-relaxed text-ink/70">
                  {p.info}
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          주변 시설은 별도 이용이며, 운영 시간과 요금은 방문 전 확인해 주세요.
        </p>
      </section>

      <ContactBand />
    </>
  );
}
