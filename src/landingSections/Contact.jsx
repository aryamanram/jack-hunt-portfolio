import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

export function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl mb-4">Get In Touch</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to elevate your project with professional color grading? Let&apos;s discuss your vision.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl mb-6">Start Your Project</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name *</Label>
                                        <Input id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input id="email" type="email" placeholder="your@email.com" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="project-type">Project Type</Label>
                                    <Input id="project-type" placeholder="Feature film, commercial, music video, etc." />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="timeline">Timeline</Label>
                                    <Input id="timeline" placeholder="When do you need this completed?" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Project Details *</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me about your project, vision, and any specific requirements..."
                                        className="min-h-32"
                                        required
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-black text-white cursor-pointer">
                                    Send Project Details
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Response</CardTitle>
                                <CardDescription>
                                    I typically respond to project inquiries within 24 hours
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm">Currently accepting new projects</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Next available slot: January 2025
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <div>hello@colorcraft.studio</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Phone</div>
                                    <div>+1 (555) 123-4567</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Location</div>
                                    <div>Los Angeles, CA</div>
                                </div>
                                <div>
                                    <div className="text-sm text-muted-foreground">Hours</div>
                                    <div>Monday - Friday, 9AM - 6PM PST</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>File Transfer</CardTitle>
                                <CardDescription>
                                    For large projects, I can set up secure file transfer
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm text-muted-foreground">
                                    Supporting Dropbox, Google Drive, Frame.io, and custom FTP solutions
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}