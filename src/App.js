import React from 'react';
import { useSelector } from 'react-redux';
import Form from './components/Form/Form';
import Layout from './components/Layout/Layout';

import { Typography } from '@mui/material';

const App = () => {
  const co2PriceIs = useSelector((state) => state.calculator.co2PriceIs);
  const regPriceIs = useSelector((state) => state.calculator.regPriceIs);

  return (
    <Layout>
      <Form />
      <Typography variant='h6' component='h6'>
        {`Registracijos mokestis: ${regPriceIs.toFixed(2)} €`}
        <br />
        {`Taršos mokestis: ${co2PriceIs.toFixed(2)} €`}
      </Typography>
    </Layout>
  );
};

export default App;
