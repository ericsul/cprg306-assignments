export default function Item({ name, quantity, category }) {
    return (
        <h2 className="text-2xl border border-yellow-200  bg-pink-100 font-bold text-gray-400 w-full max-w-xs m-4 p-2">
            {[name, quantity, category]}
        </h2>
    );
}


