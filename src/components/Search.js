import { useState, useEffect } from 'react';


function Search({ setProduct, alert, setAlert }) {
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!alert) {
      setId('');
    }
  }, [alert]);

  const fetchData = async (id) => {
    if (id.length >= 4) {
      setLoading(true);
      let response_data = await fetch(`https://www.homecenter.com.co/s/products/v1/soco?productId=${id}&zoneId=1&priceGroup=10`);
      let data = await response_data.json();
      if (data.result.id !== '') {
        setProduct(data.result);
      } else {
        setProduct({})
        setAlert(true);
      }
      setLoading(false);
    }
  }

  const handleOnChange = (e) => {
    if (!(e.target.value.length > 8)) {
      setId(e.target.value);
    }
  }

  return (
    <div className="Search">
      <div>
        <input className="Search__input" type="number" value={id} onChange={handleOnChange} />
        <button className="Search__button" onClick={() => fetchData(id)} >Buscar</button>
      </div>
      <div className="Search__loading">
        {loading && 
          <p>Cargando ...</p>
        }
      </div>
    </div>
  );
}

export default Search;
