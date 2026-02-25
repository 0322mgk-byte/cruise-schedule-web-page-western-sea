import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "호구 안 당하고 부모님 서부 지중해 크루즈 VIP 모시는 법",
  description:
    "짐 싸는 고생 끝! 직항으로 편하게, 4개국을 내 방 발코니에서 직관",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "localhost:3000"}`
  ),
  openGraph: {
    title: "호구 안 당하고 부모님 서부 지중해 크루즈 VIP 모시는 법",
    description:
      "짐 싸는 고생 끝! 직항으로 편하게, 4개국을 내 방 발코니에서 직관",
    siteName: "서부 지중해 크루즈 일정표",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/western-mediterranean-sea-og.png",
        width: 1200,
        height: 630,
        alt: "서부 지중해 크루즈 일정표",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "호구 안 당하고 부모님 서부 지중해 크루즈 VIP 모시는 법",
    description:
      "짐 싸는 고생 끝! 직항으로 편하게, 4개국을 내 방 발코니에서 직관",
    images: ["/western-mediterranean-sea-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
