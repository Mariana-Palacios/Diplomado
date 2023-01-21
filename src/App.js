import React, { useEffect, useState } from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const city = "Malambo"
    const apiKey = "fd7838c55065e8c19dc3acb07e125621"
    useEffect(() => {
        const intervalId = setInterval(() => {
        // código para hacer la llamada a la API
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error));
        }, 1000); // 30 minutos en milisegundos 30 * 60 * 1000
        return () => clearInterval(intervalId);
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
      }
    
      if (!data) {
        {console.log(data)}
        return <p>Loading...</p>;
      }
    
    return (
        <div>
          {console.log(data)}
          <p>temperature: {data["main"]["temp"]}</p>
          <p>humidity: {data["main"]["humidity"]}</p>
        </div>
    );
}

export default App;