import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

const search = () => {
    return (
        <div className="bg-search-light dark:bg-search-dark h-screen w-screen overflow-auto">
            <Header/>
            <Navigation/>

            <Footer />
        </div>
    )
}

export default search
