"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

const { title, description, moreText, facilities } = cruiseData.intro;

export default function Intro() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [imageIndex, setImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setImageIndex(0);
        setIsTransitioning(true);
        history.pushState({ modal: "intro" }, "");
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

    const currentImages = selectedIndex !== null ? facilities[selectedIndex].images : [];
    const totalImages = currentImages.length;
    const prevImage = () => setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    const nextImage = () => {
        setIsTransitioning(true);
        setImageIndex((prev) => prev + 1);
    };

    const handleTransitionEnd = () => {
        if (imageIndex >= totalImages) {
            setIsTransitioning(false);
            setImageIndex(0);
        }
    };

    const touchStartX = useRef(0);
    const [dragOffset, setDragOffset] = useState(0);
    const isTouching = useRef(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startAutoSlide = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setIsTransitioning(true);
            setImageIndex((prev) => prev + 1);
        }, 2500);
    }, []);

    const stopAutoSlide = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        isTouching.current = true;
        touchStartX.current = e.touches[0].clientX;
        setIsTransitioning(false);
        setDragOffset(0);
        stopAutoSlide();
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isTouching.current) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - touchStartX.current;
        setDragOffset(diff);
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isTouching.current) return;
        isTouching.current = false;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        setDragOffset(0);
        setIsTransitioning(true);
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextImage() : prevImage();
        }
        startAutoSlide();
    };

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
            startAutoSlide();
            return () => { stopAutoSlide(); document.body.style.overflow = ""; };
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selectedIndex, startAutoSlide, stopAutoSlide]);

    return (
        <>
            {/* Section 3 */}
            <section id="intro" className="py-12 md:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-0 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        {title}
                    </h2>
                    <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        {description}
                    </p>

                    <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="relative aspect-[3/2] md:aspect-[11/10] rounded-none md:rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <img
                                    src={facility.images[0]}
                                    alt={facility.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-5 left-6 text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                    <span className="text-white text-lg font-semibold block">{facility.name}</span>
                                    <span className="text-white/80 text-sm font-medium block mt-1">{facility.subtitle}</span>
                                    <span className="text-white text-sm font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300 animate-heartbeat">
                                        <span className="group-hover:underline underline-offset-4">{moreText}</span>
                                        <span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 시설 상세 팝업 */}
                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
                        <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
                            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                                <h3 className="text-base md:text-lg font-bold">[시설 안내] {facilities[selectedIndex].name}</h3>
                                <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                                    <X className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                            <div className="md:px-6 md:pt-6">
                                <div
                                    className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gray-200 overflow-hidden group/carousel touch-pan-y"
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div
                                        ref={carouselRef}
                                        className={`flex h-full ${isTransitioning ? "transition-transform duration-300 ease-in-out" : ""}`}
                                        style={{ transform: `translateX(calc(-${imageIndex * 100}% + ${dragOffset}px))` }}
                                        onTransitionEnd={handleTransitionEnd}
                                    >
                                        {currentImages.map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                alt={`${facilities[selectedIndex].name} ${i + 1}`}
                                                className="w-full h-full object-cover flex-shrink-0"
                                            />
                                        ))}
                                        {currentImages.length > 0 && (
                                            <img
                                                src={currentImages[0]}
                                                alt={`${facilities[selectedIndex].name} 1`}
                                                className="w-full h-full object-cover flex-shrink-0"
                                            />
                                        )}
                                    </div>
                                    {currentImages.length > 1 && (
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
                                                {(imageIndex % totalImages) + 1}/{totalImages}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="p-4 md:px-6 md:pb-6">
                                <div className="mt-4 md:mt-6 text-sm md:text-base text-gray-700 leading-relaxed space-y-3 text-left">
                                    <h4 className="text-base md:text-lg font-bold text-gray-900">{facilities[selectedIndex].subtitle}</h4>
                                    <p>{facilities[selectedIndex].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
