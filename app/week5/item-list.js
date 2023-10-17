import React, { useState } from 'react';
import Item from './item';
import { useClient } from 'react';

function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [grouped, setGrouped] = useState(false);

  // ...rest of your component code

  return (
    <div>
      {/* ...your JSX code... */}
    </div>
  );
}

// Mark the ItemList component as a client component

