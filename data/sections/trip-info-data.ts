import type { TripInfoData } from '../types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "밴쿠버에서 알래스카까지 8박 10일의 항해",
  labels: {
    schedule: "여행 일정",
    departKorea: "한국 출발",
    arriveLocal: "현지 도착",
    departLocal: "현지 출발",
    arriveKorea: "한국 도착",
    routeRegion: "여행 지역",
    reservationStatus: "예약 현황",
    reservationCountUnit: "명",
    escort: "인솔자",
    meetingPlace: "미팅 장소",
  },
  flights: {
    outbound: [
      {
        airline: "에어캐나다 or 대한항공",
        flightCode: "AS172",
        departureTime: "17:45",
        departureDate: "08/03 (월)",
        arrivalTime: "11:35",
        arrivalDate: "08/03 (월)",
        duration: "총 9시간 55분 소요",
      },
    ],
    inbound: [
      {
        airline: "에어캐나다 or 대한항공",
        flightCode: "AS172",
        departureTime: "00:00",
        departureDate: "08/11 (화)",
        arrivalTime: "00:00",
        arrivalDate: "08/12 (수)",
        duration: "총 11시간 35분 소요",
      },
    ],
  },
  routeCities: ["밴쿠버", "해상", "주노", "스캐그웨이", "엔디캇암", "캐치칸", "해상", "밴쿠버"],
  reservationStatus: "출발확정",
  reservationCount: "16",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천공항 제2터미널",
};
