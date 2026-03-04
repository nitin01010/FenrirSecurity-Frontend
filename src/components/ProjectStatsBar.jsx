
export function ProjectStatsBar({ label, value }) {
    return (
        <div className="flex-1 h-12 bg-white border-r border-gray-300 flex items-center px-4">
            <span className="text-gray-400 text-sm mr-2">
                {label}:
            </span>
            <span className="text-gray-800 text-sm font-medium truncate">
                {value}
            </span>
        </div>
    );
}