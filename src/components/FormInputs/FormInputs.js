import { useSelector, useDispatch } from 'react-redux';

import {
  OutlinedInput,
  InputAdornment,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material';

import {
  setEuroStandard,
  setCo2Amount,
} from '../../store/calculatorReducer.js';

const FormInputs = () => {
  const euroStandard = useSelector((state) => state.calculator.euroStandard);
  const dispatch = useDispatch();

  return (
    <>
      <FormControl sx={{ my: 3, minWidth: 180 }}>
        <InputLabel id='eurstand'>Euro Standartas</InputLabel>
        <Select
          labelId='eurstand'
          id='eurstand'
          label='Euro Standartas'
          value={euroStandard}
          autoWidth
          onChange={(e) => dispatch(setEuroStandard(e.target.value))}
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
        inputProps={{ maxLength: 3 }}
        endAdornment={<InputAdornment position='end'>CO2 g/km</InputAdornment>}
      />
    </>
  );
};

export default FormInputs;
