import type { ChecklistData, HeaderData, FooterData, MobileBottomBarData } from '../types';

export const checklistData: ChecklistData = {
  labels: {
    title: "준비물",
    subtitle: "쾌적한 크루즈 여행을 위해 미리 챙겨주세요",
  },
  categories: [
    {
      title: "서류 / 결제",
      items: [
        "여권 (6개월 이상 잔여기간)",
        "여권 분실 시 크루즈 탑승 불가 (긴급여권 X)",
        "항공권 / 크루즈 티켓 / 짐택 / 호텔 바우처 / 여행자보험 등은 여행사 준비",
        "신용카드는 본인 또는 동반자 명의 권장",
        "해외 사용 신용카드 (비자 / 마스터 / 다이너스 / 아멕스 등)",
        "카드가 없으면 현금 보증금(약 300~500달러 또는 유로)으로 대체 가능",
      ],
    },
    {
      title: "의상 / 개인용품",
      items: [
        "남: 셔츠 정장·넥타이 또는 턱시도",
        "여: 원피스 / 블라우스 (한복 유용)",
        "신발 (캐주얼화 / 운동화 / 슬리퍼·크록스)",
        "썬크림, 모자, 화장품, 빗, 면도기",
        "선사 정책에 따라 갈라 디너가 있을 수 있음",
        "선내 18~20도 온도 유지",
        "수영장 / 피트니스 및 도보 일정 대비",
        "등산복 / 등산화는 자제 권장",
        "우천 대비 우산 또는 우비",
      ],
    },
    {
      title: "환전",
      items: [
        "현지 화폐",
        "(카지노 이용 시) 미국 달러",
        "한국 원화는 사용 불가",
      ],
    },
    {
      title: "음식 / 간식",
      items: [
        "사탕, 과자 등 간식",
        "(취향) 튜브 고추장",
        "(취향) 컵라면",
        "(취향) 김치 (통조림 / 볶음김치)",
        "(취향) 소주 (종이팩)",
        "개인 취향에 따라 준비",
        "선내 반입 규정은 선사 기준 확인 필요",
      ],
    },
    {
      title: "가방 / 위생",
      items: [
        "앞으로 메는 소형 가방 (소매치기 예방 목적 권장)",
        "치약 / 칫솔",
        "위생팩",
        "텀블러 (물 담는 용기)",
        "선사 제공: 샴푸 / 컨디셔너 / 바디워시 / 수건",
      ],
    },
    {
      title: "상비약",
      items: [
        "소화제, 멀미약, 두통약, 감기약, 해열제, 상처연고, 밴드",
        "개인 복용약은 캐리어 / 휴대품에 분산해 넉넉히 준비 권장",
      ],
    },
    {
      title: "수화물",
      items: [
        "권장 사항: 일반적으로 1인당 2개의 위탁 수하물을 권장합니다",
        "무게: 개당 약 23kg(50lbs)을 초과하지 않는 것이 좋습니다 (승무원이 직접 운반하기 때문에 안전상의 이유로 제한)",
        "크기: 객실 내 침대 밑이나 옷장에 보관해야 하므로 너무 큰 하드케이스보다는 표준 사이즈가 유리합니다",
      ],
    },
    {
      title: "통신",
      items: [
        "해외 로밍 신청",
        "출국 전 데이터 통신 차단",
        "통신사 연락처: SK 02-6343-9000 / KT 02-2190-0901 / LGT 02-3416-7010",
        "선내 와이파이 별도 신청 (룸당 1인 권장)",
      ],
    },
    {
      title: "기타 / 주의",
      items: [
        "접는 천가방 또는 장바구니 (마지막 날 짐 꾸리기 용도로 유용)",
        "(유료) 크루즈 인터넷",
        "(유료) 주류 패키지",
        "전기 110V·220V",
        "드라이 / 커피포트는 있으나, 다른 전기제품 반입 불가",
      ],
    },
    {
      title: "반입금지",
      items: [
        "술, 진공포장되지 않은 음식물, 폭발물 / 독성물질 / 인화성 물질, 도검류, 총기류, 공구류 등",
        "주류 반입은 엄격히 금지 (1병까지는 가능)",
      ],
    },
  ],
};

export const headerData: HeaderData = {
  companyName: "한세계여행사",
  logoPath: "/header/KakaoTalk_20260220_105453762_02 1 (Traced).svg",
  logoDarkPath: "/header/KakaoTalk_20260220_105453762_02 12.png",
  mobileTitle: "상품상세정보",
  navItems: [
    { name: "시설 안내", href: "#intro" },
    { name: "일정표", href: "#schedule" },
    { name: "가격 안내", href: "#pricing" },
    { name: "규정 안내", href: "#trip-summary" },
    { name: "준비물", href: "#checklist" },
  ],
};

export const footerData: FooterData = {
  companyName: "한세계여행사",
  description: "꿈꾸던 크루즈 여행, 에메랄드 프린세스와 함께하세요. 최고의 서비스와 잊지 못할 추억을 약속드립니다.",
  logoPath: "/header/KakaoTalk_20260220_105453762_02 12.png",
  copyright: "© 2026 Emerald Princess Cruise. All rights reserved.",
  phone: "1588-0000",
  email: "contact@cruise.com",
  hours: "평일 09:00 - 18:00",
  address: "서울특별시 중구 세종대로 123",
  quickLinks: [
    { label: "크루즈 소개", href: "#intro" },
    { label: "시설 안내", href: "#facilities" },
    { label: "운항 일정", href: "#schedule" },
    { label: "기항지 관광", href: "#tourist-spots" },
  ],
};

export const mobileBottomBarData: MobileBottomBarData = {
  kakaoTemplate: (adults, children, infants, totalPrice) => {
    const parts: string[] = [];
    if (adults > 0) parts.push(`성인 ${adults}명`);
    if (children > 0) parts.push(`소아 ${children}명`);
    if (infants > 0) parts.push(`유아 ${infants}명`);
    return `${parts.join(", ")}, 총 예상 비용 ${totalPrice} 견적 문의합니다.`;
  },
  phoneNumber: "02-000-0000",
  kakaoUrl: "https://open.kakao.com/",
  businessHours: "평일 09:00 - 18:00",
  calculatorText: "요금 계산기",
  inquiryText: "문의하기",
  inquiryModalTitle: "문의하기",
  copyButtonText: "복사하기",
  copyCompleteText: "복사 완료!",
  kakaoButtonText: "카톡 문의",
  guideText: "일정표 잘 보셨나요? 더 궁금하신 점이나 인원별 상세 견적은 지금 보고 계신 카톡으로 편하게 말씀해 주세요!",
  processTitle: "[예약 프로세스 요약]",
  processFlow: "금액 확인 ➔ 카톡 문의 ➔ 맞춤 상담 ➔ 예약 확정"
};
