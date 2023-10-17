import React from 'react';
import ItemList from './item-list';
import { useClient } from 'react';


function Page() {
return (
    <div className="container mx-auto p-4">
    <ItemList />
    </div>
);
}

export default Page;


