import { useState, useEffect } from 'react';

import Alert from './components/Alert';
import Search from './components/Search';
import Product from './components/Product';

import './App.css';

function App() {
  const [product, setProduct] = useState({});
  const [alert, setAlert] = useState(false);

  return (
    <div className="App">
      <Search 
        setProduct={setProduct} 
        alert={alert} 
        setAlert={setAlert}
      />
      {alert && !product.id ? 
        <Alert 
          setAlert={setAlert} 
          setProduct={setProduct}
        />
      :
        <Product item={product} />
      }
    </div>
  );
}

export default App;
