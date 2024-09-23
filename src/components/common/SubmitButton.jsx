export default function SubmitButton({ text, onClick }) {
    return (
        <button
            type="submit"
            onClick={onClick}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-light py-3 rounded-lg">
            {text}
        </button>
    );
}