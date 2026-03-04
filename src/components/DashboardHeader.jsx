import React from "react";
import { ChevronRight, Home } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      
      {/* Left - Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 gap-2">
        <span className="font-medium text-gray-700">Scan</span>
        
        <ChevronRight size={14} className="text-gray-400" />
        
        <span className="text-gray-500">Private Assets</span>
        
        <ChevronRight size={14} className="text-gray-400" />
        
        <span className="text-emerald-600 font-medium">
          New Scan
        </span>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-3">
        
        <button className="px-4 h-10 rounded-lg border border-gray-200 
                           text-sm font-medium text-gray-700 
                           hover:bg-gray-50 transition">
          Export Report
        </button>

        <button className="px-4 h-10 rounded-lg 
                           bg-red-100 text-red-600 
                           text-sm font-medium 
                           hover:bg-red-200 transition">
          Stop Scan
        </button>

      </div>
    </div>
  );
}