import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BsPlug } from 'react-icons/bs'
import Footer from '../components/Footer'

const Home: NextPage = () => {
	const handleClick = () => {
		//handle search input
	}

  	return (
		<div className='dark:bg-search-dark bg-search-light  h-screen w-screen overflow-auto'>
			<Head>
				<title>Plug</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex h-full w-full flex-col items-center justify-center ">
				<div className="-mt-10 dark:bg-logo-dark bg-logo-light w-[500px] h-[200px] bg-cover"></div>

				<div className="flex w-1/2 items-center rounded-2xl bg-[#f6f6f6] shadow-xl dark:bg-black">
					<BsPlug className="m-2 h-6 w-6 dark:text-[#008080]" />
					<form onSubmit={handleClick}>
						<input className=" ml-2 w-full rounded-2xl bg-[#f6f6f6] p-2 outline-none dark:bg-black dark:text-white" required/>
					</form>
				</div>
			</main>
			
			<footer>
				<Footer />
			</footer>
		</div>
	)
}

export default Home
