"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";
import type {
  TimelineItem,
  ModalData,
  DayScheduleData,
  TouristSpotModal,
  ShoreExcursionModal,
  ShipInfoModal,
  CruiseAtSeaModal,
  InfoModal,
} from "@/data/types";

const { labels } = cruiseData.schedule;

const LocationPin = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer pulse ring */}
    <div className="absolute w-8 h-8 rounded-full bg-blue-400/15 animate-ping" />
    {/* Inner glow */}
    <div className="absolute w-7 h-7 rounded-full bg-blue-500/25 animate-pulse" />
    {/* Pin SVG */}
    <svg width="24" height="30" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-lg">
      <defs>
        <linearGradient id="pinGradient" x1="11" y1="0" x2="11" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path d="M11 0C4.925 0 0 4.925 0 11c0 7.5 11 17 11 17s11-9.5 11-17c0-6.075-4.925-11-11-11z" fill="url(#pinGradient)" />
      <circle cx="11" cy="11" r="4.5" fill="white" />
    </svg>
  </div>
);

const HotelIcon = () => (
  <svg className="w-[22px] h-[22px] inline-block flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="17" rx="1" fill="#9ca3af" />
    <rect x="6" y="7" width="3" height="3" rx="0.5" fill="white" />
    <rect x="10.5" y="7" width="3" height="3" rx="0.5" fill="white" />
    <rect x="15" y="7" width="3" height="3" rx="0.5" fill="white" />
    <rect x="6" y="12" width="3" height="3" rx="0.5" fill="white" />
    <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="white" />
    <rect x="15" y="12" width="3" height="3" rx="0.5" fill="white" />
    <rect x="9.5" y="17" width="5" height="4" rx="0.5" fill="white" />
  </svg>
);

// ─── TimelineItemRenderer ───

const TimelineItemRenderer = ({
  item,
  openModal,
}: {
  item: TimelineItem;
  openModal: (id: string) => void;
}) => {
  const modals = cruiseData.schedule.modals;

  switch (item.type) {
    // ── location-marker ──
    case "location-marker":
      return (
        <li className={`relative flex items-center gap-3 md:py-1${item.extraMarginTop ? " !mt-5 md:!mt-10" : ""}`}>
          <span className="absolute -left-[35px] -translate-x-1/2 scale-90 md:scale-100">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">{item.label}</span>
        </li>
      );

    // ── text ──
    case "text":
      return (
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">
              {item.time ? `[${item.time}] ` : ""}
              {item.text.includes("\n") ? (
                <span className="inline">
                  {item.text.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br />}
                      {idx === 0 ? <span className="text-gray-800">{line}</span> : line}
                    </span>
                  ))}
                </span>
              ) : (
                item.text
              )}
            </span>
            {item.details && item.details.length > 0 && (
              <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
                {item.details.map((d, i) => (
                  <p key={i}>{"\u25A3"} {d}</p>
                ))}
              </div>
            )}
            {item.warning && (
              <p className="mt-2 text-red-500">
                {"\u203B"} {item.warning}
              </p>
            )}
          </div>
        </li>
      );

    // ── tourist-spot ──
    case "tourist-spot": {
      return (
        <>
          {/* Desktop */}
          <li className="relative hidden md:block md:pt-4 md:pb-4">
            <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
            <div className="border border-gray-300 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
                <h4 className="text-base text-gray-900">{item.title}</h4>
                <button
                  onClick={() => openModal(item.modalId)}
                  className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
                >
                  {labels.viewDetails}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 px-5 pt-5">
                {item.images.map((src, i) => (
                  <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img src={src} alt={`${item.shortTitle} 관광${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
                {item.description.split("\n").map((para, i) => (
                  <p key={i} className={i === 0 ? "text-gray-800" : ""}>{para}</p>
                ))}
              </div>
            </div>
          </li>
          {/* Mobile */}
          <li className="relative md:hidden pt-1 pb-1">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-gray-300" />
            <button
              onClick={() => openModal(item.modalId)}
              className="w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
            >
              <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                <img src={item.images[0]} alt={item.shortTitle} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-gray-500">{item.mobileLabel || labels.defaultTouristLocation}</span>
                <p className="text-base font-bold text-gray-900 mt-0.5">{item.mobileSublabel || item.shortTitle}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
            </button>
          </li>
        </>
      );
    }

    // ── shore-excursion ──
    case "shore-excursion": {
      const modal = modals.find((m) => m.id === item.modalId) as ShoreExcursionModal | undefined;
      return (
        <>
          {/* Desktop */}
          <li className="relative hidden md:block md:pt-4 md:pb-4">
            <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
            <div className="border border-gray-300 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
                <h4 className="text-base font-semibold text-gray-900">{"\u2693"} {item.title}</h4>
                <button
                  onClick={() => openModal(item.modalId)}
                  className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
                >
                  상세보기
                </button>
              </div>
              {modal && (
                <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
                  <p>
                    {modal.intro.split("영어 가이드").map((part, idx) =>
                      idx === 0 ? (
                        <span key={idx}>
                          {part}
                          <span className="font-semibold text-gray-800">영어 가이드</span>
                        </span>
                      ) : (
                        <span key={idx}>{part}</span>
                      )
                    )}
                  </p>
                  {modal.tours.map((tour, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-gray-800">
                        {idx + 1}. {tour.name}
                      </p>
                      <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                        <li>투어 코드: {tour.tourCode}</li>
                        <li>예상 소요 시간: {tour.duration}</li>
                        <li>예상 비용: {tour.price}</li>
                        <li>핵심 포인트: {tour.highlight}</li>
                        {tour.note && <li className="text-gray-500">참고 사항: {tour.note}</li>}
                      </ul>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-800">{"\uD83D\uDCA1"} 기항지 투어 예약 시 유의사항</p>
                    <ul className="mt-2 ml-4 list-disc space-y-1.5">
                      {modal.notices.map((notice, idx) => (
                        <li key={idx}>{notice}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </li>
          {/* Mobile */}
          <li className="relative md:hidden pt-1 pb-1">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-gray-300" />
            <button
              onClick={() => openModal(item.modalId)}
              className="w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
            >
              <div className="w-16 aspect-[4/3] bg-blue-50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{"\u2693"}</span>
              </div>
              <div className="flex-1">
                <span className="text-xs text-gray-500">{item.mobileLabel || labels.defaultTourLabel}</span>
                <p className="text-base font-bold text-gray-900 mt-0.5">{item.mobileSublabel || labels.defaultTourSublabel}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
            </button>
          </li>
        </>
      );
    }

    // ── info-card ──
    case "info-card": {
      return (
        <>
          {/* Desktop */}
          <li className="relative hidden md:block md:pt-4 md:pb-4">
            <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
            <div className="border border-gray-300 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200">
                <h4 className="text-base font-semibold text-gray-900">{item.emoji} {item.title}</h4>
              </div>
              <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
                {item.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    <p className="font-semibold text-gray-800">{section.heading}</p>
                    <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                      {section.items.map((listItem, lIdx) => (
                        <li key={lIdx} className={listItem.isWarning ? "text-red-500" : ""}>
                          {listItem.isWarning && "\u26A0\uFE0F "}
                          {listItem.bold && (
                            <span className={`font-semibold ${listItem.isWarning ? "" : "text-gray-700"}`}>{listItem.bold} </span>
                          )}
                          {listItem.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
          {/* Mobile */}
          <li className="relative md:hidden pt-1 pb-1">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-gray-300" />
            <button
              onClick={() => openModal(item.modalId)}
              className="w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
            >
              <div className="w-16 aspect-[4/3] bg-amber-50 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <div className="flex-1">
                <span className="text-xs text-gray-500">{item.mobileLabel}</span>
                <p className="text-base font-bold text-gray-900 mt-0.5">{item.mobileSublabel}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
            </button>
          </li>
        </>
      );
    }

    // ── cruise-at-sea ──
    case "cruise-at-sea": {
      return (
        <>
          {/* Desktop */}
          <li className="relative hidden md:block md:pt-4 md:pb-4">
            <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
            <div className="border border-gray-300 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
                <h4 className="text-base text-gray-900">{"\uD83D\uDEA2"} {item.title}</h4>
                <button
                  onClick={() => openModal(item.modalId)}
                  className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
                >
                  상세보기
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 px-5 pt-5">
                {item.images.map((src, i) => (
                  <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img src={src} alt={`크루즈 시설 ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
                <p className="text-gray-800">{item.description}</p>
                {item.bulletPoints && item.bulletPoints.length > 0 && (
                  <ul className="ml-4 list-disc space-y-1">
                    {item.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {item.closingText && <p>{item.closingText}</p>}
              </div>
            </div>
          </li>
          {/* Mobile */}
          <li className="relative md:hidden pt-1 pb-1">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-gray-300" />
            <button
              onClick={() => openModal(item.modalId)}
              className="w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
            >
              <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                <img src={item.images[0]} alt="크루즈 시설" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-gray-500">{item.mobileLabel || labels.defaultSeaLabel}</span>
                <p className="text-base font-bold text-gray-900 mt-0.5">{item.mobileSublabel || labels.defaultSeaSublabel}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
            </button>
          </li>
        </>
      );
    }

    // ── meal ──
    case "meal":
      return (
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">{item.text}</span>
        </li>
      );

    // ── hotel ──
    case "hotel":
      return (
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700 inline-flex items-center gap-1.5">
              <HotelIcon />
              호텔: {item.name}
            </span>
            {item.note && (
              <p className="mt-2 text-base text-gray-500">{item.note}</p>
            )}
          </div>
        </li>
      );

    // ── departure-notice ──
    case "departure-notice":
      return (
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">
              {item.time ? `[${item.time}] ` : ""}
              {item.text}
            </span>
            {item.details && item.details.length > 0 && (
              <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
                {item.details.map((d, i) => (
                  <p key={i}>{"\u25A3"} {d}</p>
                ))}
              </div>
            )}
            {item.warning && (
              <p className="mt-2 text-red-500">
                {"\u203B"} {item.warning}
              </p>
            )}
          </div>
        </li>
      );

    // ── closing-message ──
    case "closing-message":
      return (
        <li className="relative flex items-start gap-3 md:!mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-blue-400" />
          <span className="text-base text-gray-800">{item.text}</span>
        </li>
      );

    default:
      return null;
  }
};

// ─── ModalRenderer ───

const ModalRenderer = ({
  activeModal,
  onClose,
}: {
  activeModal: string | null;
  onClose: () => void;
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const dragOffsetRef = useRef(0);
  const isTouching = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const modals = cruiseData.schedule.modals;
  const modal = activeModal ? modals.find((m) => m.id === activeModal) : null;

  const activeImages: string[] =
    modal && "images" in modal ? (modal as { images: string[] }).images : [];

  useEffect(() => {
    setCarouselIndex(0);
    setIsTransitioning(true);
  }, [activeModal]);

  const startAutoSlide = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCarouselIndex((prev) => prev + 1);
    }, 2500);
  }, []);

  const stopAutoSlide = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (activeModal && activeImages.length > 1) {
      startAutoSlide();
      return () => {
        stopAutoSlide();
      };
    }
    return () => { };
  }, [activeModal, activeImages.length, startAutoSlide, stopAutoSlide]);

  const prevImage = () =>
    setCarouselIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  const nextImage = () => {
    setIsTransitioning(true);
    setCarouselIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (carouselIndex >= activeImages.length) {
      setIsTransitioning(false);
      setCarouselIndex(0);
    }
  };

  const applyDragTransform = useCallback((offset: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.style.transform = `translateX(calc(-${carouselRef.current.dataset.index ?? "0"}00% + ${offset}px))`;
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    isTouching.current = true;
    touchStartX.current = e.touches[0].clientX;
    dragOffsetRef.current = 0;
    setIsTransitioning(false);
    stopAutoSlide();
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching.current) return;
    dragOffsetRef.current = e.touches[0].clientX - touchStartX.current;
    applyDragTransform(dragOffsetRef.current);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isTouching.current) return;
    isTouching.current = false;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    dragOffsetRef.current = 0;
    setIsTransitioning(true);
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
    startAutoSlide();
  };

  if (!activeModal || !modal) return null;

  const closeModal = onClose;

  // Determine modal title prefix based on type
  const getModalTitle = () => {
    if (modal.type === "shore-excursion") return `\u2693 ${modal.title}`;
    if (modal.type === "cruise-at-sea") return `\uD83D\uDEA2 ${modal.title}`;
    if (modal.type === "info") return `\uD83D\uDCE2 ${modal.title}`;
    return modal.title;
  };

  // ── Image Carousel Component (shared by tourist-spot, ship-info, cruise-at-sea) ──
  const renderCarousel = (altPrefix: string) => (
    <div
      className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={carouselRef}
        className={`flex h-full ${isTransitioning ? "transition-transform duration-300 ease-in-out" : ""}`}
        data-index={carouselIndex}
        style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {activeImages.map((src, i) => (
          <img key={i} src={src} alt={`${altPrefix} ${i + 1}`} className="w-full h-full object-cover flex-shrink-0" />
        ))}
        {activeImages.length > 0 && (
          <img src={activeImages[0]} alt={`${altPrefix} 1`} className="w-full h-full object-cover flex-shrink-0" />
        )}
      </div>
      {activeImages.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
            {(carouselIndex % activeImages.length) + 1}/{activeImages.length}
          </div>
        </>
      )}
    </div>
  );

  // ── Info Table (shared by tourist-spot, ship-info, cruise-at-sea) ──
  const renderInfoTable = (
    table: { label: string; value: string }[],
    googleMapQuery?: string
  ) => (
    <table className="w-full mt-6 border-t border-gray-200 text-sm">
      <tbody>
        {table.map((row, i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className={`py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 ${i === 0 ? "w-20 md:w-28" : ""} text-center`}>
              {row.label}
            </td>
            <td className="py-3 px-3 md:px-4 text-gray-600">
              {row.label === "\uC8FC\uC18C" && googleMapQuery ? (
                <a
                  href={`https://maps.google.com/?q=${googleMapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://maps.google.com/favicon.ico"
                    alt="Google Maps"
                    className="w-6 h-6 inline-block"
                  />
                </a>
              ) : (
                row.value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // ── Render modal body based on type ──
  const renderModalBody = () => {
    switch (modal.type) {
      case "tourist-spot": {
        const m = modal as TouristSpotModal;
        return (
          <div className="p-4 pb-28 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {renderCarousel(m.title)}
              <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                {m.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
            {renderInfoTable(m.infoTable, m.googleMapQuery)}
            {m.googleMapEmbed && (
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src={m.googleMapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${m.title} 지도`}
                />
              </div>
            )}
          </div>
        );
      }

      case "shore-excursion": {
        const m = modal as ShoreExcursionModal;
        return (
          <div className="p-4 pb-28 md:p-6">
            <div className="text-base text-gray-700 leading-relaxed space-y-5">
              <p>
                {m.intro.split("영어 가이드").map((part, idx) =>
                  idx === 0 ? (
                    <span key={idx}>
                      {part}
                      <span className="font-semibold text-gray-800">영어 가이드</span>
                    </span>
                  ) : (
                    <span key={idx}>{part}</span>
                  )
                )}
              </p>
              {m.tours.map((tour, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-gray-800">
                    {idx + 1}. {tour.name}
                  </p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: {tour.tourCode}</li>
                    <li>예상 소요 시간: {tour.duration}</li>
                    <li>예상 비용: {tour.price}</li>
                    <li>핵심 포인트: {tour.highlight}</li>
                    {tour.note && <li className="text-gray-500">참고 사항: {tour.note}</li>}
                  </ul>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{"\uD83D\uDCA1"} 기항지 투어 예약 시 유의사항</p>
                <ul className="mt-2 ml-4 list-disc space-y-1.5">
                  {m.notices.map((notice, idx) => (
                    <li key={idx}>{notice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }

      case "ship-info": {
        const m = modal as ShipInfoModal;
        return (
          <div className="p-4 pb-28 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {renderCarousel(m.title)}
              <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                {m.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
            </div>
            {renderInfoTable(m.infoTable)}
          </div>
        );
      }

      case "cruise-at-sea": {
        const m = modal as CruiseAtSeaModal;
        return (
          <div className="p-4 pb-28 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {renderCarousel(m.title)}
              <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                {m.descriptions.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
                {m.bulletPoints && m.bulletPoints.length > 0 && (
                  <ul className="ml-4 list-disc space-y-1">
                    {m.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {m.closingText && <p>{m.closingText}</p>}
              </div>
            </div>
            {renderInfoTable(m.infoTable)}
          </div>
        );
      }

      case "info": {
        const m = modal as InfoModal;
        return (
          <div className="p-4 pb-28 md:p-6">
            <div className="text-sm text-gray-700 leading-relaxed space-y-5">
              {m.sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <p className="font-semibold text-gray-800">{section.heading}</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    {section.items.map((listItem, lIdx) => (
                      <li key={lIdx} className={listItem.isWarning ? "text-red-500" : ""}>
                        {listItem.isWarning && "\u26A0\uFE0F "}
                        {listItem.bold && (
                          <span className={`font-semibold ${listItem.isWarning ? "" : "text-gray-700"}`}>
                            {listItem.bold}{" "}
                          </span>
                        )}
                        {listItem.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
      <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <h3 className="text-base md:text-lg font-bold">{getModalTitle()}</h3>
          <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        {renderModalBody()}
      </div>
    </div>
  );
};

// ─── dayContent helper ───

const dayContent = (items: TimelineItem[], openModal: (id: string) => void) => {
  const nonMealItems = items.filter((i) => i.type !== "meal");
  const mealItems = items.filter((i) => i.type === "meal");

  return (
    <div className="relative pl-10">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-3 md:space-y-5 text-left">
        {nonMealItems.map((item, i) => (
          <TimelineItemRenderer key={i} item={item} openModal={openModal} />
        ))}
        {mealItems.map((item, i) => (
          <TimelineItemRenderer key={`meal-${i}`} item={item} openModal={openModal} />
        ))}
      </ul>
    </div>
  );
};

// ─── Main Timeline Component ───

export const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const days = cruiseData.schedule.days;
  const [openDays, setOpenDays] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOpenDays(new Set(days.map((d) => d.day)));
    }
  }, []);

  const mobileBtnAnchorRef = useRef<HTMLParagraphElement>(null);
  const mobileBtnRef = useRef<HTMLDivElement>(null);
  const accordionWrapperRef = useRef<HTMLDivElement>(null);
  const isAllDaysOpen = days.every((d) => openDays.has(d.day));

  const toggleAllMobile = () => {
    const allDays = days.map((d) => d.day);
    if (isAllDaysOpen) {
      setOpenDays(new Set());
      const headerHeight = 56;
      const offset = 12;
      const top = (sectionRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - headerHeight - offset;
      window.scrollTo({ top, behavior: "instant" });
    } else {
      setOpenDays(new Set(allDays));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;
      const anchor = mobileBtnAnchorRef.current;
      const section = sectionRef.current;
      const btn = mobileBtnRef.current;
      const wrapper = accordionWrapperRef.current;
      if (!anchor || !section || !btn || !wrapper) return;

      const stickyTop = 68;
      const btnHeight = btn.offsetHeight;
      const anchorTop = anchor.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (anchorTop > stickyTop) {
        btn.style.position = "fixed";
        btn.style.top = `${stickyTop}px`;
        btn.style.right = "16px";
        btn.style.bottom = "auto";
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
      } else if (sectionBottom > stickyTop + btnHeight) {
        btn.style.position = "fixed";
        btn.style.top = `${stickyTop}px`;
        btn.style.right = "16px";
        btn.style.bottom = "auto";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      } else {
        btn.style.position = "absolute";
        btn.style.top = "auto";
        btn.style.right = "16px";
        btn.style.bottom = "0";
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeModal, setActiveModal] = useState<string | null>(null);

  const toggleDay = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
      } else {
        next.add(day);
      }
      return next;
    });
  };

  const openModal = (type: string) => {
    setActiveModal(type);
    history.pushState({ modal: "timeline" }, "");
  };

  const closeModal = () => {
    if (activeModal !== null) {
      setActiveModal(null);
      history.back();
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setActiveModal(null);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const scheduleData = days.map((day) => ({
    ...day,
    content: dayContent(day.items, openModal),
  }));

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-0 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
          {labels.title}
        </h2>
        <p
          ref={mobileBtnAnchorRef}
          className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600"
        >
          {cruiseData.schedule.dateRange} ({cruiseData.schedule.durationLabel})
        </p>

        {/* Accordion Section */}
        <div ref={accordionWrapperRef} className="mt-6 md:mt-10 max-w-5xl mx-auto relative">
          {/* Desktop toggle all button */}
          <button
            onClick={() => {
              const allDays = days.map((d) => d.day);
              const allOpen = allDays.every((day) => openDays.has(day));
              if (allOpen) {
                setOpenDays(new Set());
              } else {
                setOpenDays(new Set(allDays));
              }
            }}
            className="absolute -top-8 right-0 hidden md:flex text-sm md:text-base text-gray-500 hover:text-gray-700 transition-colors cursor-pointer items-center gap-1"
          >
            {days.every((d) => openDays.has(d.day)) ? labels.collapseAll : labels.expandAll}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${days.every((d) => openDays.has(d.day)) ? "rotate-180" : ""
                }`}
            />
          </button>
          {/* Mobile toggle all button */}
          <div
            ref={mobileBtnRef}
            className="md:hidden z-10"
            style={{
              position: "fixed",
              top: "68px",
              right: "16px",
              opacity: 0,
              pointerEvents: "none",
            }}
          >
            <button
              onClick={toggleAllMobile}
              className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1.5 cursor-pointer flex items-center gap-1"
            >
              {isAllDaysOpen ? labels.collapseAll : labels.expandAll}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isAllDaysOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>
          <div ref={sectionRef} className="space-y-3 md:space-y-6">
            {scheduleData.map((item) => (
              <div
                key={item.day}
                className="border-y border-gray-200 md:border md:border-gray-200 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleDay(item.day)}
                  className="w-full flex items-center hover:bg-gray-50 transition-colors"
                >
                  {/* Left Side - Day & Date */}
                  <div className="bg-gray-600 text-white px-4 md:px-6 py-3 md:py-4 flex flex-col items-center md:items-start min-w-[80px] md:min-w-[160px] justify-center">
                    <span className="text-base md:text-lg font-medium">{item.day}{labels.dayLabel}</span>
                    <span className="hidden md:block text-base mt-1 opacity-90">{item.date}</span>
                  </div>

                  {/* Right Side - Location & Description */}
                  <div className="flex-1 bg-gray-100 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                    {/* Mobile: date + location */}
                    <span className="md:hidden text-base font-medium text-gray-700">
                      {item.date} {item.location}
                    </span>
                    {/* Desktop: location + description */}
                    <div className="hidden md:block text-left">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">{item.location}</h3>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ml-4 flex-shrink-0 ${openDays.has(item.day) ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {openDays.has(item.day) && (
                  <div className="bg-white px-6 py-6 border-t border-gray-200">
                    <div className="text-gray-700">
                      {item.content || "상세 일정 콘텐츠가 여기에 표시됩니다."}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ModalRenderer activeModal={activeModal} onClose={closeModal} />
    </div>
  );
};
