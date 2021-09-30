import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setEuroStand,
  setCo2Amount,
  setCarType,
  calculateCost,
} from './store/calculatorReducer';

import {
  OutlinedInput,
  InputAdornment,
  Container,
  Button,
  Box,
  CssBaseline,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material';

const App = () => {
  const co2PriceIs = useSelector((state) => state.calculator.co2PriceIs);
  const regPriceIs = useSelector((state) => state.calculator.regPriceIs);
  const euroS = useSelector((state) => state.calculator.euroStand);
  const carType = useSelector((state) => state.calculator.carType);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(calculateCost());
  };

  return (
    <Container
      sx={{
        mt: 20,
      }}
      component='main'
      maxWidth='xs'
    >
      <CssBaseline />
      <Box
        component='div'
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          px: 3,
          py: 4,
        }}
      >
        <Box
          component='form'
          onSubmit={formSubmitHandler}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <FormControlLabel
              onChange={(e) => dispatch(setCarType(e.target.value))}
              value='diesel'
              control={<Checkbox inputProps={{ 'aria-label': 'Dyzelinas' }} />}
              label='Dyzelinas'
              checked={carType.diesel.checked}
            />
            <FormControlLabel
              onChange={(e) => dispatch(setCarType(e.target.value))}
              value='petrol'
              control={<Checkbox inputProps={{ 'aria-label': 'Benzinas' }} />}
              label='Benzinas'
              checked={carType.petrol.checked}
            />
            <FormControlLabel
              onChange={(e) => dispatch(setCarType(e.target.value))}
              value='gas'
              control={<Checkbox inputProps={{ 'aria-label': 'Dujos' }} />}
              label='Dujos'
              checked={carType.gas.checked}
            />
          </FormGroup>
          <FormControl sx={{ my: 3, minWidth: 180 }}>
            <InputLabel id='eurstand'>Euro Standartas</InputLabel>
            <Select
              labelId='eurstand'
              id='eurstand'
              label='Euro Standartas'
              value={euroS}
              autoWidth
              onChange={(e) => dispatch(setEuroStand(e.target.value))}
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={'Euro6'}>Euro 6</MenuItem>
              <MenuItem value={'Euro5'}>Euro 5</MenuItem>
              <MenuItem value={'Euro43'}>Euro 4-3</MenuItem>
              <MenuItem value={'Euro21'}>Euro 2-1</MenuItem>
            </Select>
          </FormControl>
          <OutlinedInput
            onChange={(e) => dispatch(setCo2Amount(e.target.value))}
            fullWidth={true}
            id='co2value'
            name='co2value'
            sx={{ px: 2 }}
            endAdornment={
              <InputAdornment position='end'>CO2 g/km</InputAdornment>
            }
          />
          <Button
            size='large'
            type='submit'
            sx={{ mt: 3, mb: 5 }}
            variant='contained'
          >
            Apskaičiuoti
          </Button>
        </Box>
        <Typography variant='h6' component='h6'>
          {`Registracijos mokestis: ${regPriceIs.toFixed(2)} €`}
          <br />
          {`Taršos mokestis: ${co2PriceIs.toFixed(2)} €`}
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
