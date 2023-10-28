export default function Item({ name, quantity, category }) {
    return (
        <h2 className="text-2xl border border-red-300  bg-purple-300 font-bold text-blue-400 w-full max-w-xs m-4 p-2">
            {[name, quantity, category]}
        </h2>
    );
}


