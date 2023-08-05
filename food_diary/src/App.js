// src/App.js
// src/App.js

import React, { useState } from 'react';
import LoginPage from './LoginPage';
import DataEntryPage from './DataEntryPage';
import HistoryPage from './HistoryPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [entries, setEntries] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleAddEntry = (data) => {
    setEntries([...entries, data]);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <DataEntryPage onAddEntry={handleAddEntry} />
          <HistoryPage entries={entries} />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

// import React from 'react';
// import Counter from './Counter2';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import HelloWorld from './HelloWorld'; // Import HelloWorld component
// import Greeting from './Greeting'; // Import Greeting component

// function App() {
//   return (
//     <div className="App">
//       <HelloWorld /> {/* Use HelloWorld component */}
//       <Greeting name="Alice" /> {/* Use Greeting component with name prop */}
//       <Greeting name="Bob" />
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
