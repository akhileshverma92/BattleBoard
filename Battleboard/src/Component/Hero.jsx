import React from 'react'
function Hero() {
    return (
        <>
            <main className="flex flex-1 flex-col items-center justify-center text-center p-8 min-h-screen  ">
                <h1 className="text-4xl font-bold mb-4">Track, Play, Dominate!</h1>
                <p className="text-lg mb-6">
                    Your ultimate solution for tracking e-sports tournaments.
                </p>
                <button className="bg-teal-400 text-gray-900 py-2 px-6 rounded-lg hover:bg-teal-500">
                    Get Started
                </button>
                {/* Page content */}

            </main>
        </>
    )
}

export default Hero