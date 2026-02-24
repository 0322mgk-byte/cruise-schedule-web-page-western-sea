"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Maximize2, BedDouble, Refrigerator, Tv, Bath, Waves, ConciergeBell, DoorClosed, Armchair, Wind, Lock, AppWindow } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Maximize2, BedDouble, Refrigerator, Tv, Bath, Waves, ConciergeBell, DoorClosed, Armchair, Wind, Lock, AppWindow,
};

const { title, description, moreText, rooms: features } = cruiseData.features;

export default function Features() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [activeCard, setActiveCard] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const scrollLeft = el.scrollLeft;
        const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 0;
        const gap = 20;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveCard(Math.min(index, features.length - 1));
    }, []);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        history.pushState({ modal: "features" }, "");
    };
    const closeModal = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(null);
            history.back();
        }
    };

    useEffect(() => {
        const onPopState = () => {
            setSelectedIndex(null);
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selectedIndex]);

    return (
        <>
            {/* Section 4 */}
            <section id="facilities" className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-0 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        {title}
                    </h2>
                    <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        {description}
                    </p>

                    {/* Mobile: horizontal scroll */}
                    <div className="mt-6 md:hidden overflow-hidden">
                        <div
                            ref={scrollRef}
                            onScroll={handleScroll}
                            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pl-5 scroll-pl-5 -mb-5 pb-5"
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-[80vw] bg-white shadow-md border border-gray-300 overflow-hidden cursor-pointer snap-start snap-always ${index === features.length - 1 ? "mr-5" : ""}`}
                                    onClick={() => openModal(index)}
                                >
                                    <div className="aspect-[3/2] overflow-hidden">
                                        <img
                                            src={feature.image}
                                            alt={feature.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="px-4 pt-4 pb-3 text-left">
                                        <h3 className="text-[17px] font-semibold text-gray-900">{feature.name}</h3>
                                        {feature.subtitle && (
                                            <p className="text-sm text-gray-500 mt-1">{feature.subtitle}</p>
                                        )}
                                        <span className="text-sm text-gray-900 font-medium mt-2 inline-flex items-center gap-1 transition-all duration-300 animate-heartbeat">
                                            <span className="group-hover:underline underline-offset-4">{moreText}</span>
                                            <span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Dot indicators */}
                    <div className="flex md:hidden justify-center gap-2 mt-6 pb-2">
                        {features.map((_, index) => (
                            <span
                                key={index}
                                className={`block rounded-full transition-all duration-300 ${index === activeCard ? "w-6 h-2 bg-gray-700" : "w-2 h-2 bg-gray-300"}`}
                            />
                        ))}
                    </div>

                    {/* Desktop: 3-column grid */}
                    <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md border border-gray-200 border-b-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-6 py-5 text-left">
                                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                                    {feature.subtitle && (
                                        <p className="text-sm text-gray-500 mt-1">{feature.subtitle}</p>
                                    )}
                                    <span className="text-sm text-gray-900 font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300">
                                        <span className="group-hover:underline underline-offset-4">{moreText}</span>
                                        <span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 객실 상세 팝업 */}
                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
                        <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
                            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                                <h3 className="text-base md:text-lg font-bold">[객실 안내] {features[selectedIndex].name}</h3>
                                <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                                    <X className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                            <div className="md:px-6 md:pt-6">
                                <div className="w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                                    <img
                                        src={features[selectedIndex].image}
                                        alt={features[selectedIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-4 pb-28 md:px-6 md:pb-6">
                                <div className="mt-4 md:mt-6 text-sm md:text-base text-gray-700 leading-relaxed space-y-3 text-left">
                                    {features[selectedIndex].subtitle && (
                                        <h4 className="text-base md:text-lg font-bold text-gray-900">{features[selectedIndex].subtitle}</h4>
                                    )}
                                    <p>{features[selectedIndex].description}</p>
                                    {features[selectedIndex].amenities.length > 0 && (() => {
                                        const fullWidthItems = features[selectedIndex].amenities.filter(a => a.fullWidth);
                                        const pairedItems = features[selectedIndex].amenities.filter(a => !a.fullWidth);
                                        const rows: { left: typeof pairedItems[0]; right?: typeof pairedItems[0] }[] = [];
                                        for (let i = 0; i < pairedItems.length; i += 2) {
                                            rows.push({ left: pairedItems[i], right: pairedItems[i + 1] });
                                        }
                                        return (
                                            <div className="border-t border-gray-200 mt-4">
                                                {fullWidthItems.map((item, i) => {
                                                    const Icon = iconMap[item.iconName];
                                                    return (
                                                        <div key={`fw-${i}`} className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                                                            {Icon && <Icon className="w-5 h-5 text-[#0054a0] flex-shrink-0" />}
                                                            <span className="text-sm text-gray-700">{item.label}</span>
                                                        </div>
                                                    );
                                                })}
                                                {rows.map((row, ri) => {
                                                    const LeftIcon = iconMap[row.left.iconName];
                                                    const RightIcon = row.right ? iconMap[row.right.iconName] : undefined;
                                                    return (
                                                        <div key={ri} className="grid grid-cols-2 border-b border-gray-200">
                                                            <div className="flex items-center gap-3 px-4 py-3">
                                                                {LeftIcon && <LeftIcon className="w-5 h-5 text-[#0054a0] flex-shrink-0" />}
                                                                <span className="text-sm text-gray-700">{row.left.label}</span>
                                                            </div>
                                                            {row.right && RightIcon && (
                                                                <div className="flex items-center gap-3 px-4 py-3">
                                                                    <RightIcon className="w-5 h-5 text-[#0054a0] flex-shrink-0" />
                                                                    <span className="text-sm text-gray-700">{row.right.label}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
