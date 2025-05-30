import React, { useState } from "react";
import InputTag from "../../components/input/inputTags";
import { MdClose } from "react-icons/md";




const Add = ({ onClose, noteData, type }) => {

    const [title, seTitle] = useState("")
    const [Content, setContent] = useState("")
    const [tags, setTags] = useState([])

    const [error, setError] = useState(null)

    const AddNewNote = async () => {

    }
    const editNote = async () => {

    }

    const handleAddNote = () => {
        if (!title) {
            setError("Please enter the title")
            return
        }
        if (!Content) {
            setError("Please enter your Content")
            return
        }
        setError("")

        if (type === "edit") {
            editNote()
        } else {
            AddNewNote()
        }
    }



    return (
        <div className="relative">

            <button onClick={onClose} className="bg-slate-400 w-8 h-8 items-center justify-center flex border rounded-full absolute -top-3 -right-3 text-white hover:bg-red-500 hover:scale-120 transition-all ease-in-out">
                <MdClose className=" text-xl" />
            </button>

            <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-600">TITLE</label>
                <input
                    type="text"
                    className="text-xl text-slate-950 outline-none"
                    placeholder="enter title"
                    value={title}
                    onChange={({ target }) => seTitle(target.value)} />
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <label className="text-xs input-slate-600">CONTENT</label>
                <textarea
                    type="text"
                    className="text-sm text-slate-950 outline-none bg-slate-500 p-2 rounded"
                    placeholder="Content"
                    rows={10}
                    value={Content}
                    onChange={({ target }) => setContent(target.value)} />
            </div>

            <div className="mt-3">
                <label className="text-xs input-slate-600">TAGS</label>
                <InputTag tags={tags} setTags={setTags} />
            </div>

            {error && <p className="text-red-600 text-sm pb-1">{error}</p>}

            <button onClick={handleAddNote}
                className=" font-medium w-full text-white border rounded bg-blue-600 text-sm hover:bg-blue-700 mt-5 p-3">
                ADD</button>

        </div>
    )
}

export default Add