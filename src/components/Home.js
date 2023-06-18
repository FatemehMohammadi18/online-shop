import React from 'react';
import CategoryMen from './CategoryMen';
import CategoryWomen from './CategoryWomen';
import CategoryJewelery from './CategoryJewelery';
import CategoryElectronics from './CategoryElectronics';
const Home = () => {
    return (
      <div>
        <CategoryJewelery />
        <CategoryMen/>
        <CategoryWomen />
        <CategoryElectronics />
      </div>
    );
  }


export default Home;