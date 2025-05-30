import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const InputTag = ({ tags, setTags }) => {

    const [Inputvalue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const Addnewtag = () => {
        if (Inputvalue.trim() !== "") {
            setTags([...tags, Inputvalue.trim()])
            setInputValue("")
        }
    }


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            Addnewtag()
        }
    }


    const handleRemovetags = (tagtoremove) => {
        setTags(tags.filter((tag) => tag !== tagtoremove))

    }

    return (
        <div>
            {tags?.length > 0 && (<div className="flex items-center gap-2 flex-wrap mt-2">
                {tags.map((tag, index) => (
                    <span key={index} className="flex items-center text-slate-950 gap-2 text-sm bg-slate-200 px-3 py-1 rounded-full">
                        #{tag}
                        <button onClick={() => { handleRemovetags(tag) }}>
                            <MdClose className="text-zinc-600 bg-slate-300 border rounded-full hover:text-zinc-950"/>
                        </button>

                    </span>
                ))}
            </div>)}

            <div className="flex items-center gap-4 mt-3">
                <input 
                value={Inputvalue}
                type="text"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Add tags"
                className=" text-sm bg-transparent border rounded-full px-3 py-2 outline-none" />
                <button onClick={Addnewtag} className="w-8 h-8 flex items-center justify-center border rounded-full border-blue-700 hover:bg-blue-700 ">
                    <MdAdd className="text-2xl font-extrabold text-blue-600 hover:text-white" />

                </button>
            </div>
        </div>
    )
}

export default InputTag