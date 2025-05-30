import React, { useState } from "react";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar/Navbar";
import Passinput from "../../components/input/passinput";
import { validemail } from "../../utils/helper";


const Login = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)
    const [password, setPassword] = useState("")


    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validemail(email)) {
            setError("your email lacks somethings");
            return
        }

        if (!password) {
            setError("Enter the password")
            return
        }
        setError("")

        //Login API will be called
    }

    return (
        <>
            <Navbar />
                <div className=" flex mt-28 justify-center items-center ">
                    <div className="w-96 border rounded bg-white px-7 py-10 ">
                        <h4>LOGIN</h4>
                        <form onSubmit={handleLogin}>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email"
                                type="text"
                                className="w-full text-sm  border rounded border-[1.5px] py-3 px-5 mb-4 outline-none"
                            />
                            <Passinput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && <p className="font-sm text-red-600 pb-1">{error}</p>}


                            <button type="submit" className="w-full border text-white border rounded bg-blue-600 my-1 p-2  text-sm hover:bg-blue-700 ">
                                Login
                            </button>


                            <p className="text-sm text-center mt-4">
                                not registered yet?{" "}
                                <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                                    Create an account!
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
        </>
    )
}
export default Login