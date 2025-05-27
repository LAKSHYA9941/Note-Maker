import React from "react";

const Navbar = () => {
    return (
        <div className="bg-white flex justify-between items-center drop-shadow px-6 py-2">
            <h2 className="text-2xl text-black drop-shadow-xl py-2">Note Maker</h2>
            <button className="drop-shadow border-2 border-gray-900 text-gray-900 px-4 py-1 rounded-md hover:bg-black hover:text-white transition duration-300">
                light to dark
            </button>
        </div>
    )

}



export default Navbar