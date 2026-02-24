interface TagProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
    href?: string;
}

export function Tag({ label, active = false, onClick, href }: TagProps) {
    const cls = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${active
            ? "bg-primary/15 text-primary border border-primary/30"
            : "bg-muted text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
        }`;

    if (href) {
        return (
            <a href={href} className={cls}>
                #{label}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={cls} type="button">
            #{label}
        </button>
    );
}
