"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

export default function TripSummary() {
    const [cancelOpen, setCancelOpen] = useState(true);
    const [noticeOpen, setNoticeOpen] = useState(true);

    const { labels, cancellationItems, importantNotices } = cruiseData.tripSummary;

    return (
        <>
            {/* Section 9 */}
            <section id="trip-summary" className="py-12 md:py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-0 md:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                            규정 및 유의사항
                        </h2>
                        <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                            예약 전 꼭 확인해야 할 필수 사항입니다
                        </p>
                    </div>

                    {/* 모바일: 개별 아코디언 카드 */}
                    <div className="mt-6 md:hidden max-w-5xl mx-auto grid grid-cols-1 gap-3">
                        {/* 취소 위약금 규정 */}
                        <div className="bg-white border border-gray-300 overflow-hidden">
                            <button
                                onClick={() => setCancelOpen(!cancelOpen)}
                                className={`w-full px-5 py-3 flex items-center justify-between bg-white ${cancelOpen ? "border-b border-gray-300" : ""}`}
                            >
                                <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    {labels.cancellationTitle}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${cancelOpen ? "rotate-180" : ""}`} />
                            </button>
                            <ul className={`px-5 py-5 space-y-2 ${cancelOpen ? "block" : "hidden"}`}>
                                {cancellationItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 중요 안내사항 */}
                        <div className="bg-white border border-gray-300 overflow-hidden">
                            <button
                                onClick={() => setNoticeOpen(!noticeOpen)}
                                className={`w-full px-5 py-3 flex items-center justify-between bg-white ${noticeOpen ? "border-b border-gray-300" : ""}`}
                            >
                                <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    {labels.noticeTitle}
                                </span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${noticeOpen ? "rotate-180" : ""}`} />
                            </button>
                            <ul className={`px-5 py-5 space-y-2 ${noticeOpen ? "block" : "hidden"}`}>
                                {importantNotices.map((notice, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>
                                            {notice.text}
                                            {notice.subItems && (
                                                <span className="block mt-1 ml-1 space-y-1">
                                                    {notice.subItems.map((sub, j) => (
                                                        <span key={j} className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>{sub}</span>
                                                    ))}
                                                </span>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 데스크탑: 원래 테이블 레이아웃 */}
                    <div className="mt-10 max-w-5xl mx-auto hidden md:block">
                        <div className="bg-white border border-gray-300 border-t-0 shadow-[0_-1px_0_0_black] overflow-hidden">
                            <div className="flex flex-row">
                                <div className="bg-white font-semibold text-gray-700 px-6 py-5 w-52 text-lg whitespace-nowrap text-left flex items-start justify-start gap-2 flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    {labels.cancellationTitle}
                                </div>
                                <ul className="px-5 py-5 space-y-2 flex-1">
                                    {cancellationItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                            <span className="text-gray-400 flex-shrink-0">▣</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-t border-gray-300 flex flex-row">
                                <div className="bg-white font-semibold text-gray-700 px-6 py-5 w-52 text-lg whitespace-nowrap text-left flex items-start justify-start gap-2 flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    {labels.noticeTitle}
                                </div>
                                <ul className="px-5 py-5 space-y-2 flex-1">
                                    {importantNotices.map((notice, i) => (
                                        <li key={i} className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                            <span className="text-gray-400 flex-shrink-0">▣</span>
                                            <span>
                                                {notice.text}
                                                {notice.subItems && (
                                                    <span className="block mt-1 ml-1 space-y-1">
                                                        {notice.subItems.map((sub, j) => (
                                                            <span key={j} className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>{sub}</span>
                                                        ))}
                                                    </span>
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
