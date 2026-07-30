"use client";

import type { ReactNode, RefObject } from "react";

type ResponsivePanelProps = {
    children: ReactNode;
    panelRef?: RefObject<HTMLElement | null>;
    className?: string;
};

export default function ResponsivePanel({
    children,
    panelRef,
    className = "",
}: ResponsivePanelProps) {
    return (
        <aside
            ref={panelRef}
            className={`
        absolute
        z-[1300]
        overflow-y-auto
        overscroll-contain
        bg-white
        shadow-2xl

        bottom-0
        left-0
        right-0
        max-h-[75vh]
        rounded-t-2xl
        p-5

        sm:bottom-auto
        sm:left-auto
        sm:right-4
        sm:top-4
        sm:max-h-[calc(100vh-2rem)]
        sm:w-96
        sm:rounded-xl
        sm:p-6

        ${className}
      `}
        >
            <div className="mb-4 flex justify-center sm:hidden">
                <div className="h-1.5 w-12 rounded-full bg-gray-300" />
            </div>

            {children}
        </aside>
    );
}