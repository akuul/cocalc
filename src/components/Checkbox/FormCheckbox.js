import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { setCarType } from '../../store/calculatorReducer';

let label;

const FormCheckbox = () => {
  const carType = useSelector((state) => state.calculator.carType);
  const dispatch = useDispatch();

  const checkboxlist = [];

  for (const key in carType) {
    key === 'diesel' && (label = 'Dyzelinas');
    key === 'petrol' && (label = 'Benzinas');
    key === 'gas' && (label = 'Dujos');

    checkboxlist.push(
      <FormControlLabel
        key={key}
        onChange={(e) => dispatch(setCarType(e.target.value))}
        value={key}
        control={<Checkbox inputProps={{ 'aria-label': { label } }} />}
        label={label}
        checked={carType[key].checked}
      />
    );
  }

  return (
    <FormGroup
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {checkboxlist}
    </FormGroup>
  );
};

export default FormCheckbox;
