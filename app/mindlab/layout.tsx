// MindLab layout supports both light and dark themes from the design system.
export default function MindLabLayout({
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

