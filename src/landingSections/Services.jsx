import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function Services() {
    const services = [
        {
            title: "Color Correction",
            description: "Professional color correction to fix exposure, white balance, and technical issues in your footage.",
            features: ["Exposure correction", "White balance adjustment", "Color matching", "Technical cleanup"],
            price: "Starting at $150/hour"
        },
        {
            title: "Creative Color Grading",
            description: "Artistic color grading to enhance mood, style, and visual storytelling of your project.",
            features: ["Mood enhancement", "Style development", "Look creation", "Creative treatments"],
            price: "Starting at $200/hour"
        },
        {
            title: "HDR & Dolby Vision",
            description: "Advanced HDR color grading for streaming platforms and premium viewing experiences.",
            features: ["HDR10 grading", "Dolby Vision mastering", "Platform delivery", "Quality assurance"],
            price: "Custom pricing"
        },
        {
            title: "Package Deals",
            description: "Comprehensive post-production color services for complete projects and series.",
            features: ["Full project workflow", "Multiple deliverables", "Revision rounds", "Priority support"],
            price: "Quote on request"
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4">Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Professional color grading services tailored to bring your creative vision to life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="h-full">
                            <CardHeader>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t">
                                    <p className="text-sm font-medium">{service.price}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}