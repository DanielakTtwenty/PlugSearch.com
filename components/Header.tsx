import React from 'react'
import { BsPlug } from 'react-icons/bs'

const Header = () => {

    const handleClick = () => {
        // empty handleClick function
    }
    return (
        <div className="flex h-[100px] items-center">
            <div className="flex justify-center items-center w-[300px] h-[100px]">
                <div className="w-[200px] h-[90px] bg-logo-light dark:bg-logo-dark bg-contain"></div>
            </div> 

            <div className="flex w-1/2 h-[50px] rounded-2xl p-2 items-center bg-[#f6f6f6] dark:bg-black m-2">
					<BsPlug className=" h-6 w-6 dark:text-[#008080]" />
					<form onSubmit={handleClick}>
						<input className=" ml-4 w-[500px] bg-[#f6f6f6] outline-none dark:bg-black dark:text-white" required/>
					</form>
			</div>
        </div>
    )
}

export default Header
