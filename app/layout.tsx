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
    default: "혼치바 컨트리클럽 | 일본 치바 27홀 골프 & 코티지",
    template: "%s | 혼치바 컨트리클럽",
  },
  description:
    "1970년 개장, 나리타·하네다 공항에서 차량 약 50분. 27홀 코스와 삼나무 코티지 7동을 갖춘 혼치바 컨트리클럽 한글 안내.",
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
