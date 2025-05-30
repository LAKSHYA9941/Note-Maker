import React from "react";
import { MdOutlinePushPin } from "react-icons/md"
import { MdDelete, MdCreate } from "react-icons/md";

const Notecard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return (
        <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="font-medium text-sm">{title}</h6>
                    <span className="font-small text-sm text-slate-500">{date}</span>
                </div>
                <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-blue-600':'text-slate-500'} `} onclick={onPinNote} />
            </div>
            <p className="text-sx text-slate-600 mt-2 " > {content?.slice(0, 60)}</p>
            <div className="flex items-center justify-between mt-2">
                <div className="text-slate-500 ">{tags}</div>
                <div className="flex items-center gap-2">
                    <MdCreate className="icon-btn hover:text-green-600" onClick={onEdit}/>
                    <MdDelete className="icon-btn hover:text-red-600" onClick={onDelete}/>
                </div>
            </div>
        </div>
    )
}


export default Notecard