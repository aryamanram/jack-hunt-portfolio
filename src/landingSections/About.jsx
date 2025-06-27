import React from "react";

export function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
                            <div className="w-20 h-1 bg-blue-600 rounded"></div>
                        </div>

                        <p className="text-lg text-gray-600">
                            I&apos;m a passionate video colorist with over 8 years of experience bringing stories to life through the art of color. Based in Los Angeles, I&apos;ve worked with independent filmmakers, production companies, and streaming platforms to enhance their visual narratives.
                        </p>

                        <p className="text-gray-600">
                            My expertise spans across feature films, documentaries, commercials, and music videos. I believe that color is more than just correction—it&apos;s about creating emotion, setting mood, and supporting the story being told.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div>
                                <h4 className="font-semibold mb-3">Specializations</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Feature Films</li>
                                    <li>• Documentaries</li>
                                    <li>• Commercials</li>
                                    <li>• Music Videos</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-3">Software</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• DaVinci Resolve</li>
                                    <li>• Adobe Premiere Pro</li>
                                    <li>• Final Cut Pro</li>
                                    <li>• Avid Media Composer</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                                alt="Professional headshot"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-40 h-32 bg-white rounded-lg shadow-lg p-4 border">
                            <div className="space-y-2">
                                <div className="text-sm font-semibold">Recent Recognition</div>
                                <div className="text-xs text-gray-600">
                                    &quot;Outstanding Color Work&quot; - Indie Film Festival 2024
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}