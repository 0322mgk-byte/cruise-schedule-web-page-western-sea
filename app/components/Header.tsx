"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cruiseData } from "@/data/cruise-data";

const { navItems, companyName, logoPath, logoDarkPath, mobileTitle } = cruiseData.header;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full h-12 md:h-20 z-50 transition-all duration-300 bg-[#0054a0] ${scrolled
        ? "md:bg-white/80 md:backdrop-blur-md md:border-b md:border-gray-200 md:shadow-sm"
        : "md:bg-transparent md:border-b md:border-white/30"
        }`}
    >
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-10 flex items-center">
        {/* 모바일: 상품상세정보 중앙 표시 */}
        <span className="md:hidden flex-1 text-center font-bold text-base text-white">
          {mobileTitle || "상품상세정보"}
        </span>

        {/* 데스크톱: 로고 + 한세계여행사 좌측 */}
        <div className="hidden md:flex flex-1 items-center">
          <Link href="/" className="flex items-center gap-2 group">
            {logoPath && (
              <div className="relative h-8 flex-shrink-0" style={{ aspectRatio: "448/370" }}>
                <img src={logoPath} alt={`${companyName} 로고`} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`} />
                <img src={logoDarkPath || logoPath} alt={`${companyName} 로고`} className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`} />
              </div>
            )}
            <span className={`font-bold text-2xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white group-hover:text-gray-200"}`}>
              {companyName}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors duration-150 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-200 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <Link
            href="#contact"
            className={`text-base font-medium h-10 px-4 inline-flex items-center justify-center rounded-full transition-colors duration-150 ${scrolled
              ? "bg-[#0054a0] text-white hover:bg-[#004080]"
              : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
          >
            예약 문의
          </Link>
        </div>
      </div>
    </header>
  );
}
