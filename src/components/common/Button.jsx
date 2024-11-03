export default function Button({ text, onClick }) {
    return (
        < button
            className={text === "+ New User"
                ? " text-black text-sm  py-2 pl-2 pr-4 z-10 border-neutral-200 border hover:shadow-md"
                : " text-neutral-100 text-sm bg-violet-500 py-2 pl-2 pr-4 z-10  hover:bg-violet-700 "}
            onClick={onClick}>
            {text}
        </ button>
    )
}
