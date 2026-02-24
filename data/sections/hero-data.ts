import type { HeroData } from '../types';

export const heroData: HeroData = {
  ctaText: "일정 확인하기",
  cruiseLine: "프린세스 크루즈 에메랄드호",
  departureDate: "2026년 08월 03일 출발",
  duration: "8박 10일",
  nights: "8박",
  description: "알래스카 크루즈 8박 10일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요",
  mobileDescription: "알래스카 크루즈 {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요",
  videoSources: [
    { src: "/hero-video/hero-clip-1080p.webm", type: "video/webm" },
    { src: "/hero-video/hero-clip-1080p.mp4", type: "video/mp4" },
  ],
  mobileVideoSrc: "/hero-video/hero-clip.mp4",
};
