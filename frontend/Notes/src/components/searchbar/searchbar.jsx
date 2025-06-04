import React from "react";

const Search = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <form className="relative w-full max-w-xs">
            <input
                value={value}
                onChange={onChange}
                type="text"
                id="navbar-search"
                className="flex items-center w-80 py-2 pl-9 pr-3 text-sm text-black border border-black rounded-3xl bg-slate-100 focus:ring-black focus:border-black"
                placeholder="Search"
                onKeyDown={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-black"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 19l-4-4m0-7a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </form>
    );
};

export default Search;
