import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import ContactBand from "@/components/ContactBand";
import PageHero from "@/components/PageHero";
import aeon from "@/public/images/nearby-aeon.jpg";
import bigTexas from "@/public/images/nearby-bigtexas.jpg";
import germanVillage from "@/public/images/nearby-germanvillage.jpg";
import jun from "@/public/images/nearby-jun.jpg";
import motherFarm from "@/public/images/nearby-motherfarm.jpg";
import museum from "@/public/images/nearby-museum.jpg";
import showanomori from "@/public/images/nearby-showanomori.jpg";
import unimo from "@/public/images/nearby-unimo.jpg";
import yamatoSushi from "@/public/images/nearby-yamatosushi.jpg";
import yubune from "@/public/images/nearby-yubune.jpg";
import yuranosato from "@/public/images/nearby-yuranosato.jpg";
import zoo from "@/public/images/nearby-zoo.jpg";

export const metadata: Metadata = {
  title: "주변 가볼만한 곳",
  description:
    "혼치바 컨트리클럽 주변의 온천, 쇼핑몰, 관광지, 식당 안내. 라운드 뒤에 들르기 좋은 12곳.",
};

type Place = {
  name: string;
  image: StaticImageData;
  alt: string;
  access: string;
  text: string[];
};

type Group = { id: string; en: string; ko: string; places: Place[] };

const groups: Group[] = [
  {
    id: "onsen",
    en: "Onsen",
    ko: "온천",
    places: [
      {
        name: "유라노사토 온천",
        image: yuranosato,
        alt: "바위로 둘러싸인 유라노사토 온천의 노천탕",
        access: "약 10~15km · 차량 15~20분",
        text: [
          "혼치바CC에서 라운드를 마친 뒤 들르기 좋은 당일치기 온천 시설입니다. 지하 1,500m에서 솟는 천연 온천수를 노천탕에서 즐기고, 사우나·암반욕·식사까지 한곳에서 할 수 있습니다.",
          "요오드·나트륨을 함유한 염화물 강염천입니다. 소금기가 있는 온천수이며, 30분마다 가동하는 로우류 사우나, 냉탕, 별도 요금의 암반욕, 바디케어, 식당 ‘사쿠라(咲楽)’가 있습니다.",
          "온천과 사우나만 이용하면 1시간 30분~2시간, 식사나 암반욕까지 하면 2~3시간 정도 잡으시면 여유롭습니다.",
        ],
      },
      {
        name: "유부네 이치하라 온천",
        image: yubune,
        alt: "김이 피어오르는 유부네 이치하라 온천의 노천탕",
        access: "2~3km · 차량 5~10분 이내",
        text: [
          "‘모리마치 치하라다이 몰’ 내에 위치한 비교적 최신 온천·사우나 복합 리조트 시설입니다. 천연온천뿐만 아니라 사우나 및 릴랙세이션 시설이 매우 충실하게 갖추어져 있습니다.",
          "나트륨·염화물·탄산수소염이 함유된 천연온천 냉광천수로 보온 및 보습 효과가 뛰어난 성분이 복합적으로 함유되어 있어 피부가 매끄러워지는 감촉을 느낄 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: "shopping",
    en: "Shopping",
    ko: "쇼핑",
    places: [
      {
        name: "유니모 치하라다이",
        image: unimo,
        alt: "2층에서 내려다본 유니모 치하라다이 쇼핑몰 내부",
        access: "2~3km · 차량 5~10분 이내",
        text: [
          "유니모에는 약 150개 이상의 전문점과 US시네마가 있으며 1~2시간의 쇼핑과 식사를 하기 좋으며, 무인양품, 가전, 패션, 슈퍼, 음식점이 고르게 구성되어 있습니다.",
          "단체 골프 관광객의 저녁 식사와 생필품·기념품을 쇼핑하기에 좋은 쇼핑몰입니다.",
        ],
      },
      {
        name: "이온타운 오유미노",
        image: aeon,
        alt: "이온타운 오유미노 중앙 홀에 놓인 크리스마스 트리",
        access: "2~3km · 차량 5~10분 이내",
        text: [
          "이온타운 오유미노는 혼치바CC 고객이 골프 후 마트·식사·생필품 쇼핑을 하기 좋은 곳으로 오유미노의 중심은 맥스밸류 슈퍼마켓입니다. 여기에 음식점과 푸드코트, 야마다전기, 스포츠용품점 히말라야, 워크맨 컬러스 매장이 있습니다.",
          "전문점은 대체로 10:00~21:00, 맥스밸류는 08:00~24:00라서 늦게 라운드를 마친 고객에게도 이용이 편리합니다.",
        ],
      },
    ],
  },
  {
    id: "sightseeing",
    en: "Sightseeing",
    ko: "관광",
    places: [
      {
        name: "치바 동물공원",
        image: zoo,
        alt: "나무 울타리 옆에 서 있는 기린",
        access: "20~25km · 차량 30~40분",
        text: [
          "치바시 동물공원(千葉市動物公園)은 혼치바CC에서 골프를 친 뒤 가족과 함께 들르기 좋은 관광지입니다. 2시간 정도의 관람 소요시간이 예상되며, 코끼리, 기린, 레서판다, 고릴라·치타·사자 등 다양한 동물을 볼 수 있습니다.",
          "2025년에 새롭게 문을 연 동물과학관의 열대우림 전시도 볼거리입니다.",
        ],
      },
      {
        name: "쇼와노모리 공원",
        image: showanomori,
        alt: "꽃창포가 핀 습지와 나무 데크 산책로",
        access: "15~20km · 차량 20~30분",
        text: [
          "치바시 미도리구에 있는 대형 자연공원입니다. 넓은 잔디밭과 산책로, 전망대가 있고 계절에 따라 벚꽃과 철쭉을 즐길 수 있습니다.",
          "32만평 규모로 전망대와 가벼운 산책 1~2시간, 공원을 넉넉히 둘러보면 2~3시간이 소요됩니다.",
        ],
      },
      {
        name: "치바 중앙박물관",
        image: museum,
        alt: "대형 코끼리 골격 표본이 전시된 박물관 내부",
        access: "약 10~13km · 15~20분",
        text: [
          "아오바노모리 공원 안에서 보소반도의 자연과 역사를 소개하는 종합박물관입니다. 나우만코끼리와 고래의 골격 표본, 화석, 지역의 옛 생활상을 볼 수 있습니다.",
          "옆의 생태원에서는 보소 지역의 자연을 재현한 숲과 연못을 걸으며 새와 식물을 관찰할 수 있습니다.",
          "실내 전시 1~1시간 30분, 생태원 산책까지 하면 2~3시간 정도를 권합니다.",
        ],
      },
      {
        name: "도쿄 독일마을",
        image: germanVillage,
        alt: "호수 위에 용 모양 조형물이 빛나는 겨울 일루미네이션",
        access: "약 27~30km · 고속도로 기준 차량 30~40분",
        text: [
          "이름에 ‘도쿄’가 들어가지만 치바현 소데가우라시에 있는 꽃·놀이시설 테마파크입니다. 독일풍 건물과 넓은 잔디밭을 배경으로 계절 꽃, 관람차, 동물 교감, 식사 등을 즐길 수 있습니다. 겨울에는 대규모 일루미네이션이 대표 볼거리입니다.",
          "도쿄돔 약 19개 크기. 호수·꽃밭, 잔디광장, 식당·상점, 놀이시설의 4개 구역으로 나뉩니다. 약 3,000대의 주차 공간이 있고 차를 타고 공원 안을 이동할 수 있습니다.",
        ],
      },
      {
        name: "마더팜 치바",
        image: motherFarm,
        alt: "품종별 단상에 올라선 양들의 시프 쇼",
        access: "약 55~65km · 평상시 차량 약 1시간~1시간 20분",
        text: [
          "치바현 훗쓰시의 산지에 있는 대형 체험 목장입니다. 양 떼 행진과 양털 깎기 쇼, 동물 먹이 주기, 계절 꽃밭을 즐길 수 있어 아이와 함께 가거나 반나절 나들이하기 좋습니다. 부지 규모는 약 76만평으로 상당히 넓습니다.",
          "가장 유명한 볼거리는 양 떼 행진과 ‘시프 쇼’입니다. 트랙터형 차량을 타고 목장을 둘러보는 마더팜 투어 DX도 인기 있고, 우유 짜기 체험과 오리 행진 등은 날짜별 행사표를 보고 동선을 짜면 좋습니다. 10월에는 붉게 물드는 코키아도 볼거리입니다.",
          "거리가 있지만 다채로운 테마목장으로 인기가 높습니다. 주요 쇼와 목장 체험까지 보려면 3~5시간 정도를 권합니다.",
        ],
      },
    ],
  },
  {
    id: "dining",
    en: "Dining",
    ko: "식당",
    places: [
      {
        name: "야키니쿠 준",
        image: jun,
        alt: "야키니쿠 준 간판이 걸린 매장 입구",
        access: "도보 10~15분",
        text: [
          "가족이 운영하는 야키니쿠 전문점으로 고기를 손으로 썰어 내고 자체 양념을 사용합니다. 좌식 공간과 최대 20명 모임도 가능합니다.",
          "골프 후 저녁 회식에 추천합니다. 화요일은 휴무입니다.",
        ],
      },
      {
        name: "남보소 야마토스시",
        image: yamatoSushi,
        alt: "카운터석이 길게 이어진 스시 매장 내부",
        access: "차량 5~10분",
        text: [
          "스시 전문점으로 스시 외에도 회, 튀김, 구이와 세트 메뉴가 있어 일행의 취향이 조금씩 달라도 식사하기 좋습니다.",
          "좌식과 개별석을 포함해 110석, 주차장은 75대 규모라 4인 플레이 후 방문하기에도 편리한 편입니다.",
        ],
      },
      {
        name: "빅텍사스",
        image: bigTexas,
        alt: "통나무 외관에 조명이 켜진 빅텍사스 스테이크 하우스 입구",
        access: "도보 10~15분",
        text: [
          "스테이크와 함박스테이크를 전문으로 하는 동네 식당입니다. 서부극 분위기의 작은 매장에서 스테이크를 한 장씩 구워 바로 낸다고 소개합니다.",
          "격식을 차린 접대보다 코티지 숙박객이 골프 후 편하게 고기와 식사를 즐기기 좋은 곳입니다.",
        ],
      },
    ],
  },
];

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

            <div className="mt-10 space-y-12 sm:space-y-14">
              {g.places.map((p) => (
                <article
                  key={p.name}
                  className="grid items-start gap-6 md:grid-cols-[5fr_7fr] md:gap-10"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-forest/10">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-x py-10">
        <p className="text-sm text-muted">
          거리와 이동 시간은 예상치이며 교통 상황에 따라 달라질 수 있습니다. 주변
          시설은 별도 이용이며, 운영 시간과 요금은 방문 전 확인해 주세요.
        </p>
      </section>

      <ContactBand />
    </>
  );
}
