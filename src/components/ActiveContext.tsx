type ActiveContextProps = {
  label: string | null;
  onClear: () => void;
};

export default function ActiveContext({
  label,
  onClear,
}: ActiveContextProps) {
  if (!label) {
    return null;
  }

  return (
    <div className="absolute left-1/2 top-4 z-[1100] -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full bg-gray-900 px-4 py-2 text-sm text-white shadow-xl">
        <span>
          Exploring: <strong>{label}</strong>
        </span>

        <button
          type="button"
          onClick={onClear}
          className="text-gray-300 hover:text-white"
          aria-label="Clear current exploration"
        >
          ×
        </button>
      </div>
    </div>
  );
}