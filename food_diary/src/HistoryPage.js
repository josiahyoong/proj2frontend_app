// src/HistoryPage.js

import React from 'react';

function HistoryPage({ entries }) {
  return (
    <div>
      <h2>History</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;
