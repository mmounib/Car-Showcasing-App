'use client'
import React, {MouseEventHandler} from 'react';

interface btn {
    text: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
}
const ButtonChanger = ({text, handleClick}: btn) => {

    return (
        <button onClick={handleClick} className="font-semibold text-white mt-16 text-lg rounded-[5px] max-sm:text-sm bg-primary-blue py-4 px-8 ">{text}</button>
    )
};

export default ButtonChanger;