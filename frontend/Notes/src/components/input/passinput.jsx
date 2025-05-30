import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Passinput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex bg-transparent items-center mb-3 border-[1.5px] rounded px-5">
      <input
        value={value}
        type={isShowPassword ? "text" : "password"}
        onChange={onChange}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 outline-none"
      />
      {isShowPassword ? (
        <FaRegEyeSlash
          size={22}
          className="text-black cursor-pointer"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEye
          size={22}
          className="text-black cursor-pointer"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default Passinput;
