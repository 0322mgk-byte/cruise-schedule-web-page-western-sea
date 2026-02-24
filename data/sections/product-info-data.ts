import type { ProductInfoData } from '../types';

export const productInfoData: ProductInfoData = {
  labels: {
    includedTitle: "포함사항",
    excludedTitle: "불포함사항",
  },
  title: "상품 안내",
  subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
  includedItems: [
    "티웨이항공 직항 왕복 항공료(이코노미), 공항-터미널 픽드랍",
    "MSC 씨뷰 초대형 럭셔리 크루즈 (인사이드, 오션뷰, 발코니)",
    "로마 1박 호텔 (3성급 또는 4성급 예정)",
    "로마, 바르셀로나, 마르세유 핵심 관광 투어 (입장료·전용 차량·한국어 가이드 등)",
    "크루즈 인솔자 동행, 1억원 여행자보험",
  ],
  excludedItems: [
    "선상팁 (선내 봉사료): 성인 98유로 / 소아 49유로 (금액 변동 가능, 하선 시 결제)",
    "개인경비 및 매너팁",
    "선상 내 와이파이 이용료",
    "주류 비용",
    "선내 유료 레스토랑 및 시설 이용료",
    "일정표상 자유식사",
    "현지 진행비(인솔자/기사/가이드): 110유로",
  ],
};
