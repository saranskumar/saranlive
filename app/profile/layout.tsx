import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Saran S Kumar — Profile",
    description:
        "Digital business card for Saran S Kumar. Engineer — Embedded · Full-Stack · Robotics. Scan to connect.",
};

// Profile always renders light — NFC/QR card needs light background
// for physical readability and tap-friendly contrast.
export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background text-foreground min-h-screen">
            {children}
        </div>
    );
}

