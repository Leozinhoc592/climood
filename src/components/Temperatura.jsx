import React, { useEffect, useState } from 'react';

const Temperatura = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&hourly=temperature_2m')
      .then(res => res.json())
      .then(json => {
        setData(json.hourly);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando clima...</p>;
  if (!data) return <p>Erro ao carregar dados.</p>;

  return (
    <div>
      <h2>Temperatura por hora</h2>
      <ul>
        {data.time.map((time, index) => (
          <li key={index}>
            {new Date(time).toLocaleString()} - {data.temperature_2m[index]}°C
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Temperatura;
