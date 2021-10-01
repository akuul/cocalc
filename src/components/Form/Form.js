import { useDispatch } from 'react-redux';
import { calculateCost } from '../../store/calculatorReducer';

import FormCheckbox from '../Checkbox/FormCheckbox';
import FormInputs from '../FormInputs/FormInputs';

import { Box, Button } from '@mui/material';

const FullForm = () => {
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(calculateCost());
  };
  return (
    <Box
      component='form'
      onSubmit={formSubmitHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormCheckbox />
      <FormInputs />
      <Button
        size='large'
        type='submit'
        sx={{ mt: 3, mb: 5 }}
        variant='contained'
      >
        Apskaičiuoti
      </Button>
    </Box>
  );
};

export default FullForm;
