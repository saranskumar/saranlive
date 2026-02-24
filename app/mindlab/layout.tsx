// MindLab always renders in light mode — reading-first environment.
// The .force-light class overrides .dark CSS vars regardless of the
// global theme toggle, matching the deeply_leafy_light token set.

export default function MindLabLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="force-light bg-background text-foreground min-h-screen">
            {children}
        </div>
    );
}
