import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Notecard from "../../components/cards/Notecard";
import { MdAdd } from "react-icons/md";
import Add from "./addeditnotes";
import Modal from "react-modal"

const Home = () => {

    const [OpenEditmodal, setOpenEditmodal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

    return (


        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 m-8">
                    <Notecard title={"Bring mummy"}
                        tags={["#scooty", "#ride", "#ILY MOM"]}
                        date={"29th May 20205"}
                        content={"Mummy ko time par lana hai 2:15 nikal ke"}
                        isPinned={true}
                        onDelete={() => { }}
                        onEdit={() => { }}
                        onPinNote={() => { }} />
                </div>
            </div>



            <button className="w-15 h-15 flex items-center justify-center absolute right-10 bottom-10 bg-blue-600 rounded-2xl hover:shadow-xl hover:bg-blue-400 hover:scale-110 transition-all duration-500 ease-in-out">
                <MdAdd className=" text-[32px] text-white" onClick={() => { setOpenEditmodal({ isShown: true, type: "add", data: null }) }} />
            </button>

            <Modal
                isOpen={OpenEditmodal.isShown}
                onRequestClose={() => { }}
                style={{
                    overlay: {
                        background: "rgba(0,0,0,.2)",
                    },
                }}
                contentLabel=""
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll">

                <Add
                    type={OpenEditmodal.type}
                    noteData={OpenEditmodal.data}
                    onClose={() => {
                        setOpenEditmodal({ isShown: false, type: "add", data: null })
                    }} />
            </Modal>

        </>

    )
}

export default Home