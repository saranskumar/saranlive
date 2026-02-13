"use client";

import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
    h1: (props: any) => (
        <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0" {...props} />
    ),
    h3: (props: any) => (
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />
    ),
    h4: (props: any) => (
        <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
    ),
    p: (props: any) => (
        <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
    ),
    ul: (props: any) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    ol: (props: any) => (
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
    ),
    blockquote: (props: any) => (
        <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground" {...props} />
    ),
    a: (props: any) => (
        <Link className="font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors" {...props} />
    ),
    Image: (props: any) => (
        <Image className="rounded-md border my-8" {...props} />
    ),
    hr: (props: any) => <hr className="my-4 md:my-8" {...props} />,
    table: (props: any) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full" {...props} />
        </div>
    ),
    tr: (props: any) => (
        <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
    ),
    th: (props: any) => (
        <th
            className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
            {...props}
        />
    ),
    td: (props: any) => (
        <td
            className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
            {...props}
        />
    ),
    pre: (props: any) => (
        <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900" {...props} />
    ),
    code: (props: any) => (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />
    ),
};

export function MDXContent({ source }: { source: any }) {
    return <MDXRemote source={source} components={components} />;
}
