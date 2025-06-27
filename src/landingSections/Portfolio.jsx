import React from "react";

export function Portfolio() {
    const projects = [
        {
            title: "Midnight Chronicles",
            type: "Feature Film",
            description: "Dark, moody thriller requiring complex night scenes and dramatic color contrast",
            image: "https://images.unsplash.com/photo-1489599558421-7ad1ca5501f9?w=600&h=400&fit=crop",
            tags: ["Drama", "Thriller", "Night Scenes"]
        },
        {
            title: "Summer Breeze",
            type: "Commercial",
            description: "Bright, vibrant commercial emphasizing warm tones and lifestyle aesthetics",
            image: "https://images.unsplash.com/photo-1533794299972-c2a8a8be9db5?w=600&h=400&fit=crop",
            tags: ["Commercial", "Lifestyle", "Warm Tones"]
        },
        {
            title: "Urban Stories",
            type: "Documentary",
            description: "Gritty documentary requiring natural color correction and consistent look",
            image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
            tags: ["Documentary", "Urban", "Natural"]
        },
        {
            title: "Electric Nights",
            type: "Music Video",
            description: "High-energy music video with neon aesthetics and creative color treatments",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
            tags: ["Music Video", "Neon", "Creative"]
        },
        {
            title: "Ocean Deep",
            type: "Short Film",
            description: "Underwater scenes requiring specialized blue correction and aquatic mood",
            image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
            tags: ["Short Film", "Underwater", "Blue Tones"]
        },
        {
            title: "Golden Hour",
            type: "Fashion Film",
            description: "Luxury fashion film emphasizing golden hour lighting and skin tones",
            image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
            tags: ["Fashion", "Golden Hour", "Luxury"]
        }
    ];

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4">Portfolio</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A selection of recent projects showcasing diverse color grading styles and techniques
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-sm bg-black/50 px-3 py-1 rounded">View Details</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                    {project.type}
                  </span>
                                </div>

                                <p className="text-sm text-gray-600">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}