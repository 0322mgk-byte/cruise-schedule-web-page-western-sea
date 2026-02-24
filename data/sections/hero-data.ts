import type { HeroData } from '../types';

export const heroData: HeroData = {
  ctaText: "일정 확인하기",
  cruiseLine: "MSC 크루즈 Seaview호",
  departureDate: "2026년 06월 06일 출발",
  duration: "9박 10일",
  nights: "9박",
  description: "서부 지중해 크루즈 9박 10일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요",
  mobileDescription: "서부 지중해 크루즈 {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요",
  videoSources: [
    { src: "/hero-video/desktop_hero.webm", type: "video/webm" },
    { src: "/hero-video/desktop_hero.mp4", type: "video/mp4" },
  ],
  mobileVideoSources: [
    { src: "/hero-video/mobile_hero.webm", type: "video/webm" },
    { src: "/hero-video/mobile_hero.mp4", type: "video/mp4" },
  ],
};
