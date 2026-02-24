import type { TripInfoData } from '../types';

export const tripInfoData: TripInfoData = {
  title: "여행 주요 일정",
  subtitle: "로마에서 출발하는 서부 지중해 9박 10일의 항해",
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
        airline: "티웨이항공",
        flightCode: "",
        departureTime: "09:30",
        departureDate: "06/06 (토)",
        arrivalTime: "19:15",
        arrivalDate: "06/06 (토)",
        duration: "총 13시간 40분 소요",
      },
    ],
    inbound: [
      {
        airline: "티웨이항공",
        flightCode: "",
        departureTime: "21:15",
        departureDate: "06/14 (일)",
        arrivalTime: "16:10",
        arrivalDate: "06/15 (월)",
        duration: "총 11시간 55분 소요",
      },
    ],
  },
  routeCities: ["로마", "팔레르모", "해상", "이비자", "바르셀로나", "마르세유", "제노아", "로마"],
  reservationStatus: "출발확정",
  reservationCount: "16",
  escortInfo: "인솔자 1명이 동행합니다.",
  meetingPlace: "인천공항 제1터미널",
};
