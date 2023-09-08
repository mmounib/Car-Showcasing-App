import React from 'react';

const ButtonChanger = ({text}: {text: string}) => {
    return (
        <button className="font-semibold  mt-16 text-lg rounded-[5px] max-sm:text-sm bg-primary-blue py-4 px-8 ">{text}</button>
    )
};

export default ButtonChanger;