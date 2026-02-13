"use client";

import { Mail, Linkedin, Github, Twitter, Instagram, Camera, Disc } from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-background/50 relative">
            <div className="container mx-auto px-6">

                {/* Section Title */}
                <div className="mb-12">
                    <h2 className="text-sm font-medium tracking-[2px] uppercase text-[#aaaaaa] font-sans mb-5 relative after:content-[''] after:w-[120px] after:h-[1px] after:inline-block after:bg-[#0accda] after:ml-2.5 after:align-middle">
                        -^-
                    </h2>
                    <p className="text-4xl font-bold uppercase text-white font-sans -mt-4">
                        Contact Me
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Social Profiles */}
                    <div className="bg-white/10 p-5 w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                        <div className="p-3 bg-white/10 rounded-full shrink-0">
                            <Disc className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white/50 mb-2">Social Profiles</h3>
                            <div className="flex justify-center md:justify-start gap-3">
                                <SocialIcon href={PROFILE.links.instagram} icon={Instagram} color="hover:text-[#E1306C]" />
                                <SocialIcon href={PROFILE.links.discord} icon={Disc} color="hover:text-[#7289DA]" />
                                <SocialIcon href={PROFILE.links.linkedin} icon={Linkedin} color="hover:text-[#0077B5]" />
                                <SocialIcon href={PROFILE.links.twitter} icon={Twitter} color="hover:text-[#1DA1F2]" />
                                <SocialIcon href={PROFILE.links.github} icon={Github} color="hover:text-[#333]" />
                            </div>
                        </div>
                    </div>

                    {/* Email Me */}
                    <div className="bg-white/10 p-5 w-full flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                        <div className="p-3 bg-white/10 rounded-full shrink-0">
                            <Mail className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl font-bold text-white/50 mb-2">Email Me</h3>
                            <p className="text-white text-sm">
                                Mail me at <a href={`mailto:${PROFILE.email}`} className="text-primary hover:text-[#4ceb95] transition-colors">{PROFILE.email}</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="mt-8 bg-white/10 p-8 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 bg-white/10 border-none text-white placeholder:text-white/30 text-sm focus:bg-white/15 focus:outline-none transition-colors" required />
                        <input type="email" placeholder="Your Email" className="w-full p-3 bg-white/10 border-none text-white placeholder:text-white/30 text-sm focus:bg-white/15 focus:outline-none transition-colors" required />
                    </div>
                    <input type="text" placeholder="Subject" className="w-full p-3 bg-white/10 border-none text-white placeholder:text-white/30 text-sm focus:bg-white/15 focus:outline-none transition-colors" required />
                    <textarea rows={5} placeholder="Message" className="w-full p-3 bg-white/10 border-none text-white placeholder:text-white/30 text-sm focus:bg-white/15 focus:outline-none transition-colors" required ></textarea>

                    <div className="text-center">
                        <button type="submit" className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-[#15bb62] transition-colors font-medium">
                            Send Message
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}

function SocialIcon({ href, icon: Icon, color }: { href: string; icon: any; color: string }) {
    return (
        <a
            href={href}
            target="_blank"
            className={`text-lg text-white transition-colors ${color}`}
        >
            <Icon className="w-5 h-5" />
        </a>
    )
}
