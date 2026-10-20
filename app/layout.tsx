import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: {
    default: "혼치바 글로벌10 | 혼치바CC · 라스베이거스CC · 팜밸리CC 회원권",
    template: "%s | 혼치바 글로벌10",
  },
  description:
    "일본 치바 혼치바 컨트리클럽 10년 회원권에 라스베이거스 컨트리클럽·팜밸리 컨트리클럽 그린피 50% 할인을 더한 혼치바 글로벌10 회원권 안내.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
