import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import bbq from "@/public/images/bbq.jpg";
import bbq2 from "@/public/images/bbq-2.jpg";
import bbq3 from "@/public/images/bbq-3.jpg";
import bbq4 from "@/public/images/bbq-4.jpg";
import cottage from "@/public/images/cottage.jpg";
import heroImage from "@/public/images/cottage-10.jpg";
import cottage2 from "@/public/images/cottage-2.jpg";
import cottage3 from "@/public/images/cottage-3.jpg";
import cottage4 from "@/public/images/cottage-4.jpg";
import cottage5 from "@/public/images/cottage-5.jpg";
import cottage6 from "@/public/images/cottage-6.jpg";
import cottage7 from "@/public/images/cottage-7.jpg";
import cottage8 from "@/public/images/cottage-8.jpg";
import cottage9 from "@/public/images/cottage-9.jpg";
import green1 from "@/public/images/green-1.jpg";

export const metadata: Metadata = {
  title: "코티지",
  description: "골프장 옆 삼나무 통나무집 7동. 주방과 테라스 BBQ를 갖춘 혼치바 코티지 안내.",
};

const facts = [
  { label: "규모", value: "7동 · 동당 전용 27평" },
  { label: "구조", value: "삼나무 통나무집, 주방·거실" },
  { label: "정원", value: "4인 기준, 최대 6인" },
  { label: "체크인", value: "15:00" },
  { label: "체크아웃", value: "11:00" },
];

const rooms = [
  { src: cottage3, alt: "가죽 소파와 난로가 있는 거실", caption: "거실" },
  { src: cottage2, alt: "높은 천장의 거실과 식탁", caption: "거실과 식탁" },
  { src: cottage5, alt: "원형 식탁과 주방", caption: "주방" },
  { src: cottage6, alt: "인덕션과 조리도구가 갖춰진 주방 수납", caption: "조리도구" },
  { src: cottage8, alt: "침대 두 개가 놓인 침실", caption: "침실" },
  { src: cottage7, alt: "수건과 비품이 놓인 선반", caption: "어메니티" },
];

export default function CottagePage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Cottage"
        title="코티지"
        lead="라운드가 끝나면, 나만의 코티지로"
      />

      <section className="container-x py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="h-display">삼나무 통나무집에서 보내는 하루</h2>
            <p className="mt-5 leading-relaxed text-muted">
              피톤치드 나무 향이 진한 삼나무 통나무집 7동이 골프장 바로 곁에
              있습니다. 식사가 가능한 콘도미니엄 형태로, 주방을 갖춘 독립형
              숙소에서 동반자와 편안하게 쉬어가세요. 저녁에는 테라스에서 BBQ를
              즐길 수 있습니다.
            </p>
            <dl className="mt-8 border-t border-forest/15">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex justify-between gap-6 border-b border-forest/15 py-3 text-sm"
                >
                  <dt className="text-muted">{f.label}</dt>
                  <dd className="text-right font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden">
            <Image
              src={cottage}
              alt="저녁 조명이 켜진 코티지 현관"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x py-16 sm:py-20">
          <p className="eyebrow">Inside</p>
          <h2 className="h-display mt-3">거실과 주방, 아늑한 침실</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((p) => (
              <figure key={p.caption}>
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <p className="eyebrow">Location</p>
        <h2 className="h-display mt-3">코스가 내려다보이는 자리</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { src: green1, alt: "그린 뒤 언덕 위에 늘어선 코티지", caption: "그린 위 언덕의 코티지" },
            { src: cottage9, alt: "코티지 아래 카트 도로", caption: "카트로 코스까지 이동" },
            { src: cottage4, alt: "꽃나무 너머로 보이는 코티지 외관", caption: "외관" },
          ].map((p) => (
            <figure key={p.caption}>
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-muted">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-forest-deep text-ivory">
        <div className="container-x py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[2/1] overflow-hidden">
              <Image
                src={bbq4}
                alt="코티지 테라스에서 바비큐를 즐기는 일행"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-[#e3c891]">BBQ</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                코티지 테라스에서 즐기는 BBQ
              </h2>
              <p className="mt-5 leading-relaxed text-ivory/80">
                동반자와 함께하는 저녁 바비큐. 2인 세트 10,000엔(별도)이며
                돼지고기·쌈채소·숯불이 포함됩니다.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { src: bbq, alt: "야외 테이블에서 고기를 굽는 모습" },
              { src: bbq2, alt: "바비큐용 고기와 채소 세트" },
              { src: bbq3, alt: "그릴 위에서 익어가는 고기와 채소" },
            ].map((p) => (
              <div key={p.alt} className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
