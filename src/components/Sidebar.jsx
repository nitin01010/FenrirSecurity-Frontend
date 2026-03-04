import {
    Grid2x2Plus,
    Folder,
    Scan,
    Calendar,
    ChevronRight,
    Bell,
    Settings,
    LifeBuoy,
} from "lucide-react";
import React from "react";

const menuItems = [
    { name: "Dashboard", icon: Grid2x2Plus },
    { name: "Projects", icon: Folder },
    { name: "Scans", icon: Scan },
    { name: "Schedule", icon: Calendar },
    { name: "Notifications", icon: Bell },
    { name: "Settings", icon: Settings },
    { name: "Support", icon: LifeBuoy },
];

function Sidebar({ tab, setTab }) {
    return (
        <div className="w-64  bg-white border-r border-gray-300 p-4 flex flex-col justify-between">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-[#0CC8A8] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    </div>
                    <h1 className="text-lg font-bold text-[#0CC8A8] lowercase">
                        aps
                    </h1>
                </div>

                {/* Menu */}
                <div className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = tab === item.name;

                        return (
                            <button
                                key={item.name}
                                onClick={() => setTab(item.name)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all
                  ${isActive
                                        ? "bg-[#d9f3ef] text-[#0CC8A8]"
                                        : "text-gray-500 hover:bg-gray-100"
                                    }`}
                            >
                                <Icon
                                    size={18}
                                    className={
                                        isActive ? "text-[#0CC8A8]" : "text-gray-400"
                                    }
                                />
                                <span className="text-sm font-medium">
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="border-t flex items-center justify-between cursor-pointer   py-6 border-gray-300  transition">

                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-medium">admin@edu.com</p>
                        <p className="text-xs text-gray-400">Security Lead</p>
                    </div>
                </div>

                <ChevronRight size={18} className="text-gray-400" />
            </div>
        </div>
    );
}

export default Sidebar;