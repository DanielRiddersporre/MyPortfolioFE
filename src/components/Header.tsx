import "../styles/Header.css"
import { useState } from "react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <div className="flex py-8">
                <nav>
                    <section className="MOBILE-MENU flex direction-row justify-between px-8 items-center lg:hidden">
                        <div
                            className={isNavOpen ? "hidden" : "HAMBURGER-ICON space-y-2"} onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse bg-orange-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-orange-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-orange-600"></span>
                        </div>
                        <div className={isNavOpen ? "hidden transition" : "flex direction-row text-lg"}>
                            <span className="text-white font-medium">DANIEL</span><span className="text-orange-600 font-medium">RIDDERSPORRE</span>
                        </div>
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="CROSS-ICON absolute top-0 left-0 px-10 py-10"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-orange-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[200px]">
                                <li className="uppercase">
                                    <a href="/home" className="text-white">Home</a>
                                </li>
                                <li className="uppercase">
                                    <a href="/portfolio" className="text-white">Portfolio</a>
                                </li>
                                <li className="uppercase">
                                    <a href="/blog" className="text-white">Blog</a>
                                </li>
                                <li className="uppercase">
                                    <a href="/about" className="text-white">Om</a>
                                </li>
                                <li className="uppercase">
                                    <a href="/contact" className="text-white">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="DESKTOP-MENU hidden md:flex space-x-10">
                        <a className="flex direction-row"><h2 className="text-white">DANIEL</h2><h2 className="text-orange-600">RIDDERSPORRE</h2></a>
                        <ul className="space-x-10 lg:flex">
                            <li className="uppercase">
                                <a href="/portfolio" className="text-white">Portfolio</a>
                            </li>
                            <li className="uppercase">
                                <a href="/blog" className="text-white">Blogg</a>
                            </li>
                            <li className="uppercase">
                                <a href="/about" className="text-white">Om</a>
                            </li>
                            <li className="uppercase">
                                <a href="/contact" className="text-white">Kontakt</a>
                            </li>
                        </ul>
                    </section>
                </nav>
                <style>{`
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background: rgba(36,36,36,0.95);
                        z-index: 10;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                `}</style>
            </div>
        </>
    )
}