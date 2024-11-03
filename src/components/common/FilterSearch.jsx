import { useState } from 'react';

export default function FilterSearch({ value, onChange }) {
    return (
        <div className='relative flex items-center'>
            <input
                type="text"
                value={value}
                placeholder="Filter By Name"
                onChange={onChange}
                className="pl-4 py-2 text-sm bg-neutral-100  text-neutral-400 hover:bg-neutral-200 rounded-full focus:ring-0 focus:border-violet-500"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute right-4 w-5 h-5 stroke-neutral-400"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
            </svg>
        </div>
    );
};
