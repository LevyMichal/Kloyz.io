export default function Button({ text, onClick }) {
    return (
        < button
            className={text === "+ New User"
                ? " text-black text-sm  py-2 pl-3 pr-4 z-10 border-neutral-200 border rounded-full hover:shadow-lg"
                : " text-neutral-100 text-sm bg-violet-500 py-2 pl-3 pr-4 z-10 rounded-full hover:bg-violet-700 hover:shadow-lg"}
            onClick={onClick}>
            {text}
        </ button>
    )
}
