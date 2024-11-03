import React from 'react'

export default function SearchInput({ placeholder }) {
    return (
        <div className=' relative'>
            <div className='absolute flex items-center justify-center inset-y-0 left-0 px-3 pointer-events-none'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 stroke-neutral-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </div>
            <input
                type="text"
                placeholder={placeholder}
                className="w-96 text-neutral-400 text-sm bg-neutral-100 hover:bg-neutral-200 pl-9 pr-10 py-2 rounded-full focus:ring-0 focus:border-violet-500"
            // onChange={search} TODO: handle search
            />
        </div>
    )
}
