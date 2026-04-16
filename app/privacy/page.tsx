import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for Saran S Kumar's portfolio - outlining how contact form data and communications are handled.",
    alternates: { canonical: "https://saranskumar.live/privacy" },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24 md:pt-32 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-3xl">
                <header className="mb-12">
                    <p className="mono-label mb-3">legal</p>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="text-muted-foreground mt-4">Last Updated: April 2026</p>
                </header>

                <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            This Privacy Policy outlines how I, Saran S Kumar, handle any information provided through this portfolio website. I value your privacy and aim to be transparent about the minimal data collected here.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The only place where personal information is collected on this site is through the <strong>Contact Form</strong>. This includes:
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-4">
                            <li>Your Name</li>
                            <li>Your Email Address</li>
                            <li>The content of your message</li>
                        </ul>
                    </section>

                    <section className="p-6 rounded-lg bg-primary/5 border border-primary/10">
                        <h2 className="text-xl font-semibold mb-4 text-primary">Data Handling & Access</h2>
                        <p className="text-muted-foreground leading-relaxed italic">
                            "The information you provide is sent directly to my personal email inbox. I do not store this data in any external database, and I am the only person who has access to this data."
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Your details are used solely for the purpose of responding to your inquiries, discussing potential collaborations, or reviewing internship offers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Third-Party Sharing</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            I do not sell, trade, or otherwise transfer your personal information to outside parties. This data stays between us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Cookies & Analytics</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            This site is designed to be as lightweight and privacy-respecting as possible. By default, I do not use invasive tracking cookies. Any analytics used (if applicable) are focused on site performance and anonymized traffic patterns.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Contact</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If you have any questions regarding this privacy policy, you may contact me directly at: 
                            <a href="mailto:saranskumarwh@gmail.com" className="ml-1 text-primary hover:underline">saranskumarwh@gmail.com</a>
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
}
