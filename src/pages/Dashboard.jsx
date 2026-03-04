import React from "react"
import { ProjectStatsBar } from "../components/ProjectStatsBar"
import { Ban, Columns2, ListFilter, Plus, RefreshCw, Search } from "lucide-react";
import { SeverityOverviewCards } from "../components/SeverityOverviewCards";
import ScanTable from "../components/ScanTable";
import DashboardHeader from "../components/DashboardHeader";


function Dashboard() {
    return (
        <>
            <DashboardHeader />
            <div className="bg-white  p-4 mt-2">
                <div className=" flex bg-white flex-col w-full">
                    <div className="flex w-full">
                        <ProjectStatsBar label="Org" value="Project X" />
                        <ProjectStatsBar label="Owner" value="Nammagiri" />
                        <ProjectStatsBar label="Total Scans" value="100" />
                        <ProjectStatsBar label="Scheduled" value="1000" />
                        <ProjectStatsBar label="Rescans" value="100" />
                        <ProjectStatsBar label="Failed Scans" value="100" />
                        <div className="h-12 bg-white flex items-center px-4 gap-2 whitespace-nowrap">
                            <RefreshCw size={16} className="text-[#0CC8A8]" />
                            <span className="text-gray-500 text-sm">
                                10 mins ago
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between w-full bg-white p-2">
                        <SeverityOverviewCards
                            label="Critical Severity"
                            number={86}
                            info="+2% increase than yesterday"
                        />

                        <SeverityOverviewCards
                            label="High Severity"
                            number={16}
                            info="+0.9% increase than yesterday"
                        />

                        <SeverityOverviewCards
                            label="Medium Severity"
                            number={26}
                            info="+0.9% decrease than yesterday"
                        />

                        <SeverityOverviewCards
                            label="Low Severity"
                            number={16}
                            info="+0.9% increase than yesterday"
                        />
                    </div>
                </div>
            </div>
            <div className=" p-4  bg-white mt-5 w-[97%] mx-auto rounded-xl">
                <div className="flex flex-wrap items-center gap-3">

                    {/* Search Input */}
                    <div className="flex-1 min-w-62.5 relative">

                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search scans by name or type..."
                            className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300
               text-sm outline-none
               "
                        />

                    </div>
                    {/* Filter Button */}
                    <button className="flex text-gray-700 items-center gap-2 h-11 px-4 rounded-lg 
                       border border-gray-200 bg-white 
                       hover:bg-gray-50 transition text-sm font-medium">
                        <ListFilter size={16} />
                        Filter
                    </button>

                    {/* Column Button */}
                    <button className="flex items-center gap-2 h-11 px-4 rounded-lg 
                       border border-gray-200  text-gray-700 bg-white 
                       hover:bg-gray-50 transition text-sm font-medium">
                        <Columns2 size={16} />
                        Columns
                    </button>

                    {/* New Scan Button */}
                    <button className="flex  items-center gap-2 h-11 px-4 rounded-lg 
                       bg-emerald-600 text-white 
                       hover:bg-emerald-700 transition text-sm font-medium">
                        <Plus size={16} />
                        New Scan
                    </button>

                </div>
                <ScanTable />
            </div>
        </>
    )
}


export default Dashboard