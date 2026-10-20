import Image from "next/image";
import type { FamilyClub } from "@/lib/familyClubs";

function InfoTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="overflow-x-auto bg-white">
      <table className="tbl">
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <th className="w-32 whitespace-nowrap sm:w-40">{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="font-serif text-xl font-semibold text-forest">{children}</h4>;
}

/** 패밀리CC 소개자료 한 클럽 분량의 본문. 회원권 페이지와 패밀리CC 페이지에서 함께 쓴다. */
export default function FamilyClubDetail({ club }: { club: FamilyClub }) {
  return (
    <div className="space-y-10">
      <dl className="grid grid-cols-2 gap-px bg-forest/15 lg:grid-cols-4">
        {club.stats.map((s) => (
          <div key={s.value} className="bg-forest-deep px-5 py-5 text-ivory">
            <dt className="font-serif text-2xl font-semibold text-[#e3c891]">{s.value}</dt>
            <dd className="mt-1 text-xs text-ivory/75">{s.label}</dd>
          </div>
        ))}
      </dl>

      <p className="max-w-4xl font-medium leading-relaxed text-ink">{club.intro}</p>

      <div className="space-y-4">
        <SubTitle>클럽 기본 정보</SubTitle>
        <InfoTable rows={club.info} />
      </div>

      {club.courses && (
        <div className="space-y-4">
          <SubTitle>서로 다른 매력의 2개 코스</SubTitle>
          <div className="grid gap-5 md:grid-cols-2">
            {club.courses.map((c) => (
              <div key={c.name} className="border border-forest/15 bg-white p-6">
                <p className="font-semibold tracking-wide text-forest">{c.name}</p>
                <p className="mt-1 text-sm font-medium text-brass">{c.spec}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{c.text}</p>
                <p className="mt-4 text-xs text-muted">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {club.sections.map((s) => (
        <div key={s.title} className="space-y-3">
          <SubTitle>{s.title}</SubTitle>
          {s.text && <p className="max-w-4xl leading-relaxed text-muted">{s.text}</p>}
          {s.bullets && (
            <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="space-y-4">
        <p className="eyebrow">Facilities &amp; Access</p>
        <SubTitle>클럽하우스 및 주요 부대시설</SubTitle>
        <InfoTable rows={club.facilities} />
      </div>

      <div className="space-y-4">
        <SubTitle>위치약도</SubTitle>
        <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_200px] lg:max-w-4xl">
          <div className="overflow-hidden border border-forest/10 bg-white">
            <Image
              src={club.map.image}
              alt={club.map.alt}
              placeholder="blur"
              sizes="(min-width: 1024px) 640px, (min-width: 640px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="flex items-center gap-5 sm:flex-col sm:items-center sm:text-center">
            <div className="w-32 shrink-0 border border-forest/10 bg-white p-2 sm:w-40">
              <Image
                src={club.map.qr}
                alt={`${club.ko} 구글지도로 연결되는 QR코드`}
                sizes="160px"
                className="h-auto w-full"
              />
            </div>
            <div>
              <p className="text-sm text-muted">휴대폰 카메라로 스캔하면 구글지도로 연결됩니다.</p>
              <a
                href={club.map.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3 px-4 py-2 text-sm"
              >
                지도 바로가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
