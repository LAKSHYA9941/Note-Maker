import React from "react";

const Search = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <form className="relative w-full max-w-xs">
            <input
                value={value}
                onChange={onChange}
                type="text"
                id="navbar-search"
                className="flex items-center  w-80 py-2 pl-9 pr-3 text-sm text-black border border-black rounded-3xl bg-slate-100 focus:ring-black focus:border-black"
                placeholder="Search"
                onKeyDown={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 cursor-pointer">
                
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
            </div>
        </form>
    );
};

export default Search;
