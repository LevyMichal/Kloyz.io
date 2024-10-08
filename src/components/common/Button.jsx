export default function Button({ text, onClick }) {
    return (
        <button
            className=" text-neutral-100 text-sm bg-violet-500 py-2 pl-3 pr-4 z-10 rounded-full hover:bg-violet-700"
            onClick={onClick}>
            {text}
        </button>
    )
}
