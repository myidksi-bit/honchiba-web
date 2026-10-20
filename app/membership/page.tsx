import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site";
import heroImage from "@/public/images/scenery-5.jpg";

export const metadata: Metadata = {
  title: "회원권",
  description:
    "혼치바 컨트리클럽 10년 소멸형 회원권. 골드 1,200만원, 블랙 800만원. 회원 혜택과 요금, 가입 절차 안내.",
};

const types = [
  {
    name: "골드",
    price: "1,200만원",
    members: "정회원 1명, 무기명 3명",
    note: "정회원 동반 필수",
  },
  { name: "블랙", price: "800만원", members: "정회원 1명", note: null },
];

const basics = [
  "양도, 상속, 증여는 최초 가입·명의 이전일로부터 1년 후부터 가능",
  "명의개서료는 1촌이내 직계존비속 110만원",
  "법인회원 명의개서료는 대표이사 제외한 기명인 변경은 110만원",
  "예약 횟수 제한 없음 (정회원 동반 필수)",
  "모든 회원 성수기(3~5월, 9~11월)에도 최대 3박 연박 가능",
];

const perks: [string, string, string][] = [
  ["고객센터", "전용번호", "일반번호"],
  ["골프&숙박", "20% 상당 할인", "정상가"],
  ["2인 라운드", "가능", "불가능"],
  ["렌터카", "포함", "포함"],
];

const steps = [
  "상품 확인 후 회원권 구입 신청",
  "전자계약서 검토 후 날인",
  "연회비 납부",
  "회원번호 및 전용 아이디 발급",
  "X골프앱에서 예약 신청",
];

const notices = [
  "본 내용은 혼치바컨트리클럽 운영 규정안에 따라 변경될 수 있음",
  "회원권은 무단으로 타인에게 양도 또는 대여할 수 없으며, 그에 따라 발생하는 모든 문제에 대한 책임은 본인에게 있음",
  "재판매가 가능한 여행사 등의 업체는 구매 불가함",
];

const anchors = [
  { href: "#types", label: "회원권 유형" },
  { href: "#perks", label: "회원전용특전" },
  { href: "#fees", label: "요금" },
  { href: "#steps", label: "가입절차" },
  { href: "#contact", label: "상담" },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Membership"
        title="회원권"
        lead="10년 동안 혼치바를 내 골프장처럼. 예약 횟수 제한 없이 이용하는 10년 소멸형 회원권입니다."
      />

      <nav
        aria-label="회원권 안내 바로가기"
        className="sticky top-16 z-30 border-b border-forest/10 bg-ivory/95 backdrop-blur"
      >
        <ul className="container-x flex gap-6 overflow-x-auto py-3 text-sm whitespace-nowrap">
          {anchors.map((a) => (
            <li key={a.href}>
              <a href={a.href} className="text-ink/70 hover:text-forest">
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="types" className="container-x scroll-mt-32 py-16 sm:py-20">
        <p className="eyebrow">Membership Type</p>
        <h2 className="h-display mt-3">회원권 유형 · 10년 소멸형</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {types.map((t) => (
            <div key={t.name} className="border border-forest/15 bg-white p-8">
              <p className="font-serif text-2xl font-semibold text-forest">{t.name}</p>
              <p className="mt-4 font-serif text-4xl text-ink">{t.price}</p>
              <p className="mt-5 border-t border-forest/15 pt-5 text-ink">{t.members}</p>
              {t.note && <p className="mt-1 text-sm text-muted">{t.note}</p>}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          * 판매가격 내 입회비 포함, 명의개서료 110만원 별도
        </p>

        <h3 className="mt-14 font-serif text-2xl font-semibold text-forest">기본혜택</h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {basics.map((b) => (
            <li key={b} className="flex gap-3 bg-sand px-5 py-4 text-sm leading-relaxed">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-brass" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section id="perks" className="scroll-mt-32 bg-sand">
        <div className="container-x py-16 sm:py-20">
          <p className="eyebrow">Members Only</p>
          <h2 className="h-display mt-3">회원전용특전</h2>
          <div className="mt-8 overflow-x-auto bg-white">
            <table className="tbl">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>회원</th>
                  <th>비회원</th>
                </tr>
              </thead>
              <tbody>
                {perks.map(([item, member, guest], i) => (
                  <tr key={i}>
                    <th>{item}</th>
                    <td className="font-medium text-forest">{member}</td>
                    <td className="text-muted">{guest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="fees" className="container-x scroll-mt-32 py-16 sm:py-20">
        <p className="eyebrow">Fees</p>
        <h2 className="h-display mt-3">요금 안내</h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl font-semibold text-forest">1일 요금</h3>
            <div className="mt-4 overflow-x-auto bg-white">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>회원</th>
                    <th>비회원</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>주중</th>
                    <td className="font-medium text-forest">8,100엔</td>
                    <td className="text-muted">13,000엔</td>
                  </tr>
                  <tr>
                    <th>주말, 공휴일</th>
                    <td className="font-medium text-forest">10,200엔</td>
                    <td className="text-muted">19,000엔</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              * 포함내역: 그린피 18홀, 카트피(4인승)
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-forest">
              왕복 픽업 서비스
            </h3>
            <div className="mt-4 overflow-x-auto bg-white">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>구간</th>
                    <th>회원</th>
                    <th>비회원</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>나리타 ↔ 혼치바</th>
                    <td className="font-medium text-forest">11,000엔</td>
                    <td className="text-muted">서비스 없음</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              * 최소 4인 이상인 경우 서비스 제공
            </p>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-brass bg-sand px-6 py-5">
          <h3 className="font-medium text-forest">불포함사항</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            왕복 항공권, 주류 및 음료, 여행자 보험, 개인 교통비용, 단독 픽업비용
          </p>
        </div>
      </section>

      <section id="steps" className="scroll-mt-32 bg-forest-deep text-ivory">
        <div className="container-x py-16 sm:py-20">
          <p className="eyebrow text-[#e3c891]">How to Join</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">가입절차</h2>
          <ol className="mt-10 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="bg-forest-deep p-6">
                <span className="font-serif text-3xl text-[#e3c891]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ivory/85">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <h2 className="font-serif text-2xl font-semibold text-forest">유의사항</h2>
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
          {notices.map((n) => (
            <li key={n}>* {n}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="scroll-mt-32 bg-forest text-ivory">
        <div className="container-x py-16 text-center sm:py-20">
          <p className="eyebrow text-[#e3c891]">Contact</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            회원권 상담
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ivory/80">
            상품 확인과 구입 신청은 혼치바 컨트리클럽 고객센터에서 안내해 드립니다.
          </p>
          <a
            href={contact.telHref}
            className="mt-8 inline-block font-serif text-4xl font-semibold tracking-wide text-white sm:text-5xl"
          >
            {contact.tel}
          </a>
          <p className="mt-4 text-sm text-ivory/60">{contact.seoulOffice}</p>
          <div className="mt-8">
            <a href={contact.telHref} className="btn btn-brass">
              전화 상담하기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
