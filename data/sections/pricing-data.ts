import type { PricingData } from '../types';

export const pricingData: PricingData = {
  labels: {
    title: "상품 가격",
    roomSelect: "객실 선택",
    adult: "성인",
    adultAge: "(만 12세 이상)",
    child: "소아",
    childAge: "(만 12세 미만)",
    infant: "유아",
    infantAge: "(만 2세 미만)",
    totalPrice: "총 결제 예정 금액",
    surchargeNotice: "유류할증료&제세공과금 포함",
  },
  roomTabs: [
    { key: "inside", label: "인사이드", prices: { adult: "5,790,000", child: "5,790,000", infant: "5,790,000" } },
    { key: "oceanview", label: "오션뷰", prices: { adult: "5,990,000", child: "5,990,000", infant: "5,990,000" } },
    { key: "balcony", label: "발코니", prices: { adult: "6,490,000", child: "6,490,000", infant: "6,490,000" } },
  ],
  personOptions: [0, 1, 2, 3, 4],
  fuelSurcharge: 123000,
  fuelSurchargeText: "유류할증료 123,000원/제세공과금 0원 포함",
  localGuideFee: { amount: 110, currency: "EUR" },
  crewTip: {
    adult: { amount: 77, currency: "EUR" },
    child: { amount: 38.5, currency: "EUR" },
  },
  notices: [
    "유류할증료 123,000원/제세공과금 0원 포함",
    "유류할증료는 유가와 환율에 따라 수시로 변동 될 수 있습니다.",
  ],
  infoSections: [
    {
      title: "객실 이용 안내",
      items: [
        "모든 상품가는 성인 2인 1실 투숙 기준입니다.",
        "1인 객실 사용 시: 독실 추가 요금이 발생합니다. (선실 등급별 상이 / 별도 문의)",
        "3~4인실(다인실) 사용 시: 실시간 잔여 객실 확인이 필요하며, 취소 시 선사 규정에 따른 별도 페널티가 발생할 수 있습니다.",
      ],
    },
    {
      title: "소아 및 유아 안내",
      items: [
        "소아/유아 요금은 성인 2인과 같은 방을 사용하는 조건입니다. (조건 미충족 시 아동 추가 요금 발생)",
        "여행 기간 중 만 2세가 되는 경우 요금 별도 문의",
        "유아는 항공 및 기항지 투어 차량 이용 시 단독 좌석이 배정되지 않습니다.",
      ],
    },
    {
      title: "경비 및 팁(Tip) 안내",
      items: [
        "선내 승무원 경비(필수): 성인 77유로 / 소아 38.5유로",
        "현지 진행비(인솔자/기사/가이드): 110유로",
        "매너 팁: 자율적 의사로 지불하며, 미지급에 따른 불이익은 전혀 없습니다.",
      ],
    },
    {
      title: "요금 변동 및 기타",
      items: [
        "유류할증료 및 제세공과금은 유가와 환율 변동에 따라 변경될 수 있습니다.",
        "개별 항공권 발권 또는 현지 합류 고객은 일정에 따라 요금이 다르므로 별도 문의 바랍니다.",
      ],
    },
  ],
};
