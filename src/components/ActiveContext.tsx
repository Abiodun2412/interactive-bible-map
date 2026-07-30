type ActiveContextProps = {
    label: string | null;
    type: "Person" | "Journey" | "Period" | "Place" | "Event" | null;
    onClear: () => void;
};

export default function ActiveContext({
    label,
    type,
    onClear,
}: ActiveContextProps) {
    if (!label) {
        return null;
    }

    return (
        <div className="absolute left-1/2 top-28 z-[1100] w-[calc(100%-1.5rem)] -translate-x-1/2 sm:top-4 sm:w-auto">
            <div className="flex max-w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-3 py-2 text-xs text-white shadow-xl sm:gap-3 sm:px-4 sm:text-sm">
                <span className="min-w-0 truncate">
                    {type && (
                        <span className="mr-2 text-gray-400">
                            {type} ·
                        </span>
                    )}

                    <strong>{label}</strong>
                </span>

                <button
                    type="button"
                    onClick={onClear}
                    className="shrink-0 text-gray-300 hover:text-white"
                    aria-label="Clear current exploration"
                >
                    ×
                </button>
            </div>
        </div>
    );
}