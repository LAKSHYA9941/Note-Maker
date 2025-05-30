import React, { useState } from "react";
import Profile from "../cards/Profileinfo";
import { useNavigate } from "react-router-dom"
import Search from "../searchbar/searchbar";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate
    const onLogout = () => {
        navigate("/login")
    }

    const handleSearch = () => { }

    const onClearSearch = () => {
        setSearchQuery("")
    }

    return (

        <div className="bg-white flex justify-between items-center drop-shadow px-6 py-2 gap-4">
            <h2 className="text-2xl text-black drop-shadow-xl py-2">Note Maker</h2>


            <Search
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value)
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch} />

                    {/* yaha dark mode toggle component lagana hai   */}
            <button className="drop-shadow border-2 border-gray-900 text-gray-900 px-4 py-1 rounded-md hover:bg-black hover:text-white transition duration-300">
                darkmode
            </button>

            <Profile onLogout={onLogout} />
        </div>

    )

}



export default Navbar