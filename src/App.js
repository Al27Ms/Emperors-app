import React, { useState } from 'react';
import EmpList from './EmpList';
import Dynasty from './Dynasty';
import items from './data';
const allDynasties = ['all', ...new Set(items.map((item) => item.dynasty))];

function App() {
  const [listItems, setListItems] = useState(items);
  const [dynasties, setDynasties] = useState(allDynasties);

  const filterList = (dynasty) => {
    if (dynasty === 'all') {
      setListItems(items);
      return;
    }
    const newItems = items.filter((item) => item.dynasty === dynasty);
    setListItems(newItems);
  };

  return (
  <div className='container'>
    <section className='dynasty section'>
      <div className='title'>List of Roman Emperors
        <div className="line"></div>

      </div>
      <div className='wrap'>
        <Dynasty dynasties={dynasties} filterList={filterList}
        />
        <EmpList items={listItems} /></div>
    </section>
    <div className='footer'>
      
    <div className="line"></div>
      <p>Paweł Niziołek 2022</p>
      </div>
  </div>
  );
}

export default App;