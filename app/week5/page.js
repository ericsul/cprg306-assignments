import ItemList from "./item-list";
import Item from "./item";

export default function Page() {
    return (
        <main className ="flex min-h-screen flex-col justify-between">
            <h1 className="text-4xl font-bold m-6 text-center text-blue-300">
                Shopping List
            </h1>
            <ItemList/>
        </main>
    );
}

