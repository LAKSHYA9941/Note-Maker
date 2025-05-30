import React from "react";
import { Initials } from "../../utils/helper";

const Profile = ({onLogout}) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 ">
                {Initials("john williams")}</div>
                <div>
                    <p className="text-sm font-medium">William</p>
                    <button onClick={onLogout} className="text-sm text-slate-800 hover:underline">Logout</button>
                </div>
            </div>
    )
}

export default Profile