import {
  Ban,
  AlertTriangle,
  AlertCircle,
  Search,
  MoveUp,
  MoveDown,
} from "lucide-react";

export function SeverityOverviewCards({
  label,
  number,
  info,
}) {
  const config = {
    "Critical Severity": {
      icon: Ban,
      bg: "bg-pink-100",
      color: "text-pink-600",
    },
    "High Severity": {
      icon: AlertTriangle,
      bg: "bg-orange-100",
      color: "text-orange-600",
    },
    "Medium Severity": {
      icon: AlertCircle,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    "Low Severity": {
      icon: Search,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
  };

  const Icon = config[label]?.icon || Ban;
  const bgColor = config[label]?.bg;
  const iconColor = config[label]?.color;

  const isDecrease = info.includes("decrease");

  return (
    <div className="flex flex-col justify-between w-64 px-6 py-4">

      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-bold text-gray-500 ">
          {label}
        </p>

        <div className={`w-8 h-8 ${bgColor} rounded-md flex items-center justify-center`}>
          <Icon size={16} className={iconColor} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center gap-4">
        <p className="text-3xl font-semibold text-gray-800">
          {number}
        </p>

        <div className="flex items-center gap-1">
          {isDecrease ? (
            <MoveDown size={14} className="text-green-600" />
          ) : (
            <MoveUp size={14} className="text-pink-600" />
          )}

          <p
            className={`text-xs font-medium whitespace-nowrap ${isDecrease ? "text-green-600" : "text-pink-600"
              }`}
          >
            {info}
          </p>
        </div>
      </div>
    </div>
  );
}