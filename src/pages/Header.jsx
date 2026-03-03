import React from "react"

function Header() {
    return (
        <div className=" flex justify-start items-center h-13 p-2 " >
            <div className="relative w-7 h-7 bg-[#0CC8A8] rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white/80 rounded-full"></div>
            </div>
            <h1 className=" px-2 lowercase font-bold text-white text-lg">APS</h1>
        </div>
    )
}

export default Header