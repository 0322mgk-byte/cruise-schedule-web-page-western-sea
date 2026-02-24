"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

export default function ProductInfo() {
    const [includedOpen, setIncludedOpen] = useState(true);
    const [excludedOpen, setExcludedOpen] = useState(true);

    const { labels, title, subtitle, includedItems, excludedItems } = cruiseData.productInfo;

    return (
        <section id="product-info" className="py-12 md:py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-0 md:px-6">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        {title}
                    </h2>
                    <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="mt-6 md:mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    {/* 포함사항 */}
                    <div className="bg-white border-y border-gray-300 md:border md:border-gray-300 md:border-t-0 md:shadow-[0_-1px_0_0_black] overflow-hidden">
                        {/* 모바일: 아코디언 헤더 */}
                        <button
                            onClick={() => setIncludedOpen(!includedOpen)}
                            className={`md:hidden w-full px-5 py-3 flex items-center justify-between bg-white ${includedOpen ? "border-b border-gray-300" : ""}`}
                        >
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                                포함사항
                            </span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${includedOpen ? "rotate-180" : ""}`} />
                        </button>
                        {/* 데스크탑: 기존 헤더 */}
                        <div className="hidden md:block border-b border-gray-300 px-5 py-4">
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-lg">
                                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                                {labels.includedTitle}
                            </span>
                        </div>
                        {/* 모바일: 아코디언 콘텐츠 */}
                        <ul className={`px-5 py-5 space-y-2 ${includedOpen ? "block" : "hidden"} md:block`}>
                            {includedItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 불포함사항 */}
                    <div className="bg-white border-y border-gray-300 md:border md:border-gray-300 md:border-t-0 md:shadow-[0_-1px_0_0_black] overflow-hidden">
                        {/* 모바일: 아코디언 헤더 */}
                        <button
                            onClick={() => setExcludedOpen(!excludedOpen)}
                            className={`md:hidden w-full px-5 py-3 flex items-center justify-between bg-white ${excludedOpen ? "border-b border-gray-300" : ""}`}
                        >
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                불포함사항
                            </span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${excludedOpen ? "rotate-180" : ""}`} />
                        </button>
                        {/* 데스크탑: 기존 헤더 */}
                        <div className="hidden md:block border-b border-gray-300 px-5 py-4">
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-lg">
                                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                {labels.excludedTitle}
                            </span>
                        </div>
                        {/* 모바일: 아코디언 콘텐츠 */}
                        <ul className={`px-5 py-5 space-y-2 ${excludedOpen ? "block" : "hidden"} md:block`}>
                            {excludedItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
