import 'flowbite';

export default function Input({ type, placeholder, value, required, onChange }) {
    return (
        <div className="relative z-0 w-full mb-6 group">
            <input
                type={type}
                value={value}
                placeholder=''
                required={required}
                onChange={onChange}
                className="block py-3 px-2 w-full text-base text-neutral-900 bg-transparent border border-neutral-300 rounded-lg focus:ring-0 focus:border-violet-500 peer"
            />
            <label
                htmlFor=""
                className="px-3 absolute text-base text-neutral-600 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9 "
            >
                {placeholder}
            </label>
        </div>
    );
}