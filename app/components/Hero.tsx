"use client";

import Link from "next/link";
import { cruiseData } from "@/data/cruise-data";

export default function Hero() {
    const { ctaText, cruiseLine, departureDate, duration, description, mobileDescription, videoSources, mobileVideoSrc } = cruiseData.hero;

    return (
        <div id="hero">
            {/* Mobile Hero */}
            <section className="md:hidden bg-gray-100 pt-14">
                <div className="px-4 pt-12 text-center">
                    <h1 className="text-[24px] font-bold leading-tight tracking-tight text-gray-900">
                        {cruiseLine}
                    </h1>
                    <p className="mt-2 text-base font-normal leading-relaxed text-gray-600">
                        {(mobileDescription || description).replace("{departureDate}", departureDate).split("\n").map((line, i, arr) => (
                            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                        ))}
                    </p>
                </div>

                {/* 16:10 Video Card */}
                <div className="mt-6 pb-12">
                    <div className="relative w-full aspect-[16/10] overflow-hidden shadow-lg bg-gray-200">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={mobileVideoSrc || videoSources[videoSources.length - 1]?.src} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            {/* Desktop Hero */}
            <section className="hidden md:flex relative min-h-svh items-center overflow-hidden bg-gray-900 pt-20">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        {videoSources.map((source) => (
                            <source key={source.src} src={source.src} type={source.type} />
                        ))}
                    </video>
                </div>

                <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-10 text-left">
                    <span className="text-2xl font-normal tracking-widest uppercase text-white"
                        style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                        {departureDate}
                    </span>
                    <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white"
                        style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                        {cruiseLine}
                    </h1>
                    <p className="mt-8 text-2xl font-normal leading-relaxed text-white"
                        style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                        {description.split("\n").map((line, i) => (
                            <span key={i}>{line}{i < description.split("\n").length - 1 && <br />}</span>
                        ))}
                    </p>
                    <div className="mt-8">
                        <Link
                            href="#schedule"
                            className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-full cursor-pointer whitespace-nowrap text-gray-900 hover:text-white transition-[background-position,color] duration-300 ease-out bg-[linear-gradient(to_top,#0054a0_50%,white_50%)] [background-size:100%_200%] [background-position:0%_0%] hover:[background-position:0%_100%]"
                        >
                            {ctaText}
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                </div>
            </section>
        </div>
    );
}
