"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

// Paste your deployed Apps Script Web App URL here
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbynI6OrWMOW1LHjtT65LEsKlv5K70ZF9EEoVoM-NqgbBMzzQccRt7Xboy8NCEhHt0MA/exec";

// Column order for the Google Sheet
const FIELD_ORDER = ["name", "email", "subject", "message"];

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        if (!APPS_SCRIPT_URL) {
            // No endpoint yet — show success for demo
            setTimeout(() => setStatus("success"), 800);
            return;
        }

        try {
            // Apps Script reads e.parameters — must send URL-encoded, not JSON
            const payload = new URLSearchParams({
                ...form,
                formDataNameOrder: JSON.stringify(FIELD_ORDER),
                formGoogleSheetName: "responses",
            });

            await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // required for Apps Script web app
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: payload.toString(),
            });

            // no-cors means we can't read the response — assume success
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const filled = form.name.trim() && form.email.trim() && form.message.trim();

    if (status === "success") {
        return (
            <div className="flex items-start gap-3 p-5 rounded-md border border-primary/30 bg-primary/5">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                    <p className="text-sm font-medium text-foreground">Message sent!</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        Thanks for reaching out — I&apos;ll get back to you soon.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                    label="Your name"
                    name="name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <Field
                    label="Your email"
                    name="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Subject */}
            <Field
                label="Subject"
                name="subject"
                type="text"
                placeholder="Internship / Collab / Hi"
                value={form.subject}
                onChange={handleChange}
            />

            {/* Message */}
            <div className="space-y-1.5">
                <label className="mono-label block" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none transition-colors"
                />
            </div>

            {status === "error" && (
                <p className="text-xs text-destructive font-mono">
                    Something went wrong — try emailing directly at saranskumarwh@gmail.com
                </p>
            )}

            <button
                type="submit"
                disabled={!filled || status === "sending"}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-primary/50 bg-primary/10 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
                <Send className="w-3.5 h-3.5" />
                {status === "sending" ? "Sending…" : "Send message"}
            </button>
        </form>
    );
}

function Field({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    required,
}: {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) {
    return (
        <div className="space-y-1.5">
            <label className="mono-label block" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
            />
        </div>
    );
}
