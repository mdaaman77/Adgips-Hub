import React from 'react'

function Hero() {
  return (
    <div className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
      <div className="bg-black/70 w-full py-20">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Placement Records
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero