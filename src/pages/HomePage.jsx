import { useEffect, useState } from 'react';

function HomePage() {

    useEffect(() => {
 

        // Using useEffect to set the background color
        document.body.style.backgroundColor = '#AE445A';
        
        // Clean up function to restore the original background color when the component is unmounted
        return () => {
            document.body.style.backgroundColor = ''; // Restore the original background color
        };
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    return (
        <div className="flex flex-col min-h-screen justify-between fade-in-up">
            {/* Main content */}
            <div className="relative flex flex-col justify-center items-center top-40 transition-all duration-1000 fade-in-up">
                {/* Top Search text */}
                <div className="text-white mx-[200px] pb-4 text-lg text-center">
                    <p>
                        <span className="font-bold">Top Search:</span> Attack on Titan, Naruto, One Piece, Demon Slayer, My Hero Academia, Dragon Ball Z, Jujutsu Kaisen, Tokyo Revengers, Fullmetal Alchemist: Brotherhood, Death Note.....
                    </p>
                </div>

                {/* Form with animation */}
                <form 
                    className="w-full max-w-[700px] backdrop-blur-lg bg-black bg-opacity-50 p-6 rounded-xl mb-4 transition-all duration-1000 fade-in-up">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-3xl bg-transparent focus:ring-blue-500 focus:border-blue-5000 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Dandadan, one piece..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HomePage;
