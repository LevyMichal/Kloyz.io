export default function SubmitButton({ text, onClick }) {
    return (
        <button
            type="submit"
            onClick={onClick}
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-normal py-3">
            {text}
        </button>
    );
}