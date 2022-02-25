import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { BsPlug } from 'react-icons/bs';
import logoLight from '../public/logo-light.png' 
import logoDark from '../public/logo-dark.png' 

const Home: NextPage = () => {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		let matched = window.matchMedia('(prefers-color-scheme: dark)').matches

		if (matched) {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
	})

	const handleClick = () => {
		//handle search input
	}

  	return (
		<div className={`${darkMode ? 'bg-search-dark ' : 'bg-search-light'}  h-screen w-screen`}>
			<Head>
				<title>Plug</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex h-full w-full flex-col items-center justify-center">
				<div className="-mt-10">
					<Image src={darkMode ? logoDark : logoLight} alt="logo" className="" />
				</div>

				<div className="flex w-1/2 items-center rounded-2xl bg-[#f6f6f6] shadow-xl dark:bg-black">
					<BsPlug className="m-2 h-6 w-6 dark:text-[#008080]" />
					<form onSubmit={handleClick}>
						<input className=" ml-2 w-full rounded-2xl bg-[#f6f6f6] p-2 outline-none dark:bg-black dark:text-white" required/>
					</form>
				</div>
			</main>

			<footer className="flex h-24 w-full items-center justify-center border-t"></footer>
		</div>
	)
}

export default Home
