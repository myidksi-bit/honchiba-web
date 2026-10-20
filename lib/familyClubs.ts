import type { StaticImageData } from "next/image";
import lvccMap from "@/public/images/family-lvcc-map.jpg";
import lvccQr from "@/public/images/family-lvcc-qr.png";
import pvccMap from "@/public/images/family-pvcc-map.jpg";
import pvccQr from "@/public/images/family-pvcc-qr.png";

// 출처: 패밀리CC 소개자료(LVCC·PVCC, 26.10.20)

export type FamilyClub = {
  id: string;
  en: string;
  ko: string;
  location: string;
  stats: { value: string; label: string }[];
  intro: string;
  info: [string, string][];
  courses?: { name: string; spec: string; text: string; note: string }[];
  sections: { title: string; text?: string; bullets?: string[] }[];
  facilities: [string, string][];
  map: { image: StaticImageData; qr: StaticImageData; href: string; alt: string };
};

export const familyDiscount = {
  title: "패밀리 골프장 그린피 50% 할인",
  clubs: "라스베이거스 컨트리클럽(네바다) · 팜밸리 컨트리클럽(캘리포니아)",
  basis: "회원 비동반 게스트 요금 기준",
};

export const familyClubs: FamilyClub[] = [
  {
    id: "lvcc",
    en: "LAS VEGAS COUNTRY CLUB",
    ko: "라스베이거스 컨트리클럽",
    location: "네바다주 라스베이거스",
    stats: [
      { value: "1967", label: "클럽 설립 연도" },
      { value: "18 HOLES", label: "챔피언십 코스" },
      { value: "PAR 72", label: "7,203 YARDS" },
      { value: "PRIVATE", label: "회원제 클럽" },
    ],
    intro:
      "라스베이거스의 화려한 도심에서 만나는 정통 파크랜드 골프. 스트립 인근의 뛰어난 접근성에 60년에 가까운 클럽 전통, 울창한 수목과 호수 경관이 어우러진 프라이빗 명문 코스입니다.",
    info: [
      ["소재지", "3000 Joe W. Brown Drive, Las Vegas, Nevada 89109, USA"],
      ["개장·설계", "1967년 개장 · 원설계 Edmund B. Ault · 후속 보완 Ron Garl / Mark Rathert"],
      ["규모·코스", "18홀 / Par 72 / 백티 기준 공식 소개 7,203야드(약 6,586m)"],
      ["운영 방식", "프라이빗 회원제. Full Golf / National Golf / Corporate Golf 등 복수 회원 유형 운영"],
      ["문의·웹사이트", "+1 702-734-1122 | www.lasvegascc.com"],
    ],
    sections: [
      {
        title: "골프 코스 & 그린의 매력",
        text: "전통적인 파크랜드형 코스로 나무가 둘러싼 페어웨이, 물결치는 지형과 호수, 전략적 벙커가 인상적입니다. 정교하게 관리된 그린과 나무·수변 장애물의 배치가 정확한 티샷과 세컨드샷, 거리·방향 조절을 요구합니다. 백투백 파5와 승부처가 되는 마무리 홀 등으로 18홀의 리듬이 다채롭습니다.",
      },
      {
        title: "클럽의 역사와 차별화 포인트",
        text: "PGA 투어 Las Vegas Invitational 개최 역사를 지니며, LIV Golf 대회로도 세계 골프 팬들에게 알려졌습니다. 전통적인 골프 문화와 라스베이거스 관광을 함께 경험할 수 있는 것이 강점입니다. 현재 클럽 공식 소개에는 Samick Holdings의 운영·관리 아래 전통을 계승하고 있다고 안내되어 한국 골퍼에게도 친숙한 연결점을 제공합니다.",
      },
    ],
    facilities: [
      ["클럽하우스", "회원 라운지와 다이닝 공간, 프라이빗 다이닝, 기업행사·연회 시설. 클래식 라스베이거스 특유의 우아한 분위기"],
      ["골프 지원시설", "드라이빙레인지, 퍼팅·연습 공간, 골프숍, 회원 토너먼트 및 레슨 프로그램"],
      ["테니스", "기후 조절이 가능한 실내 테니스 파빌리온 2면. 연중 플레이 및 레슨 프로그램"],
      ["피클볼", "설치식(rollout) 피클볼 코트 운영. 코트 수·이용 가능 시간은 클럽 사전 확인"],
      ["수영·피트니스", "랩 풀(lap pool), 유산소·근력운동 시설, 개인·단체 트레이닝 및 골프 특화 체력 관리"],
      ["식음·행사", "다이닝룸·라운지, 사적 모임·기업 미팅, 골프 행사 이후 리셉션 지원"],
    ],
    map: {
      image: lvccMap,
      qr: lvccQr,
      href: "https://maps.google.com/?q=Las+Vegas+Country+Club+3000+Joe+W+Brown+Dr",
      alt: "라스베이거스 스트립 동쪽에 위치한 라스베이거스 컨트리클럽 위치 지도",
    },
  },
  {
    id: "pvcc",
    en: "PALM VALLEY COUNTRY CLUB",
    ko: "팜밸리 컨트리클럽",
    location: "캘리포니아주 팜데저트",
    stats: [
      { value: "1984 / 85", label: "클럽 연혁 / 코스 개장" },
      { value: "36 HOLES", label: "두 개의 18홀 코스" },
      { value: "72 + 63", label: "코스별 PAR" },
      { value: "PRIVATE", label: "초청 기반 회원제" },
    ],
    intro:
      "캘리포니아 코첼라밸리의 야자수와 푸른 잔디, 산악 풍경을 무대로 36홀을 누리는 프라이빗 골프 라이프스타일 클럽. 수준 높은 챔피언십 라운드와 부담을 덜어낸 쇼트 코스를 한곳에서 경험할 수 있습니다.",
    info: [
      ["소재지", "39205 Palm Valley Drive, Palm Desert, California 92211, USA"],
      ["설립·개장", "공식 방문 안내에 'Since 1984' 표기 · 2개 골프 코스 1985년 개장 자료 확인"],
      ["설계·규모", "Ted Robinson 설계 · 18홀 Championship + 18홀 Challenge = 총 36홀"],
      ["운영 방식", "프라이빗 회원제 / 초청 기반 회원 가입. Full Privilege·Sports Golf·Tennis & Athletic 등"],
      ["문의·웹사이트", "+1 760-345-2737 | www.palmvalley-cc.com"],
    ],
    courses: [
      {
        name: "CHAMPIONSHIP COURSE",
        spec: "18 HOLES | PAR 72 | 6,545 YD",
        text: "완만하게 굴곡진 페어웨이, 정돈된 그린, 물길이 어우러진 본격적인 대회형 코스. 블루티 기준으로 정교한 코스 매니지먼트와 샷의 완성도를 시험합니다.",
        note: "예상 소요 약 4시간 / 블루티 기준 거리",
      },
      {
        name: "CHALLENGE COURSE",
        spec: "18 HOLES | PAR 63 | 4,232 YD",
        text: "파4 9개, 파3 9개로 구성된 개성 있는 쇼트 코스. 짧지만 단조롭지 않아 숏게임과 아이언 정확도를 집중적으로 즐기기 좋습니다.",
        note: "예상 소요 약 3시간 15분 / 최장 티 기준 거리",
      },
    ],
    sections: [
      {
        title: "한국 골퍼에게 추천하는 포인트",
        bullets: [
          "일정과 실력에 따라 18홀 챔피언십과 18홀 쇼트 코스를 조합할 수 있는 36홀 다양성",
          "야자수·수경시설·사막 산악 경관이 만나는 남캘리포니아 특유의 리조트형 분위기",
          "골프 외 테니스, 피클볼, 수영·스파·다이닝까지 포함하는 체류형 클럽 경험",
        ],
      },
    ],
    facilities: [
      ["클럽하우스", "코스 조망이 가능한 메인 다이닝룸, The Lounge, Bogies Grill, 이벤트·연회 공간 등 다양한 식음·사교 공간"],
      ["골프 지원시설", "풀렝스 잔디 드라이빙레인지, 퍼팅·숏게임 연습장, 프로숍, 회원 골프 이벤트와 레슨"],
      ["테니스", "실외 테니스 코트 12면(공식 소개), 스타디움 코트와 강습·리그·이벤트 프로그램"],
      ["피클볼", "상설 피클볼 코트 12면, 개인·그룹 레슨 및 회원 친선경기 프로그램"],
      ["수영장", "주니어 올림픽 규격 수영장, 자쿠지, 카바나. 휴식과 수중 운동에 활용"],
      ["스파·피트니스", "Pur Val Spa, 마사지·피부관리, 사우나, 피트니스·필라테스·요가 등 그룹 수업"],
    ],
    map: {
      image: pvccMap,
      qr: pvccQr,
      href: "https://maps.app.goo.gl/QN9J5MAsWnnPupuN9",
      alt: "팜데저트 10번 고속도로 인근에 위치한 팜밸리 컨트리클럽 위치 지도",
    },
  },
];
