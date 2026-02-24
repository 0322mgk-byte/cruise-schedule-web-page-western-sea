"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

const { labels, roomTabs: ROOM_TABS, personOptions: PERSON_OPTIONS, fuelSurchargeText, notices, infoSections } = cruiseData.pricing;

function parsePrice(s: string) {
    return Number(s.replace(/,/g, ""));
}

function formatPrice(n: number) {
    return n.toLocaleString("ko-KR");
}

export default function Pricing() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState<string>("inside");
    const [counts, setCounts] = useState({ adult: 1, child: 0, infant: 0 });

    const currentRoom = ROOM_TABS.find((t) => t.key === activeTab)!;

    const openModal = () => {
        setShowModal(true);
        history.pushState({ modal: "pricing-info" }, "");
    };
    const closeModal = () => {
        if (showModal) {
            setShowModal(false);
            history.back();
        }
    };

    useEffect(() => {
        const onPopState = () => {
            setShowModal(false);
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [showModal]);

    return (
        <>
            {/* Section 8 - Mobile */}
            <section className="md:hidden py-12 bg-white">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 text-center leading-tight tracking-normal px-5">
                        상품 가격
                    </h2>

                    <div className="mt-6">
                        {/* 칩 셀렉터 (시안 9 스타일) */}
                        <div className="flex items-center gap-2 px-4">
                            <span className="text-sm font-semibold text-gray-700 mr-1">객실 선택</span>
                            {ROOM_TABS.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`px-4 py-2 text-sm font-semibold transition-colors border ${activeTab === tab.key
                                        ? "bg-[#0054a0] text-white border-transparent"
                                        : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* 간격 */}
                        <div className="h-3" />

                        {/* 가격표 블록 */}
                        <div className="border border-gray-300">
                            <table className="w-full text-base">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="bg-gray-50 px-2 py-3 text-center font-semibold text-gray-700 border-r border-gray-300 w-1/3">
                                            <div>{labels.adult}</div>
                                            <div className="text-sm font-normal text-gray-500 mt-0.5">{labels.adultAge}</div>
                                        </th>
                                        <th className="bg-gray-50 px-2 py-3 text-center font-semibold text-gray-700 border-r border-gray-300 w-1/3">
                                            <div>{labels.child}</div>
                                            <div className="text-sm font-normal text-gray-500 mt-0.5">{labels.childAge}</div>
                                        </th>
                                        <th className="bg-gray-50 px-2 py-3 text-center font-semibold text-gray-700 w-1/3">
                                            <div>{labels.infant}</div>
                                            <div className="text-sm font-normal text-gray-500 mt-0.5">{labels.infantAge}</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-2 py-4 text-center border-r border-gray-300">
                                            <div className="font-bold text-[#0054a0] text-base">{currentRoom.prices.adult}</div>
                                        </td>
                                        <td className="px-2 py-4 text-center border-r border-gray-300">
                                            <div className="font-bold text-[#0054a0] text-base">{currentRoom.prices.child}</div>
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            <div className="font-bold text-[#0054a0] text-base">{currentRoom.prices.infant}</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-2 text-sm text-gray-400 text-left px-4">
                            - {fuelSurchargeText}
                        </p>
                    </div>

                    <button
                        onClick={openModal}
                        className="mt-4 mx-4 w-[calc(100%-2rem)] flex items-center justify-center gap-1.5 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        독실료 및 추가요금 안내
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>

                {/* 모바일 추가요금 안내 모달 */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="relative z-10 bg-white w-full h-full overflow-y-auto">
                            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 py-3">
                                <h3 className="text-base font-bold">독실료 및 추가요금 안내</h3>
                                <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-4 pb-28 space-y-6 text-sm text-gray-700 leading-relaxed">
                                {infoSections.map((section, sIdx) => (
                                    <div key={sIdx}>
                                        <h4 className="font-bold text-gray-900 text-base mb-3">{section.title}</h4>
                                        <div className="space-y-2">
                                            {section.items.map((item, iIdx) => (
                                                <p key={iIdx} className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>{item}</span></p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Section 8 - Desktop */}
            <section id="pricing" className="hidden md:block py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                            상품 가격
                        </h2>
                    </div>

                    {(() => {
                        const unitPrice = parsePrice(currentRoom.prices.adult);
                        const rows = [
                            { key: "adult" as const, label: "성인", sub: "만 12세 이상", price: unitPrice },
                            { key: "child" as const, label: "아동", sub: "만 12세 미만", price: unitPrice },
                            { key: "infant" as const, label: "유아", sub: "만 2세 미만", price: unitPrice },
                        ];
                        const grandTotal = rows.reduce((sum, r) => sum + r.price * counts[r.key], 0);

                        return (
                            <div className="mt-10 max-w-5xl mx-auto">
                                {/* 외곽 컨테이너: 좌측 탭+표 + 우측 요약 카드 */}
                                <div className="flex border border-gray-300 shadow-[0_-1px_0_0_black]">
                                    {/* 좌측: 탭 + 가격표 (여백 포함) */}
                                    <div className="flex-1 min-w-0 p-4">
                                        {/* 칩 셀렉터 */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm font-semibold text-gray-700 mr-1">{labels.roomSelect}</span>
                                            {ROOM_TABS.map((tab) => (
                                                <button
                                                    key={tab.key}
                                                    onClick={() => setActiveTab(tab.key)}
                                                    className={`px-5 py-2 text-sm font-semibold transition-colors border ${activeTab === tab.key
                                                        ? "bg-[#0054a0] text-white border-transparent"
                                                        : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>

                                        {/* 가격표 */}
                                        <div className="border border-gray-300">
                                            <table className="w-full text-base">
                                                <thead>
                                                    <tr className="border-b border-gray-300">
                                                        <th className="bg-gray-50 px-3 py-2.5 text-center font-semibold text-gray-700 border-r border-gray-300 w-32">구분</th>
                                                        <th className="bg-gray-50 px-3 py-2.5 text-center font-semibold text-gray-700 border-r border-gray-300 w-18">인원</th>
                                                        <th className="bg-gray-50 px-3 py-2.5 text-center font-semibold text-gray-700 border-r border-gray-300 w-28">기본 상품가</th>
                                                        <th className="bg-gray-50 px-3 py-2.5 text-center font-semibold text-gray-700 w-28">총 상품가</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {rows.map((row, idx) => (
                                                        <tr key={row.key} className={idx < rows.length - 1 ? "border-b border-gray-300" : ""}>
                                                            <td className="px-3 py-2.5 border-r border-gray-300 whitespace-nowrap">
                                                                <span className="font-semibold text-gray-700">{row.label}</span>
                                                                <span className="text-sm text-gray-500 ml-1">({row.sub})</span>
                                                            </td>
                                                            <td className="px-3 py-2.5 text-center border-r border-gray-300">
                                                                <select
                                                                    value={counts[row.key]}
                                                                    onChange={(e) => setCounts({ ...counts, [row.key]: Number(e.target.value) })}
                                                                    className="border border-gray-300 px-2 py-1 text-sm bg-white text-gray-700 cursor-pointer"
                                                                >
                                                                    {PERSON_OPTIONS.map((n) => (
                                                                        <option key={n} value={n}>{n}명</option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                            <td className="px-3 py-2.5 text-center border-r border-gray-300 text-gray-700">
                                                                {formatPrice(row.price)}원
                                                            </td>
                                                            <td className="px-3 py-2.5 text-center">
                                                                <span className={`font-bold ${counts[row.key] > 0 ? "text-[#0054a0]" : "text-gray-400"}`}>
                                                                    {counts[row.key] > 0 ? `${formatPrice(row.price * counts[row.key])}원` : "0원"}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* 우측: 요약 카드 */}
                                    <div className="w-[26rem] shrink-0 border-l border-gray-300 flex flex-col">
                                        <div className="flex-1 flex flex-col items-end justify-center px-12 py-6">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-lg text-gray-700">{labels.totalPrice}</span>
                                                <span className="text-4xl font-bold text-[#0054a0]">
                                                    {formatPrice(grandTotal)}
                                                    <span className="text-xl ml-0.5 text-gray-700 font-normal">원</span>
                                                </span>
                                            </div>
                                            {notices.map((notice, idx) => (
                                                <p key={idx} className={`${idx === 0 ? "mt-2" : "mt-1"} text-xs text-gray-500 text-right leading-relaxed`}>
                                                    {notice}{idx === 0 && "."}
                                                </p>
                                            ))}
                                            <button className="mt-6 w-full py-3.5 bg-[#0054a0] text-white font-medium text-lg transition-colors hover:bg-[#004080]">
                                                상품 예약 하기
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 border border-gray-300 border-t-0 shadow-[0_-1px_0_0_black]">
                                    <table className="w-full text-base">
                                        <tbody>
                                            {infoSections.map((section, sIdx) => (
                                                <tr key={sIdx} className={sIdx < infoSections.length - 1 ? "border-b border-gray-300" : ""}>
                                                    <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-36 align-middle text-center border-r border-gray-300 text-base">
                                                        {section.title}
                                                    </td>
                                                    <td className="bg-white px-5 py-4 leading-relaxed text-gray-600">
                                                        {section.items.map((item, iIdx) => (
                                                            <p key={iIdx} className={`${iIdx > 0 ? "mt-2 " : ""}flex items-start gap-2`}><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>{item}</span></p>
                                                        ))}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>
        </>
    );
}
