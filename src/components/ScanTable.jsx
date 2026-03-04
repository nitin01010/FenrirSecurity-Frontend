import React from "react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

const statusStyles = {
    Completed: {
        bg: "bg-emerald-100 text-emerald-600",
        icon: <CheckCircle2 size={14} />,
    },
    Scheduled: {
        bg: "bg-blue-100 text-blue-600",
        icon: <Clock size={14} />,
    },
    Failed: {
        bg: "bg-red-100 text-red-600",
        icon: <XCircle size={14} />,
    },
};

function StatusBadge({ status }) {
    const config = statusStyles[status];
    return (
        <div
            className={`flex items-center gap-1  px-2 py-1 rounded-md text-xs font-medium ${config.bg}`}
        >
            {config.icon}
            {status}
        </div>
    );
}

function ProgressBar({ value }) {
    return (
        <div className="flex items-center  gap-3">
            <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full ${value < 30 ? "bg-red-500" : "bg-emerald-500"
                        }`}
                    style={{ width: `${value}%` }}
                />
            </div>
            <span className="text-xs text-gray-600">{value}%</span>
        </div>
    );
}

function SeverityBadge({ value, color }) {
    return (
        <span
            className={`px-2 py-1 text-xs font-semibold rounded-md text-white ${color}`}
        >
            {value}
        </span>
    );
}

export default function ScanTable() {
    const scans = [
        {
            name: "Web App Servers",
            type: "Greybox",
            status: "Completed",
            progress: 100,
            vulnerability: { critical: 5, high: 12, medium: 23, low: 18 },
            lastScan: "4d ago",
        },
        {
            name: "Internal API Gateway",
            type: "Greybox",
            status: "Completed",
            progress: 100,
            vulnerability: { critical: 3, high: 8, medium: 15, low: 10 },
            lastScan: "2d ago",
        },
        {
            name: "Authentication Service",
            type: "Blackbox",
            status: "Scheduled",
            progress: 75,
            vulnerability: { critical: 0, high: 4, medium: 9, low: 6 },
            lastScan: "1d ago",
        },
        {
            name: "Payment Microservice",
            type: "Greybox",
            status: "Completed",
            progress: 100,
            vulnerability: { critical: 7, high: 18, medium: 30, low: 22 },
            lastScan: "6d ago",
        },
        {
            name: "Admin Dashboard",
            type: "Blackbox",
            status: "Failed",
            progress: 22,
            vulnerability: { critical: 2, high: 6, medium: 12, low: 4 },
            lastScan: "3d ago",
        },
        {
            name: "IoT Device Network",
            type: "Blackbox",
            status: "Failed",
            progress: 10,
            vulnerability: { critical: 1, high: 2, medium: 4, low: 1 },
            lastScan: "3d ago",
        },
        {
            name: "Cloud Infrastructure",
            type: "Greybox",
            status: "Completed",
            progress: 100,
            vulnerability: { critical: 4, high: 10, medium: 21, low: 16 },
            lastScan: "5d ago",
        },
        {
            name: "Mobile Backend API",
            type: "Greybox",
            status: "Scheduled",
            progress: 55,
            vulnerability: { critical: 0, high: 3, medium: 6, low: 5 },
            lastScan: "12h ago",
        },
        {
            name: "Database Cluster",
            type: "Blackbox",
            status: "Completed",
            progress: 100,
            vulnerability: { critical: 6, high: 14, medium: 19, low: 11 },
            lastScan: "7d ago",
        },
        {
            name: "Public Website",
            type: "Greybox",
            status: "Completed",
            progress: 100,
            vulnerability: { critical: 2, high: 9, medium: 17, low: 13 },
            lastScan: "1d ago",
        },
    ];

    return (
        <div className="mt-8  border-t border-gray-200 overflow-hidden">
            <table className="w-full text-sm  ">
                <thead className="   text-gray-500 uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4 text-left">Scan Name</th>
                        <th className="px-6 py-4 text-left">Type</th>
                        <th className="px-6 py-4 text-left">Status</th>
                        <th className="px-6 py-4 text-left">Progress</th>
                        <th className="px-6 py-4 text-left">Vulnerability</th>
                        <th className="px-6 py-4 text-left">Last Scan</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100  ">
                    {scans.map((scan, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 font-medium text-gray-800">
                                {scan.name}
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                {scan.type}
                            </td>

                            <td className="px-6 py-4">
                                <StatusBadge status={scan.status} />
                            </td>

                            <td className="px-6 py-4">
                                <ProgressBar value={scan.progress} />
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <SeverityBadge value={scan.vulnerability.critical} color="bg-red-500" />
                                    <SeverityBadge value={scan.vulnerability.high} color="bg-orange-500" />
                                    <SeverityBadge value={scan.vulnerability.medium} color="bg-yellow-500" />
                                    <SeverityBadge value={scan.vulnerability.low} color="bg-green-500" />
                                </div>
                            </td>

                            <td className="px-6 py-4 text-gray-500">
                                {scan.lastScan}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}