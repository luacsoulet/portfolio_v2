"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 300) {
                setIsVisible(true);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`navbar glass-effect w-[calc(100%-40px)] shadow-lg mb-4 fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-lg ${isVisible ? 'translate-y-0' : '-translate-y-[200%]'
            }`}>
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Lucas Portfolio</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className="btn btn-ghost" href="/">Home</Link></li>
                    <li><Link className="btn btn-ghost" href="#Portfolio-section">My Works</Link></li>
                    <li><Link className="btn btn-ghost" href="#About-section">My journey</Link></li>
                    <li><a className="btn btn-ghost" href="https://www.linkedin.com/in/magalhaes-lucas" target="_blank"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}