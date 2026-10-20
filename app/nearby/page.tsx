import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import aeon from "@/public/images/nearby-aeon.jpg";
import bigTexas from "@/public/images/nearby-bigtexas.jpg";
import eisei from "@/public/images/nearby-eisei.jpg";
import germanVillage from "@/public/images/nearby-germanvillage.jpg";
import jun from "@/public/images/nearby-jun.jpg";
import makuhari from "@/public/images/nearby-makuhari.jpg";
import museum from "@/public/images/nearby-museum.jpg";
import museumHall from "@/public/images/nearby-museum-hall.jpg";
import sakai from "@/public/images/nearby-sakai.jpg";
import showanomori from "@/public/images/nearby-showanomori.jpg";
import unimo from "@/public/images/nearby-unimo.jpg";
import yamatoSushi from "@/public/images/nearby-yamatosushi.jpg";
import yubune from "@/public/images/nearby-yubune.jpg";
import yuranosato from "@/public/images/nearby-yuranosato.jpg";
import zooElephant from "@/public/images/nearby-zoo-elephant.jpg";
import zooGiraffe from "@/public/images/nearby-zoo-giraffe.jpg";

export const metadata: Metadata = {
  title: "주변 가볼만한 곳",
  description:
    "혼치바 컨트리클럽 주변의 온천, 쇼핑몰, 자연·문화 관광지, 식당 안내. 라운드 뒤에 들르기 좋은 14곳.",
};

type Photo = { src: StaticImageData; alt: string };

type Place = {
  name: string;
  photos: Photo[];
  access: string;
  text: string[];
  points?: string[];
};

type Group = {
  id: string;
  en: string;
  ko: string;
  lead?: string;
  places: Place[];
};

const groups: Group[] = [
  {
    id: "hot-springs",
    en: "Hot Springs",
    ko: "온천",
    lead: "라운드 후 가까운 온천에서 휴식",
    places: [
      {
        name: "유라노사토 온천",
        photos: [{ src: yuranosato, alt: "바위로 둘러싸인 유라노사토 온천의 노천탕" }],
        access: "차량 15~20분 · 약 10~15km",
        text: [
          "지하 1,500m의 천연 온천수를 사용하는 노천탕과 사우나를 갖춘 시설입니다. 30분 간격의 로우류 사우나, 냉탕, 암반욕, 바디케어와 식당 ‘사쿠라’가 있습니다.",
        ],
        points: ["온천·사우나 약 1시간 30분~2시간", "식사·암반욕 포함 약 2~3시간"],
      },
      {
        name: "유부네 이치하라 온천",
        photos: [{ src: yubune, alt: "김이 피어오르는 유부네 이치하라 온천의 노천탕" }],
        access: "차량 10~15분 · 약 8~10km",
        text: [
          "모리마치 치하라다이 몰 안에 있는 온천·사우나 복합 시설입니다. 천연온천과 사우나, 휴식 시설을 함께 이용할 수 있어 라운드 후 일정에 연계하기 좋습니다.",
        ],
        points: ["천연온천과 사우나", "릴랙세이션 시설"],
      },
    ],
  },
  {
    id: "bay-spa",
    en: "Bay Spa",
    ko: "베이 스파",
    places: [
      {
        name: "JFA 유메 필드 마쿠하리 온천 유라노사토",
        photos: [{ src: makuhari, alt: "도쿄만이 내려다보이는 노천탕" }],
        access: "차량 약 30분 · 약 25km",
        text: [
          "도쿄만을 바라보는 노천탕이 특징이며, 맑은 날에는 후지산을 조망할 수 있습니다.",
          "천연온천, 탄산천, 제트탕, 전기탕, 로우류 사우나, 냉탕과 암반욕을 갖추고 바다 전망 레스토랑을 운영합니다.",
        ],
      },
    ],
  },
  {
    id: "shopping",
    en: "Shopping",
    ko: "쇼핑",
    lead: "가까운 쇼핑몰에서 식사와 쇼핑",
    places: [
      {
        name: "유니모 치하라다이",
        photos: [{ src: unimo, alt: "2층에서 내려다본 유니모 치하라다이 쇼핑몰 내부" }],
        access: "차량 5~10분 · 약 2~3km",
        text: [
          "약 150개 이상의 전문점과 US시네마가 있는 쇼핑몰입니다. 무인양품, 패션, 가전, 슈퍼마켓과 음식점이 고르게 구성되어 있습니다.",
        ],
        points: ["쇼핑·식사시 소요시간 약 1~2시간", "단체 고객의 저녁 식사, 생필품·기념품 쇼핑"],
      },
      {
        name: "이온타운 오유미노",
        photos: [{ src: aeon, alt: "이온타운 오유미노 중앙 홀에 놓인 크리스마스 트리" }],
        access: "차량 5~10분 · 약 2~3km",
        text: [
          "맥스밸류 슈퍼마켓을 중심으로 음식점과 푸드코트, 야마다전기, 히말라야 스포츠용품점, 워크맨 컬러스가 있는 생활형 쇼핑몰입니다.",
        ],
        points: ["전문점 OPEN 10:00~21:00", "맥스밸류 08:00~24:00"],
      },
    ],
  },
  {
    id: "nature",
    en: "Nature",
    ko: "자연·동물",
    lead: "가족과 함께하는 자연·동물 관람",
    places: [
      {
        name: "치바 동물공원",
        photos: [
          { src: zooElephant, alt: "치바 동물공원의 코끼리" },
          { src: zooGiraffe, alt: "나무 울타리 옆에 서 있는 기린" },
        ],
        access: "차량 30~40분 · 약 20~25km",
        text: [
          "코끼리, 기린, 레서판다, 고릴라, 치타와 사자 등을 볼 수 있는 가족 관광지입니다. 소개자료에 안내된 2025년 개관 동물과학관의 열대우림 전시도 함께 둘러볼 수 있습니다.",
        ],
        points: ["관람 약 2시간", "가족 동반 일정에 연계"],
      },
      {
        name: "쇼와노모리 공원",
        photos: [{ src: showanomori, alt: "꽃창포가 핀 습지와 나무 데크 산책로" }],
        access: "차량 20~30분 · 약 15~20km",
        text: [
          "치바시 미도리구의 약 32만 평 규모 자연공원입니다. 넓은 잔디밭, 산책로와 전망대가 있으며 계절에 따라 벚꽃과 철쭉을 즐길 수 있습니다.",
        ],
        points: ["가벼운 산책 약 1~2시간", "공원 전체 관람 약 2~3시간"],
      },
    ],
  },
  {
    id: "culture",
    en: "Culture & Leisure",
    ko: "문화·레저",
    lead: "지역의 자연사와 계절 볼거리",
    places: [
      {
        name: "치바 중앙박물관",
        photos: [
          { src: museumHall, alt: "치바 중앙박물관의 높은 천장 로비" },
          { src: museum, alt: "대형 코끼리 골격 표본이 전시된 박물관 내부" },
        ],
        access: "차량 15~20분 · 약 10~13km",
        text: [
          "아오바노모리 공원 안에서 보소반도의 자연과 역사를 소개합니다. 나우만코끼리와 고래 골격, 화석과 지역 생활사 전시를 보고 생태원의 숲과 연못을 걸을 수 있습니다.",
        ],
        points: ["실내 전시 약 1~1시간 30분", "생태원 포함 약 2~3시간"],
      },
      {
        name: "도쿄 독일마을",
        photos: [{ src: germanVillage, alt: "호수 위에 용 모양 조형물이 빛나는 겨울 일루미네이션" }],
        access: "차량 30~40분 · 약 27~30km",
        text: [
          "치바현 소데가우라시의 꽃·놀이시설 테마파크입니다. 독일풍 건물과 잔디밭, 관람차와 동물 교감 시설을 갖추고 있으며 겨울 일루미네이션이 대표 볼거리입니다.",
        ],
        points: ["도쿄돔 약 19개 크기, 주차 약 3,000대", "차량으로 공원 안 이동 가능"],
      },
    ],
  },
  {
    id: "yakiniku",
    en: "Yakiniku",
    ko: "야키니쿠",
    lead: "라운드 후 단체 식사",
    places: [
      {
        name: "야키니쿠 준",
        photos: [{ src: jun, alt: "야키니쿠 준 간판이 걸린 매장 입구" }],
        access: "도보 10~15분",
        text: [
          "가족이 운영하는 야키니쿠 전문점입니다. 고기를 직접 손질하고 자체 양념을 사용하며 좌식 공간과 최대 20명 모임이 가능합니다.",
        ],
        points: ["라운드 후 저녁 회식에 적합", "화요일 휴무 (소개자료 기준)"],
      },
      {
        name: "니쿠쇼 사카이",
        photos: [{ src: sakai, alt: "일본식 지붕 위에 간판이 걸린 니쿠쇼 사카이 매장 외관" }],
        access: "도보 약 10분 · 직선거리 약 570m",
        text: [
          "터치패널로 주문하면 직원이 음식을 테이블로 가져오는 주문형 야키니쿠 무한리필점입니다. 매장에서 고기를 손질하고 넓은 테이블 간격과 박스형 좌석을 갖추고 있습니다.",
        ],
        points: ["그룹 식사에 적합", "테이블 주문형 무한리필"],
      },
    ],
  },
  {
    id: "local-dining",
    en: "Local Dining",
    ko: "로컬 식당",
    places: [
      {
        name: "에이세이 중화요리점",
        photos: [{ src: eisei, alt: "붉은 간판과 깃발이 걸린 중화요리점 외관" }],
        access: "도보 6~7분 · 직선 약 360m",
        text: [
          "볶음밥, 라멘, 마파두부, 탕수육과 교자 등 다양한 중화요리를 제공합니다. 푸짐한 런치 세트와 100여 가지 메뉴의 무한리필 코스를 안내합니다.",
        ],
      },
      {
        name: "남보소 야마토스시",
        photos: [{ src: yamatoSushi, alt: "카운터석이 길게 이어진 스시 매장 내부" }],
        access: "차량 5~10분",
        text: [
          "스시와 회, 튀김, 구이, 세트 메뉴를 선택할 수 있습니다. 좌식·개별석 포함 110석과 75대 규모 주차장을 갖추고 있습니다.",
        ],
      },
      {
        name: "빅텍사스",
        photos: [{ src: bigTexas, alt: "통나무 외관에 조명이 켜진 빅텍사스 스테이크 하우스 입구" }],
        access: "도보 10~15분",
        text: [
          "서부극 분위기의 동네 스테이크·함박스테이크 전문점입니다. 코티지 숙박객이 라운드 후 편하게 저녁 식사를 즐기기 좋은 곳입니다.",
        ],
      },
    ],
  },
];

function PlacePhotos({ photos }: { photos: Photo[] }) {
  return (
    <div
      className={`relative grid aspect-[3/2] gap-1 overflow-hidden bg-forest/10 ${
        photos.length > 1 ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      {photos.map((ph) => (
        <div key={ph.alt} className="relative h-full overflow-hidden">
          <Image
            src={ph.src}
            alt={ph.alt}
            fill
            placeholder="blur"
            sizes={
              photos.length > 1
                ? "(min-width: 768px) 21vw, 50vw"
                : "(min-width: 768px) 42vw, 100vw"
            }
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function NearbyPage() {
  return (
    <>
      <PageHero
        image={showanomori}
        eyebrow="Nearby"
        title="주변 가볼만한 곳"
        lead="라운드 뒤에 들르기 좋은 혼치바 주변의 온천, 쇼핑, 관광지, 식당"
      />

      <nav
        aria-label="분류 바로가기"
        className="sticky top-16 z-30 border-b border-forest/10 bg-ivory/95 backdrop-blur"
      >
        <ul className="container-x flex gap-6 overflow-x-auto py-3 text-sm whitespace-nowrap">
          {groups.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`} className="text-ink/70 hover:text-forest">
                {g.ko} <span className="text-brass">{g.places.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((g, idx) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-32 ${idx % 2 === 1 ? "bg-sand" : ""}`}
        >
          <div className="container-x py-16 sm:py-20">
            <p className="eyebrow">{g.en}</p>
            <h2 className="h-display mt-3">{g.ko}</h2>
            {g.lead && <p className="mt-3 text-muted">{g.lead}</p>}

            <div className="mt-10 space-y-12 sm:space-y-14">
              {g.places.map((p) => (
                <article
                  key={p.name}
                  className="grid items-start gap-6 md:grid-cols-[5fr_7fr] md:gap-10"
                >
                  <PlacePhotos photos={p.photos} />
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-forest">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-brass">
                      <span className="text-muted">혼치바CC에서 </span>
                      {p.access}
                    </p>
                    <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
                      {p.text.map((t) => (
                        <p key={t}>{t}</p>
                      ))}
                    </div>
                    {p.points && (
                      <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex gap-2">
                            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-brass" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-x py-10">
        <p className="text-sm text-muted">
          주변 시설의 이동 시간·거리와 운영 정보는 제공자료 기준이며 현지 사정에 따라
          달라질 수 있습니다. 주변 시설은 별도 이용이며, 운영 시간과 요금은 방문 전
          확인해 주세요.
        </p>
      </section>

      <ContactBand />
    </>
  );
}
