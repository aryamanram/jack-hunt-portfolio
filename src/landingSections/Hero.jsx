import React from "react";
import { Button } from "../ui/button";

export function Hero() {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                                Professional Video
                                <span className="block text-blue-600">Color Grading</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Transform your footage into cinematic masterpieces with expert color correction and grading services for films, commercials, and digital content.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild>
                                <a href="/portfolio">View My Work</a>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="/contact">Start Project</a>
                            </Button>
                        </div>

                        <div className="flex items-center space-x-8 text-sm text-gray-600">
                            <div>
                                <div className="text-2xl font-bold text-gray-900">500+</div>
                                <div>Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">8 Years</div>
                                <div>Experience</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">24-48h</div>
                                <div>Turnaround</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
                                alt="Professional color grading setup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-24 bg-blue-100 rounded-lg backdrop-blur-sm flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-sm font-semibold">DaVinci Resolve</div>
                                <div className="text-xs text-gray-600">Certified</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}