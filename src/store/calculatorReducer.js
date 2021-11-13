import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usagePriceIs: 0,
  registrationPriceIs: 0,
  euroStandard: '',
  co2Amount: '',
  co2Coefficient: { registrationCof: 0, useCof: 0 },
  carType: {
    diesel: { checked: false, Euro6: 1.7, Euro5: 2, Euro43: 2.3, Euro21: 2.5 },
    petrol: { checked: false, Euro6: 0.9, Euro5: 1, Euro43: 1.1, Euro21: 1.4 },
    gas: { checked: false, Euro6: 0.8, Euro5: 0.9, Euro43: 1, Euro21: 1.3 },
  },
};

const calculatorReducer = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setCo2Amount(state, action) {
      state.co2Amount = action.payload;
      //Set correct Co2 and registration coefficients (registrationCof, useCof) depending on Co2Amount value.
      let [regCof, useCof] = [0, 0];
      action.payload >= 251 && ([regCof, useCof] = [3, 0.36]);
      action.payload <= 250 &&
        action.payload >= 201 &&
        ([regCof, useCof] = [2.2, 0.28]);
      action.payload <= 200 &&
        action.payload >= 161 &&
        ([regCof, useCof] = [1.5, 0.19]);
      action.payload <= 160 &&
        action.payload >= 131 &&
        ([regCof, useCof] = [1.1, 0.14]);
      action.payload <= 130 && ([regCof, useCof] = [0, 0]);

      [state.co2Coefficient.registrationCof, state.co2Coefficient.useCof] = [
        regCof,
        useCof,
      ];
    },
    setEuroStandard(state, action) {
      state.euroStandard = action.payload;
    },
    setCarType(state, action) {
      //Allow a single checkbox to be checked.
      for (const key in state.carType) {
        key === action.payload
          ? (state.carType[key].checked = !state.carType[key].checked)
          : (state.carType[key].checked = false);
      }
    },
    calculateCost(state) {
      for (const key in state.carType) {
        if (state.carType[key].checked) {
          const euroStandard = state.euroStandard;
          const euroStandCof = state.carType[key][euroStandard];
          state.registrationPriceIs =
            state.co2Amount *
            state.co2Coefficient.registrationCof *
            euroStandCof;
          state.usagePriceIs =
            state.co2Amount * state.co2Coefficient.useCof * euroStandCof;
        }
      }
    },
  },
});

export const { setEuroStandard, setCo2Amount, setCarType, calculateCost } =
  calculatorReducer.actions;
export default calculatorReducer.reducer;
