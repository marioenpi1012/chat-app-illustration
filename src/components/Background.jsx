import React from 'react'
import Phone from './Phone';
import Text from './Text';

const Background = () => {
    return (
        <div className='flex justify-evenly items-center z-10 absolute left-[0%]
        h-screen w-11/12 mx-auto flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-20
        lg:m-auto lg:w-screen xl:w-full 
        '>
            <Phone />
            <Text />
        </div>
    )
}
export default Background;

