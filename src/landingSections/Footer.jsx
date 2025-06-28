import React from "react";

export function Footer() {
    return (
        <footer className="py-12 bg-gray-50 border-t border-gray-300">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground">C</span>
                            </div>
                            <span className="text-xl">ColorCraft</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Professional video color grading services for filmmakers and content creators worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/services" className="hover:text-foreground transition-colors">Color Correction</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">Creative Grading</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">HDR & Dolby Vision</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">Package Deals</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                            <li><a href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
                            <li><a href="/process" className="hover:text-foreground transition-colors">Process</a></li>
                            <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>hello@colorcraft.studio</li>
                            <li>+1 (555) 123-4567</li>
                            <li>Los Angeles, CA</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 ColorCraft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}