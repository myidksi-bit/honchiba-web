import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import cart from "@/public/images/cart.jpg";
import cart1 from "@/public/images/cart-1.jpg";
import compeRoom from "@/public/images/compe-room.jpg";
import drivingRange from "@/public/images/driving-range.jpg";
import entrance from "@/public/images/entrance.jpg";
import food from "@/public/images/food.jpg";
import lobby from "@/public/images/lobby.jpg";
import locker from "@/public/images/locker.jpg";
import proshop from "@/public/images/proshop.jpg";
import restaurant from "@/public/images/restaurant.jpg";
import restaurant1 from "@/public/images/restaurant-1.jpg";
import heroImage from "@/public/images/scenery-7.jpg";

export const metadata: Metadata = {
  title: "시설소개",
  description: "클럽하우스, 레스토랑, 라이딩 카트, 드라이빙 레인지 등 혼치바 컨트리클럽 시설 안내.",
};

type Photo = { src: StaticImageData; alt: string; caption: string };

function Gallery({ photos, cols = 2 }: { photos: Photo[]; cols?: 2 | 3 | 4 }) {
  const grid =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2";
  return (
    <div className={`mt-8 grid gap-5 ${grid}`}>
      {photos.map((p) => (
        <figure key={p.caption}>
          <div className="relative aspect-[4/3] overflow-hidden bg-sand">
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
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Facilities"
        title="시설소개"
        lead="라운드 전후의 시간을 편안하게"
      />

      <section className="container-x py-16 sm:py-20">
        <p className="eyebrow">Clubhouse</p>
        <h2 className="h-display mt-3">클럽하우스</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          프런트 로비와 라커룸, 프로샵을 갖춘 클럽하우스에서 라운드를 준비하세요.
        </p>
        <Gallery
          cols={4}
          photos={[
            { src: entrance, alt: "클럽하우스 진입로와 현관", caption: "입구" },
            { src: lobby, alt: "프런트가 있는 클럽하우스 로비", caption: "로비" },
            { src: locker, alt: "목재로 마감한 라커룸 입구", caption: "라커룸" },
            { src: proshop, alt: "의류와 용품이 진열된 프로샵", caption: "프로샵" },
          ]}
        />
      </section>

      <section className="bg-sand">
        <div className="container-x py-16 sm:py-20">
          <p className="eyebrow">Restaurant</p>
          <h2 className="h-display mt-3">레스토랑</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">
            자연을 바라보며 식사하는 레스토랑, 모임을 위한 별실을 갖추고 있습니다.
            라운드를 마친 뒤 여유롭게 머물러 보세요.
          </p>
          <Gallery
            cols={3}
            photos={[
              { src: restaurant, alt: "목조 트러스 천장의 레스토랑 홀", caption: "레스토랑" },
              { src: restaurant1, alt: "통창으로 코스가 보이는 레스토랑", caption: "코스가 보이는 창가 좌석" },
              { src: compeRoom, alt: "단체 모임용 별실", caption: "별실 (컴페룸)" },
            ]}
          />
          <div className="mt-8 grid items-center gap-6 bg-white p-6 sm:grid-cols-[220px_1fr] sm:p-8">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={food}
                alt="참치회와 덮밥으로 구성된 일식 상차림"
                fill
                placeholder="blur"
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-forest">식사</h3>
              <p className="mt-3 leading-relaxed text-muted">
                식사비는 그린피에 포함되지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Cart</p>
            <h2 className="h-display mt-3">라이딩 카트</h2>
            <p className="mt-5 leading-relaxed text-muted">
              코스 이동을 편안하게 돕는 카트. 그린피에 카트피가 포함되어 있습니다.
            </p>
            <Gallery
              cols={2}
              photos={[
                { src: cart, alt: "골프백을 실은 카트", caption: "4인승 카트" },
                { src: cart1, alt: "코티지 앞을 지나는 카트", caption: "코티지와 코스를 잇는 이동" },
              ]}
            />
          </div>
          <div>
            <p className="eyebrow">Practice</p>
            <h2 className="h-display mt-3">드라이빙 레인지</h2>
            <p className="mt-5 leading-relaxed text-muted">
              라운드 전 스윙을 점검해 보세요.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={drivingRange}
                  alt="그물망이 쳐진 드라이빙 레인지"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-forest/15 pb-3">
                  <dt className="text-muted">타석</dt>
                  <dd className="font-medium">9타석, 30야드</dd>
                </div>
                <div className="flex justify-between border-b border-forest/15 pb-3">
                  <dt className="text-muted">이용 요금</dt>
                  <dd className="font-medium">30구 220엔</dd>
                </div>
                <div className="flex justify-between border-b border-forest/15 pb-3">
                  <dt className="text-muted">기타</dt>
                  <dd className="font-medium">벙커·어프로치 연습장</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
