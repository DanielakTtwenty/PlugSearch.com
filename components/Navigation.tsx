import { useEffect, useState } from 'react'
import { BsPlug } from 'react-icons/bs'
import { IoImagesOutline } from 'react-icons/io5'
import { ImPlay } from 'react-icons/im'
import { BiPaperPlane } from 'react-icons/bi'

const Navigation = () => {
    const [isActive, setIsActive] = useState<string>("All")

    const handleClick = (e: any) => {
        // console.log(e.target.innerText)
        setIsActive(e.target.innerText)
    }

    return (
        <div className="flex flex-col">
            <div className="flex space-x-6 ml-[310px] mb-2 dark:text-[#c4c4c4] font-roboto">

                <div className="flex flex-col relative cursor-pointer" onClick={handleClick}>  
                    <div className="flex justify-center items-center" >
                        <BsPlug className="text-black dark:text-[#c4c4c4] font-roboto"/>
                        <h1>All</h1>
                    </div>
                    {(isActive === 'All') && <div className="w-[40px] dark:bg-[#4cd4cb] bg-[#1d4e4b] h-[2px] absolute -bottom-2"/>}
                </div>

                <div className="flex flex-col relative cursor-pointer" onClick={handleClick}>  
                    <div className="flex justify-center items-center space-x-1">
                        <IoImagesOutline className="text-black dark:text-[#c4c4c4] font-roboto"/>
                        <h1>Images</h1>
                    </div>
                    {(isActive === 'Images') && <div className="w-[80px] dark:bg-[#4cd4cb] bg-[#1d4e4b] h-[2px] absolute -bottom-2"/>}
                </div>

                <div className="flex flex-col relative cursor-pointer" onClick={handleClick}>  
                    <div className="flex justify-center items-center space-x-1">
                        <ImPlay className="text-black dark:text-[#c4c4c4] font-roboto"/>
                        <h1>Videos</h1>
                    </div>
                    {(isActive === 'Videos') && <div className="w-[80px] dark:bg-[#4cd4cb] bg-[#1d4e4b] h-[2px] absolute -bottom-2"/>}
                </div>

                <div className="flex flex-col relative cursor-pointer" onClick={handleClick}>  
                    <div className="flex justify-center items-center space-x-1">
                        <BiPaperPlane className="text-black dark:text-[#c4c4c4] font-roboto"/>
                        <h1>News</h1>
                    </div>
                    {(isActive === 'News') && <div className="w-[65px] dark:bg-[#4cd4cb] bg-[#1d4e4b] h-[2px] absolute -bottom-2"/>}
                </div>

            </div>
            <div className="w-screen h-[1px] bg-[#717271]"></div>     
        </div>
    )
}

export default Navigation
