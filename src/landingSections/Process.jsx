import React from "react";

export function Process() {
    const steps = [
        {
            number: "01",
            title: "Initial Consultation",
            description: "We discuss your project vision, timeline, and specific color requirements. I'll review your footage and provide a detailed quote."
        },
        {
            number: "02",
            title: "File Preparation",
            description: "You provide the raw footage or project files. I'll ensure all media is properly organized and ready for the color grading process."
        },
        {
            number: "03",
            title: "Color Grading",
            description: "I begin the color correction and creative grading process, working scene by scene to achieve your desired look and feel."
        },
        {
            number: "04",
            title: "Review & Revisions",
            description: "You review the initial grade and provide feedback. I'll make adjustments to ensure the final result exceeds your expectations."
        },
        {
            number: "05",
            title: "Final Delivery",
            description: "Final colored footage is delivered in your required format and resolution, ready for distribution or further post-production."
        }
    ];

    return (
        <section id="process" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4">My Process</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A streamlined workflow designed to deliver exceptional results efficiently
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-8 items-start">
                                <div className="flex-shrink-0 w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-xl">
                                    {step.number}
                                </div>

                                <div className="flex-1 pt-2">
                                    <h3 className="text-xl mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-card rounded-lg border">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl mb-2">24-48h</div>
                                <div className="text-sm text-muted-foreground">Typical Turnaround</div>
                            </div>
                            <div>
                                <div className="text-3xl mb-2">3 Rounds</div>
                                <div className="text-sm text-muted-foreground">Revision Included</div>
                            </div>
                            <div>
                                <div className="text-3xl mb-2">Multiple</div>
                                <div className="text-sm text-muted-foreground">Format Delivery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}