export const getPedidos = async (pedidos, cliente) => {
   
  const result = await fetch(`https://api-b2c.sbx.ransaaplicaciones.com/getPedidos/${pedidos}?cliente=${cliente}`, {
    method: 'GET',
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error('error rest api', err));
  return (result);
  };
