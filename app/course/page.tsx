import type { Metadata } from "next";
import Image from "next/image";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import central from "@/public/images/course-central.jpg";
import east from "@/public/images/course-east.jpg";
import courseMap from "@/public/images/course-map.jpg";
import west from "@/public/images/course-west.jpg";
import heroImage from "@/public/images/scenery-4.jpg";

export const metadata: Metadata = {
  title: "코스소개",
  description: "EAST·CENTRAL·WEST 27홀. 혼치바 컨트리클럽 코스 특징과 거리 안내.",
};

// 거리 셀: [BG 그린, CY 그린] (야드). 마지막 열은 TOTAL.
type Tee = { name: string; yards: [number, number][] };

const courses: {
  id: string;
  en: string;
  ko: string;
  image: typeof east;
  text: string;
  par: number[];
  tees: Tee[];
}[] = [
  {
    id: "east",
    en: "EAST",
    ko: "동코스",
    image: east,
    text: "OB와 연못, 벙커가 좌우에 배치되어 전략적인 경로 선택과 판단이 필요한 코스입니다.",
    par: [5, 4, 4, 3, 4, 5, 4, 3, 4, 36],
    tees: [
      { name: "BACK TEE", yards: [[523, 518], [388, 373], [400, 420], [170, 155], [397, 375], [512, 501], [394, 375], [172, 185], [413, 358], [3369, 3260]] },
      { name: "REGULAR TEE", yards: [[508, 503], [370, 355], [362, 382], [153, 138], [380, 358], [512, 501], [368, 349], [150, 163], [371, 316], [3174, 3065]] },
      { name: "GOLD TEE", yards: [[497, 492], [353, 338], [343, 363], [125, 110], [342, 320], [416, 405], [302, 283], [127, 140], [356, 301], [2921, 2812]] },
      { name: "LADIES TEE", yards: [[404, 399], [295, 280], [301, 321], [125, 110], [342, 320], [416, 405], [254, 235], [127, 140], [278, 223], [2542, 2433]] },
    ],
  },
  {
    id: "central",
    en: "CENTRAL",
    ko: "중코스",
    image: central,
    text: "거리는 비교적 짧지만, 그린 주변에 많은 OB가 있고 정확한 접근이 점수에 직접적 영향을 주는 코스입니다.",
    par: [4, 3, 4, 4, 3, 5, 5, 4, 4, 36],
    tees: [
      { name: "BACK TEE", yards: [[308, 300], [150, 147], [391, 368], [305, 308], [168, 163], [521, 515], [489, 471], [331, 313], [322, 316], [2985, 2901]] },
      { name: "REGULAR TEE", yards: [[296, 288], [139, 136], [376, 353], [287, 290], [152, 147], [490, 484], [468, 452], [298, 280], [304, 298], [2810, 2728]] },
      { name: "GOLD TEE", yards: [[289, 281], [125, 122], [282, 259], [270, 273], [125, 120], [456, 450], [445, 427], [223, 215], [282, 276], [2410, 2351]] },
      { name: "LADIES TEE", yards: [[288, 280], [113, 110], [282, 259], [255, 258], [92, 87], [456, 450], [385, 364], [223, 215], [282, 276], [2349, 2290]] },
    ],
  },
  {
    id: "west",
    en: "WEST",
    ko: "서코스",
    image: west,
    text: "코스 전체가 길고, 거리와 파워를 최대한 활용하는 대담하고 정확한 샷이 필요한 코스입니다.",
    par: [5, 5, 4, 4, 3, 4, 4, 3, 4, 36],
    tees: [
      { name: "BACK TEE", yards: [[481, 460], [502, 499], [282, 255], [348, 330], [190, 181], [404, 376], [425, 419], [182, 180], [349, 327], [3163, 3027]] },
      { name: "REGULAR TEE", yards: [[461, 440], [476, 473], [282, 255], [330, 312], [157, 151], [345, 317], [409, 403], [164, 162], [327, 305], [2951, 2818]] },
      { name: "GOLD TEE", yards: [[424, 403], [432, 429], [282, 255], [282, 264], [129, 123], [307, 279], [398, 392], [146, 144], [238, 216], [2638, 2505]] },
      { name: "LADIES TEE", yards: [[424, 403], [358, 355], [282, 255], [282, 264], [129, 123], [307, 279], [371, 365], [132, 130], [238, 216], [2523, 2390]] },
    ],
  },
];

const holes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "TOTAL"];

export default function CoursePage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Course"
        title="코스소개"
        lead="전통과 전략적 아름다움을 결합한 27홀 코스"
      />

      <section className="container-x py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="h-display">56년이 넘는 전통, 세 가지 코스</h2>
          <p className="mt-5 leading-relaxed text-muted">
            사계절의 자연미와 경치로 둘러싸인 혼치바 컨트리클럽은 1970년 홋치
            아키라(Akira Hocchi)의 설계로 개장했습니다. 전략적으로
            배치된 연못과 벙커가 조화를 이루어 플레이어의 지성과 감성을
            자극합니다. 코스는 EAST, CENTRAL, WEST로 구분됩니다.
          </p>
        </div>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="코스 바로가기">
          {courses.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="border border-forest/25 px-4 py-2 text-sm text-forest hover:bg-forest hover:text-ivory"
            >
              {c.en} {c.ko}
            </a>
          ))}
          <a
            href="#map"
            className="border border-forest/25 px-4 py-2 text-sm text-forest hover:bg-forest hover:text-ivory"
          >
            전체 코스 MAP
          </a>
        </nav>
      </section>

      {courses.map((c, idx) => (
        <section
          key={c.id}
          id={c.id}
          className={`scroll-mt-20 ${idx % 2 === 0 ? "bg-sand" : ""}`}
        >
          <div className="container-x py-16 sm:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.ko} 전경`}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">{c.en}</p>
                <h2 className="h-display mt-3">{c.ko}</h2>
                <p className="mt-5 leading-relaxed text-muted">{c.text}</p>
                <p className="mt-6 font-serif text-lg text-forest">9홀 · PAR 36</p>
              </div>
            </div>

            <div className="mt-10 overflow-x-auto bg-white">
              <table className="tbl min-w-[720px] text-center">
                <thead>
                  <tr>
                    <th>HOLE</th>
                    {holes.map((h) => (
                      <th key={h} className="!text-center">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>PAR</th>
                    {c.par.map((p, i) => (
                      <td key={i} className="!text-center font-medium">
                        {p}
                      </td>
                    ))}
                  </tr>
                  {c.tees.map((t) => (
                    <tr key={t.name}>
                      <th className="whitespace-nowrap">{t.name}</th>
                      {t.yards.map(([bg, cy], i) => (
                        <td key={i} className="!text-center tabular-nums">
                          {bg}
                          <span className="block text-xs text-muted">{cy}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="container-x pb-4">
        <p className="text-xs text-muted">
          단위: 야드 / 각 거리 셀의 위는 BG, 아래는 CY 그린 기준입니다. 두 그린 모두
          벤트그린입니다.
        </p>
      </section>

      <section id="map" className="container-x scroll-mt-20 py-16 sm:py-20">
        <p className="eyebrow">Course Map</p>
        <h2 className="h-display mt-3">전체 코스 MAP</h2>
        <div className="mt-8 border border-forest/15 bg-white p-3 sm:p-6">
          <Image
            src={courseMap}
            alt="동코스·중코스·서코스 27홀 전체 배치도"
            placeholder="blur"
            sizes="(min-width: 1152px) 1100px, 100vw"
            className="h-auto w-full"
          />
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          <li>EAST = 동코스</li>
          <li>CENTRAL = 중코스</li>
          <li>WEST = 서코스</li>
        </ul>
      </section>

      <ContactBand />
    </>
  );
}
