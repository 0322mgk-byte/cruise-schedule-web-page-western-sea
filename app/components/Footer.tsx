import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { cruiseData } from "@/data/cruise-data";

export default function Footer() {
    const { companyName, description, logoPath, copyright, phone, email, hours, address, quickLinks } = cruiseData.footer;

    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        {/* 모바일 */}
                        <Link href="/" className="md:hidden flex items-center gap-2 mb-6">
                            {logoPath && <img src={logoPath} alt={`${companyName} 로고`} className="h-7 w-auto" />}
                            <span className="font-bold text-xl tracking-tight">{companyName}</span>
                        </Link>
                        {/* 데스크탑 */}
                        <Link href="/" className="hidden md:flex items-center gap-2 mb-6">
                            {logoPath && <img src={logoPath} alt={`${companyName} 로고`} className="h-8 w-auto" />}
                            <span className="font-bold text-xl tracking-tight">{companyName}</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <h4 className="font-bold text-lg mb-6">바로가기</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">고객 센터</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>전화: {phone}</li>
                            <li>이메일: {email}</li>
                            <li>운영시간: {hours}</li>
                            <li>주소: {address}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">뉴스레터 구독</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            최신 프로모션과 여행 정보를 받아보세요.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="이메일 주소"
                                className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-gray-500"
                            />
                            <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                                구독
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        {copyright || `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`}
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
