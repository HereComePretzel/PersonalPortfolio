import React from 'react'
import image from "../writing music.jpg"

function Home() {
    return (
        <main>
            <img src={image} alt="Austin playing guitar" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-4 px-8">
            </section>
        </main>
    )
}

export default Home