import { FaAngleLeft, FaEllipsisV, FaAngleRight } from 'react-icons/fa'
import Avatar from '../assets/images/avatar.jpg'
import Dog1 from '../assets/images/dog-image-1.jpg'
import Dog2 from '../assets/images/dog-image-2.jpg'
import Dog3 from '../assets/images/dog-image-3.jpg'
const Phone = () =>{
    return (
        <div className=" flex flex-col bg-Light-Grayish-Violet max-w-[270px]  w-3/4 h-auto rounded-[2.5rem] border-[0.75rem] border-white shadow-2xl">
            <div className="bg-gradient-to-r from-Light-Violet  to-Light-Magenta
                flex w-full h-20 items-center justify-around  relative rounded-t-3xl rounded-b-lg overflow-hidden
            ">
                <div className=' bg-white w-36 h-5 rounded-full absolute top-[-16%] right-auto left-auto'></div>
                <div className='flex items-center pt-2'>
                    <div className='text-white cursor-pointer'> <FaAngleLeft /></div>
                    <div className=' relative mr-2 max-w-[1.5rem] flex justify-center items-center border-white border rounded-full'>
                        <img src={Avatar} className='w-full h-full rounded-full' />
                    </div>
                    <div>
                        <div className=' text-white text-sm'>Samuel Green</div>
                        <div className=' text-Pale-Violet text-xs'>Available to Walk</div>
                    </div>
                </div>
                <div className=' text-sm text-Pale-Violet pt-2 cursor-pointer'>
                    <FaEllipsisV />
                </div>
            </div>
            <div className='p-3 h-full max-h-full'>
                <ul className=' text-[0.60rem] flex flex-col'>
                    <li className='left'> <p> That sounds great. I'b be <br /> happy to discuss more </p></li>
                    <li className='left'>  <p> Could you send over some <br /> pictures of your dog, please? </p></li>
                    <li className='right'>
                        <ul>
                            <li> <img src={Dog1} /> </li>
                            <li> <img src={Dog2} /> </li>
                            <li> <img src={Dog3} /> </li>
                        </ul>
                    </li>
                    <li className='right'> <p>Here are a few pictures. She's <br /> a happy girl!!</p> </li>
                    <li className='right  max-w-[45%] min-w-fit'>  <p className=' float-right w-full text-end'> Can you make it? </p></li>
                    <li className='left'><p>
                        She looks so happy! The time <br /> we discuss works. How <br /> long shall i take her out for?
                    </p>
                    </li>
                    <li className='left cursor-pointer'>
                        <div>
                            <input type="checkbox" name="30-min" id="30-min" />
                            <label htmlFor="30-min">30 minute walk</label>
                        </div>
                        <div className='price'>$29</div>
                    </li>
                    <li className='left cursor-pointer'>
                        <div>
                            <input type="checkbox" name="1-hr" id="1-hr" />
                            <label htmlFor="1-hr">1 hour walk</label>
                        </div>
                        <div className='price'>$49</div>
                    </li>
                </ul>
                <div className=' relative'>
                    <input type="text" placeholder='Type a message...' className=' rounded-2xl text-[0.5rem] w-full h-8 pl-4 placeholder-Grayish-Blue'/>
                    <div className=' w-6 h-6 bg-Very-Dark-Desaturated-Violet text-white flex justify-center items-center rounded-full
                        absolute  right-1 top-1 cursor-pointer
                    '>
                        <FaAngleRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phone