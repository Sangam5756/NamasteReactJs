import React from 'react'

const GptSearchBar = () => {
    return (

        
        
        <div className='pt-[10%]'>

            <form className='w-1/2 bg-black py-2 mx-auto'>

                <input className='w-[70%] mx-2 py-2 px-2 outline-none ' type="text" placeholder='What do you want to watch today' />
                <button className='mx-5 rounded-lg w-[20%] text-white py-2 bg-red-600'>Search</button>
            </form>


        </div>
        
    )
}

export default GptSearchBar