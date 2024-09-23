export default function EmailInput({ value, onChange }) {
    return (
        <div className="mb-4 relative">
            <div className="absolute bg-white rounded inset-y-0 left-0 p-1.5 m-2 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 00 19.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </div>
            <input
                type="email"
                placeholder="you@example.com"
                value={value}
                required
                onChange={onChange}
                className="w-full bg-neutral-100 border-gray-300 p-3 pl-14 rounded-lg shadow-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
        </div>
    );
}