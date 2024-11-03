export default function PasswordInput({ value, onChange }) {
    return (
        <div className="mb-2 relative">
            <div className="absolute bg-white rounded inset-y-0 left-0 p-1.5 m-2 flex items-center pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-violet-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </div>
            <input
                type="password"
                placeholder="At least 8 characters"
                value={value}
                required
                onChange={onChange}
                className="w-full bg-neutral-100 border-gray-300 p-3 pl-14 rounded-lg shadow-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
        </div>
    );
}
