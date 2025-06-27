import React from "react";
import { Button } from "../ui/button";

export function Header() {
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white">C</span>
                    </div>
                    <span className="text-xl">ColorCraft</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="/about"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => handleNavClick(e, '#about')}
                    >
                        About
                    </a>
                    <a
                        href="/services"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => handleNavClick(e, '#services')}
                    >
                        Services
                    </a>
                    <a
                        href="/portfolio"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => handleNavClick(e, '#portfolio')}
                    >
                        Portfolio
                    </a>
                    <a
                        href="/process"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => handleNavClick(e, '#process')}
                    >
                        Process
                    </a>
                    <a
                        href="/contact"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => handleNavClick(e, '#contact')}
                    >
                        Contact
                    </a>
                </nav>

                <Button asChild>
                    <a
                        href="/contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                    >
                        Get Quote
                    </a>
                </Button>
            </div>
        </header>
    );
}