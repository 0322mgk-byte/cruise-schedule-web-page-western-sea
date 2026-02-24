"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, ChevronUp, ChevronDown, X, Copy, MessageCircle } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

const {
    phoneNumber, kakaoUrl, businessHours,
    calculatorText, inquiryText, inquiryModalTitle,
    copyButtonText, copyCompleteText, kakaoButtonText,
    guideText, processTitle, processFlow, kakaoTemplate
} = cruiseData.mobileBottomBar;
const ROOM_TABS = cruiseData.pricing.roomTabs.map((tab) => ({
    key: tab.key,
    label: tab.label,
    price: Number(tab.prices.adult.replace(/,/g, "")),
}));

export default function MobileBottomBar() {
    const [expanded, setExpanded] = useState(false);
    const [showInquiry, setShowInquiry] = useState(false);
    const [copied, setCopied] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [activeRoom, setActiveRoom] = useState<string>("inside");
    const touchStartY = useRef<number | null>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = panelRef.current;
        if (!el) return;

        const onTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };
        const onTouchMove = (e: TouchEvent) => {
            if (touchStartY.current !== null && expanded) {
                const diff = e.touches[0].clientY - touchStartY.current;
                if (diff > 0) e.preventDefault();
            }
        };
        const onTouchEnd = (e: TouchEvent) => {
            if (touchStartY.current !== null && expanded) {
                const diff = e.changedTouches[0].clientY - touchStartY.current;
                if (diff > 40) setExpanded(false);
            }
            touchStartY.current = null;
        };

        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchmove", onTouchMove, { passive: false });
        el.addEventListener("touchend", onTouchEnd, { passive: true });
        return () => {
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }, [expanded]);

    const currentRoom = ROOM_TABS.find((t) => t.key === activeRoom)!;
    const adultPrice = currentRoom.price;
    const childPrice = currentRoom.price;
    const infantPrice = currentRoom.price;

    const totalPrice = adults * adultPrice + children * childPrice + infants * infantPrice;

    const formatPrice = (price: number) =>
        price.toLocaleString("ko-KR") + "원";

    const getInquiryText = () => {
        return kakaoTemplate(adults, children, infants, formatPrice(totalPrice));
    };

    const openInquiry = () => {
        setShowInquiry(true);
        history.pushState({ modal: "inquiry" }, "");
    };
    const closeInquiry = () => {
        if (showInquiry) {
            setShowInquiry(false);
            history.back();
        }
    };

    const handleCopy = async () => {
        const text = getInquiryText();
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const onPopState = () => setShowInquiry(false);
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useEffect(() => {
        if (showInquiry) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [showInquiry]);

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            {/* 패널 (뒤 레이어) - 탭 포함 */}
            <div
                className="absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out"
                style={{
                    filter: "drop-shadow(0 -3px 6px rgba(0,0,0,0.12))",
                    transform: expanded
                        ? "translateY(-53px)"
                        : "translateY(calc(100% - 53px - 34px))",
                }}
            >
                {/* 탭 + 패널 = 하나의 도형 */}
                <div className="relative">
                    {/* 회색 외곽선 레이어 */}
                    <div
                        className="absolute inset-0 bg-gray-300"
                        style={{
                            clipPath: "polygon(0 24px, calc(50% - 31px) 24px, calc(50% - 21.7px) 0, calc(50% + 21.7px) 0, calc(50% + 31px) 24px, 100% 24px, 100% 100%, 0 100%)",
                        }}
                    />
                    {/* 흰색 채우기 레이어 (1px 안쪽) */}
                    <div
                        className="absolute bg-white"
                        style={{
                            top: "1px", left: "1px", right: "1px", bottom: "0",
                            clipPath: "polygon(0 24px, calc(50% - 30px) 24px, calc(50% - 30px) 23px, calc(50% - 20.7px) 0, calc(50% + 20.7px) 0, calc(50% + 30px) 23px, calc(50% + 30px) 24px, 100% 24px, 100% 100%, 0 100%)",
                        }}
                    />
                    {/* 하단바 뒤까지 연장 */}
                    <div className="absolute left-0 right-0 top-full h-[53px] bg-white z-10" />
                    {/* 콘텐츠 */}
                    <div
                        ref={panelRef}
                        className="relative z-10"
                        style={{ paddingTop: "24px" }}
                    >
                        {/* 탭 버튼 */}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center"
                            style={{ width: "62px", height: "24px" }}
                        >
                            {expanded ? (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                        <div className="px-7 pt-7 pb-6">
                            <div className="flex items-center justify-center gap-1.5 mb-4">
                                {ROOM_TABS.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveRoom(tab.key)}
                                        className={`px-3.5 py-1.5 w-20 flex-shrink-0 text-sm font-semibold transition-colors border ${activeRoom === tab.key
                                            ? "bg-[#0054a0] text-white border-transparent"
                                            : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* 성인 */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <div className="text-base text-gray-700">성인 <span className="text-sm">(만 12세 이상)</span></div>
                                    <div className="text-base font-normal text-gray-900 mt-0.5">{formatPrice(adults * adultPrice)}</div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setAdults(Math.max(1, adults - 1))}
                                        className="w-10 h-11 border border-gray-300 flex items-center justify-center text-lg text-gray-500"
                                    >
                                        −
                                    </button>
                                    <span className="w-10 h-11 border-t border-b border-gray-300 flex items-center justify-center text-base font-bold">
                                        {adults}
                                    </span>
                                    <button
                                        onClick={() => setAdults(adults + 1)}
                                        className="w-10 h-11 border border-gray-300 flex items-center justify-center text-lg text-gray-800"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* 아동 */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <div className="text-base text-gray-700">소아 <span className="text-sm">(만 12세 미만)</span></div>
                                    <div className="text-base font-normal text-gray-900 mt-0.5">{formatPrice(childPrice)}</div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setChildren(Math.max(0, children - 1))}
                                        className="w-10 h-11 border border-gray-300 flex items-center justify-center text-lg text-gray-500"
                                    >
                                        −
                                    </button>
                                    <span className="w-10 h-11 border-t border-b border-gray-300 flex items-center justify-center text-base font-bold">
                                        {children}
                                    </span>
                                    <button
                                        onClick={() => setChildren(children + 1)}
                                        className="w-10 h-11 border border-gray-300 flex items-center justify-center text-lg text-gray-800"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* 유아 */}
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <div className="text-base text-gray-700">유아 <span className="text-sm">(만 2세 미만)</span></div>
                                    <div className="text-base font-normal text-gray-900 mt-0.5">{formatPrice(infantPrice)}</div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setInfants(Math.max(0, infants - 1))}
                                        className="w-10 h-11 border border-gray-300 flex items-center justify-center text-lg text-gray-500"
                                    >
                                        −
                                    </button>
                                    <span className="w-10 h-11 border-t border-b border-gray-300 flex items-center justify-center text-base font-bold">
                                        {infants}
                                    </span>
                                    <button
                                        onClick={() => setInfants(infants + 1)}
                                        className="w-10 h-11 border border-gray-300 flex items-center justify-center text-lg text-gray-800"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* 구분선 */}
                            <div className="border-t border-gray-200 mt-2 mb-3" />

                            {/* 총계 */}
                            <div className="flex items-start justify-between">
                                <div className="text-base font-bold text-gray-900">총 결제 예정 금액</div>
                                <div className="text-right">
                                    <div className="text-xl font-bold text-gray-900">{formatPrice(totalPrice)}</div>
                                    <div className="text-sm text-gray-500 mt-0.5">유류할증료&제세공과금 포함</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 바 (앞 레이어) */}
            <div className="relative z-20">
                <div className="flex items-stretch h-12 border border-[#003d75]">
                    <a
                        href={`tel:${phoneNumber}`}
                        className="flex items-center justify-center w-12 bg-white border-r border-[#003d75]"
                    >
                        <Phone className="w-5 h-5 text-[#0054a0]" />
                    </a>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex-1 flex items-center justify-center bg-white text-[#0054a0] font-bold text-sm border-r border-[#003d75]"
                    >
                        {calculatorText}
                    </button>
                    <button
                        onClick={openInquiry}
                        className="flex-1 flex items-center justify-center bg-[#0054a0] text-white font-bold text-sm"
                    >
                        {inquiryText}
                    </button>
                </div>
            </div>

            {/* 문의하기 팝업 */}
            {showInquiry && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={closeInquiry} />
                    <div className="relative z-10 bg-white w-full max-h-[80vh] overflow-y-auto">
                        {/* 헤더 */}
                        <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 py-2.5">
                            <h3 className="text-sm font-bold">{inquiryModalTitle}</h3>
                            <button onClick={closeInquiry} className="hover:bg-[#004080] p-1 transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* 내용 */}
                        <div className="px-4 py-4">
                            {/* 견적 문의 텍스트 */}
                            <div className="bg-gray-50 border border-gray-200 p-3">
                                <p className="text-sm text-gray-900 leading-relaxed">{getInquiryText()}</p>
                            </div>

                            {/* 버튼 2개 */}
                            <div className="flex gap-2.5 mt-3">
                                <button
                                    onClick={handleCopy}
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-gray-300 bg-white text-gray-700 font-medium text-base rounded-md hover:bg-gray-50 transition-colors"
                                >
                                    <Copy className="w-3.5 h-3.5" />
                                    {copied ? copyCompleteText : copyButtonText}
                                </button>
                                <a
                                    href={kakaoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#FEE500] text-[#391B1B] font-medium text-base rounded-md hover:bg-[#F5DC00] transition-colors"
                                >
                                    <img src="/bottom_bar/image 3.svg" alt="카카오톡" className="w-5 h-5" />
                                    {kakaoButtonText}
                                </a>
                            </div>

                            {/* 구분선 */}
                            <div className="border-t border-gray-200 my-3" />

                            {/* 안내 문구 */}
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {guideText}
                            </p>

                            {/* 구분선 */}
                            <div className="border-t border-gray-200 my-3" />

                            {/* 예약 프로세스 */}
                            <div>
                                <p className="text-sm font-bold text-gray-900 mb-1">{processTitle}</p>
                                <p className="text-sm text-gray-600">{processFlow}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
