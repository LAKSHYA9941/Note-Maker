import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import { validemail } from "../../utils/helper";
import Passinput from "../../components/input/passinput";



const Signup = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Error, setError] = useState(null)


    const handleSignup = async (e) => {
        e.preventDefault();

        if (!Name) {
            setError("Please enter your Name")
            return
        }


        if (!validemail(Email)) {
            setError("Please enter a valid Email")
            return
        }

        if (!password) {
            setError("Please enter a Password")
            return
        }
        setError("")


        //sign up API will be called 

    }
    return (
        <>
            <Navbar />

            <div className=" flex mt-28 justify-center items-center ">

                <div className="w-96 border rounded bg-white px-7 py-10 ">

                    <form onSubmit={handleSignup}>

                        <h4>SIGN UP</h4>

                        <input
                            className="w-full text-sm  border rounded border-[1.5px] py-3 px-5 mb-4 outline-none"
                            type="text"
                            placeholder="Name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)} />


                        <input className="w-full text-sm  border rounded border-[1.5px] py-3 px-5 mb-4 outline-none"
                            type="text"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />


                        <Passinput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />


                        {Error && <p className="text-red-600 text-sm pb-1">{Error}</p>}


                        <button type="submit" className="w-full border text-white border rounded bg-blue-600 my-1 p-2  text-sm hover:bg-blue-700 ">
                            Sign up
                        </button>

                        <p className="text-sm text-center mt-4">
                            Already have an Account{" "}
                            <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                Go to login
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}


export default Signup
