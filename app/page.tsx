import Image from "next/image";
import Link from "next/link";
import ContactBand from "@/components/ContactBand";
import { contact } from "@/lib/site";
import accessMap from "@/public/images/access-map.jpg";
import central from "@/public/images/course-central.jpg";
import east from "@/public/images/course-east.jpg";
import west from "@/public/images/course-west.jpg";
import cottage from "@/public/images/cottage-10.jpg";
import hero from "@/public/images/hero.jpg";
import restaurant from "@/public/images/restaurant.jpg";

const stats = [
  { value: "1970", label: "개장" },
  { value: "27 HOLES", label: "3개 코스" },
  { value: "7 COTTAGES", label: "골프장 인접 숙박" },
  { value: "50분", label: "나리타·하네다 공항에서" },
];

const courses = [
  { image: east, en: "EAST", ko: "동코스", text: "전략적인 경로 선택" },
  { image: central, en: "CENTRAL", ko: "중코스", text: "정교한 그린 공략" },
  { image: west, en: "WEST", ko: "서코스", text: "거리와 파워의 조화" },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-forest-deep">
        <Image
          src={hero}
          alt="연못 너머로 보이는 혼치바 컨트리클럽 클럽하우스와 코스"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
        <div className="container-x relative pt-32 pb-14 sm:pb-20">
          <p className="eyebrow text-[#e3c891]">Chiba, Japan · Since 1970</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-white sm:text-6xl">
            오롯이 골프에
            <br />
            머무는 시간
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            27홀 라운드와 코티지에서의 휴식. 혼치바 컨트리클럽.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/membership" className="btn btn-brass">
              회원권 안내
            </Link>
            <Link href="/course" className="btn btn-ghost">
              코스 둘러보기
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-forest/10 bg-ivory">
        <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 text-center ${i % 2 ? "border-l border-forest/10" : ""} ${
                i >= 2 ? "border-t border-forest/10 lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="font-serif text-2xl font-semibold text-forest sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-x py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Course</p>
          <h2 className="h-display mt-3">27홀, 각기 다른 세 가지 라운드</h2>
          <p className="mt-5 leading-relaxed text-muted">
            1970년에 개장한 혼치바 컨트리클럽은 자연 지형을 따라 연못과 벙커를
            배치한 골프장입니다. 홋치 아키라의 설계로 조성된 EAST·CENTRAL·WEST
            코스에서 다양한 공략을 즐겨보세요.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <Link key={c.en} href="/course" className="group block">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.ko} 전경`}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs tracking-[0.25em] text-brass">{c.en}</p>
              <p className="mt-1 font-serif text-xl font-semibold text-forest">
                {c.ko}
              </p>
              <p className="mt-1 text-sm text-muted">{c.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[4/3]">
            <Image
              src={cottage}
              alt="해 질 무렵 불이 켜진 코티지 단지"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Cottage</p>
            <h2 className="h-display mt-3">라운드가 끝나면, 나만의 코티지로</h2>
            <p className="mt-5 leading-relaxed text-muted">
              골프장과 가까운 전용 27평 규모의 삼나무 통나무집 7동. 주방을 갖춘
              독립형 숙소에서 동반자와 편안하게 쉬어가세요. 저녁에는 테라스에서
              BBQ를 즐길 수 있습니다.
            </p>
            <Link href="/cottage" className="btn btn-primary mt-8">
              코티지 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Membership</p>
            <h2 className="h-display mt-3">10년을 함께하는 회원권</h2>
            <p className="mt-5 leading-relaxed text-muted">
              골프와 숙박 20% 상당 할인, 2인 라운드까지. 예약
              횟수 제한 없이 성수기에도 최대 3박 연박이 가능합니다.
            </p>
            <Link href="/membership" className="btn btn-primary mt-8">
              회원권 자세히 보기
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { name: "골드", price: "1,200만원", who: "정회원 1명 · 무기명 3명" },
              { name: "블랙", price: "800만원", who: "정회원 1명" },
            ].map((m) => (
              <div key={m.name} className="border border-forest/15 bg-white p-7">
                <p className="text-xs tracking-[0.25em] text-brass">10년 소멸형</p>
                <p className="mt-2 font-serif text-2xl font-semibold text-forest">
                  {m.name}
                </p>
                <p className="mt-4 font-serif text-3xl text-ink">{m.price}</p>
                <p className="mt-3 text-sm text-muted">{m.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-deep text-ivory">
        <div className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-[#e3c891]">Access</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              공항에서 골프장까지 약 50분
            </h2>
            <ul className="mt-6 space-y-3 text-ivory/80">
              <li>나리타·하네다 공항에서 차량 약 50분</li>
              <li>도쿄 도심에서 약 50~60분</li>
              <li>{contact.clubAddress}</li>
            </ul>
            <p className="mt-4 text-xs text-ivory/50">
              이동 시간은 출발 지점과 교통 상황에 따라 달라집니다.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={accessMap}
              alt="치바현 내 혼치바 컨트리클럽과 코티지 위치 약도"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-x grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <div className="relative order-last aspect-[3/2] overflow-hidden lg:order-first">
          <Image
            src={restaurant}
            alt="목조 천장의 클럽하우스 레스토랑"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Clubhouse</p>
          <h2 className="h-display mt-3">라운드 전후의 시간을 편안하게</h2>
          <p className="mt-5 leading-relaxed text-muted">
            자연을 바라보며 식사하는 레스토랑, 모임을 위한 별실과 라커룸을 갖추고
            있습니다. 라운드를 마친 뒤 여유롭게 머물러 보세요.
          </p>
          <Link href="/facilities" className="btn btn-primary mt-8">
            시설 보기
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
