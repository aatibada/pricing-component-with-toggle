import { useState } from 'react';
import PageHeading from "./PageHeading";
import Cards from "./Cards";
import plans from './plans'
import './App.css';

function App() {
  const [pricing, setPricing] = useState('monthly');

  return (
    <div className="App">
      <PageHeading pricing={pricing} setPricing={setPricing} />
      <Cards pricing={pricing} />
    </div>
  );
}

export default App;
