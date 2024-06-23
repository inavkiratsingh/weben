import React from 'react'
import '../app/globals.css'

function Navbar() {
  return (
    <div className='w-full px-64 py-10 flex items-center gap-20'>
        <div className="menu w-6 flex flex-col gap-2">
            <div className="ham1 border-[1px] bg-zinc-100"></div>
            <div className="ham2 border-[1px] bg-zinc-100"></div>
        </div>
        <div className="logo text-3xl grotesk">weben</div>
        <div className="paging ml-32 mt-1 text-sm grotesk">Hello</div>
    </div>
  )
}

export default Navbar