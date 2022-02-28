import { useState } from 'react';
import data from './sample/quotes.json';
import './App.css';
import Card from './components/CardComponent/Card';

function App() {
  const [quotes] = useState(data);

  return (
    <div className="container">
      <Card quotes={quotes} />
    </div>
  );
}

export default App;
