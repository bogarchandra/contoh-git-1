import React from 'react'
import SearchIcon from "../assets/icons/SearchIcon.svg"

const Navbar = () => {
  return (
    <>
      <header className="w-full h-auto flex flex-col items-center justify-between gap-y-4 px-1 py-4 shadow-md sm:flex-row sm:px-6">
        <a href="#" className="text-yellow text-lg">
          Library App
        </a>
        <div className="flex flex-row items-center gap-4">
          <div className="relative h-full flex items-center">
            <input
              type="search"
              placeholder="Search Books"
              className={`w-fit pl-2 py-2 outline-none border-none font-normal transition-transform origin-right shadow-md rounded-lg`}
            />
            <img
              src={SearchIcon}
              alt=""
              className="w-6 absolute top-1/2 right-1 -translate-y-1/2"
            />
          </div>
          <div className="rounded-full w-9 h-9 flex items-center justify-center bg-grey">
            MK
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar