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

  if (loading) return <>Carregando...</>;
  if (!data) return <>Erro</>;

  const temperaturaAgora = data.temperature_2m[0];
  return <>{temperaturaAgora}°C</>;
};

export default Temperatura;
