"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

const { labels, categories: checklistData } = cruiseData.checklist;

function AccordionItem({ section, index, openSet, toggle, isLast }: {
    section: typeof checklistData[number];
    index: number;
    openSet: Set<number>;
    toggle: (index: number) => void;
    isLast?: boolean;
}) {
    const isOpen = openSet.has(index);
    return (
        <div className={!isLast ? "border-b border-gray-200" : ""}>
            <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-4 px-5 md:px-6 text-left cursor-pointer group/item transition-colors hover:bg-gray-50"
            >
                <span className="text-base md:text-lg font-bold text-gray-800">
                    {section.title}
                </span>
                <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 text-gray-400 group-hover/item:text-gray-600 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <ul className="pb-5 px-5 md:px-6 space-y-2.5">
                    {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                            <span className="text-gray-400 flex-shrink-0 text-xs mt-1.5">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function MobileAccordionItem({ section, index, openSet, toggle, isLast }: {
    section: typeof checklistData[number];
    index: number;
    openSet: Set<number>;
    toggle: (index: number) => void;
    isLast?: boolean;
}) {
    const isOpen = openSet.has(index);
    return (
        <div className="bg-white border-t border-gray-300 overflow-hidden">
            <button
                onClick={() => toggle(index)}
                className="w-full border-b border-gray-300 px-5 py-3 flex items-center justify-between bg-gray-50"
            >
                <span className="font-bold text-gray-900 text-base">
                    {section.title}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <ul className={`px-5 py-5 space-y-2.5 ${isOpen ? "block" : "hidden"}`}>
                {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                        <span className="text-gray-400 flex-shrink-0">▣</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Checklist() {
    const [openSet, setOpenSet] = useState<Set<number>>(new Set());
    const mobileBtnAnchorRef = useRef<HTMLParagraphElement>(null);
    const mobileBtnRef = useRef<HTMLDivElement>(null);
    const mobileAccordionRef = useRef<HTMLDivElement>(null);

    const isAllOpen = openSet.size === checklistData.length;

    const toggle = (index: number) => {
        setOpenSet((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const toggleAll = () => {
        if (isAllOpen) {
            setOpenSet(new Set());
        } else {
            setOpenSet(new Set(checklistData.map((_, i) => i)));
        }
    };

    const toggleAllMobile = () => {
        if (isAllOpen) {
            setOpenSet(new Set());
            const section = mobileAccordionRef.current;
            if (section) {
                const headerHeight = 56;
                const offset = 12;
                const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - offset;
                window.scrollTo({ top, behavior: "instant" });
            }
        } else {
            setOpenSet(new Set(checklistData.map((_, i) => i)));
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) return;
            const anchor = mobileBtnAnchorRef.current;
            const section = mobileAccordionRef.current;
            const btn = mobileBtnRef.current;
            if (!anchor || !section || !btn) return;

            const stickyTop = 68;
            const btnHeight = btn.offsetHeight;
            const anchorTop = anchor.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (anchorTop > stickyTop) {
                btn.style.position = 'fixed';
                btn.style.top = `${stickyTop}px`;
                btn.style.right = '16px';
                btn.style.bottom = 'auto';
                btn.style.opacity = '0';
                btn.style.pointerEvents = 'none';
            } else if (sectionBottom > stickyTop + btnHeight) {
                btn.style.position = 'fixed';
                btn.style.top = `${stickyTop}px`;
                btn.style.right = '16px';
                btn.style.bottom = 'auto';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            } else {
                btn.style.position = 'absolute';
                btn.style.top = 'auto';
                btn.style.right = '16px';
                btn.style.bottom = '0';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftItems = checklistData
        .map((section, index) => ({ section, index }))
        .filter((_, i) => i % 2 === 0);
    const rightItems = checklistData
        .map((section, index) => ({ section, index }))
        .filter((_, i) => i % 2 === 1);

    return (
        <section id="checklist" className="py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-0 md:px-6">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        {labels.title}
                    </h2>
                    <p ref={mobileBtnAnchorRef} className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        {labels.subtitle}
                    </p>
                </div>

                {/* 모바일: 개별 카드 아코디언 */}
                <div ref={mobileAccordionRef} className="mt-6 md:hidden max-w-5xl mx-auto grid grid-cols-1 gap-3 relative">
                    {/* 모바일: 모두펼침 버튼 (DOM 직접 조작) */}
                    <div ref={mobileBtnRef} className="md:hidden z-10" style={{ position: 'fixed', top: '68px', right: '16px', opacity: 0, pointerEvents: 'none' }}>
                        <button
                            onClick={toggleAllMobile}
                            className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1.5 cursor-pointer flex items-center gap-1"
                        >
                            {isAllOpen ? "모두접기" : "모두펼침"}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAllOpen ? "rotate-180" : ""}`} />
                        </button>
                    </div>
                    {checklistData.map((section, index) => (
                        <MobileAccordionItem key={index} section={section} index={index} openSet={openSet} toggle={toggle} isLast={index === checklistData.length - 1} />
                    ))}
                </div>

                {/* 데스크톱: 독립 2열 */}
                <div className="mt-10 max-w-5xl mx-auto hidden md:block relative">
                    <button
                        onClick={toggleAll}
                        className="absolute -top-8 right-0 text-sm md:text-base text-gray-500 hover:text-gray-700 transition-colors cursor-pointer flex items-center gap-1"
                    >
                        {isAllOpen ? "모두 접기" : "모두 펼침"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isAllOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className="flex items-start gap-x-10">
                        {[leftItems, rightItems].map((columnItems, col) => (
                            <div key={col} className="flex-1 bg-white border border-gray-200 border-t-0 shadow-[0_-1px_0_0_black]">
                                {columnItems.map(({ section, index }, i) => (
                                    <AccordionItem key={index} section={section} index={index} openSet={openSet} toggle={toggle} isLast={i === columnItems.length - 1} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
