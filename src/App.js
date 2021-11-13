import React from 'react';
import { useSelector } from 'react-redux';
import Form from './components/Form/Form';
import Layout from './components/Layout/Layout';

import { Typography } from '@mui/material';

const App = () => {
  const usagePriceIs = useSelector((state) => state.calculator.usagePriceIs);
  const registrationPriceIs = useSelector(
    (state) => state.calculator.registrationPriceIs
  );

  return (
    <Layout>
      <Form />
      <Typography variant='h6' component='h6'>
        {`Registracijos mokestis: ${
          isNaN(registrationPriceIs)
            ? '¯\\_(ツ)_/¯'
            : registrationPriceIs.toFixed(2)
        } €`}
        <br />
        {`Taršos mokestis: ${
          isNaN(usagePriceIs) ? '¯\\_(ツ)_/¯' : usagePriceIs.toFixed(2)
        } €`}
      </Typography>
    </Layout>
  );
};

export default App;
