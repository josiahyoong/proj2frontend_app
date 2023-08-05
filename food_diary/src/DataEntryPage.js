// src/DataEntryPage.js

import React, { useState } from 'react';

function DataEntryPage({ onAddEntry }) {
  const [data, setData] = useState('');

  const handleAddEntry = () => {
    if (data) {
      onAddEntry(data);
      setData('');
    }
  };

  return (
    <div>
      <h2>Data Entry</h2>
      <textarea
        placeholder="Enter data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAddEntry}>Add Entry</button>
    </div>
  );
}

export default DataEntryPage;
