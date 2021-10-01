import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  co2PriceIs: 0,
  regPriceIs: 0,
  euroStand: '',
  co2Amount: 0,
  co2Cof: { regCof: 0, useCof: 0 },
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
      action.payload >= 251 &&
        ([state.co2Cof.regCof, state.co2Cof.useCof] = [3, 0.36]);
      action.payload <= 250 &&
        action.payload >= 201 &&
        ([state.co2Cof.regCof, state.co2Cof.useCof] = [2.2, 0.28]);
      action.payload <= 200 &&
        action.payload >= 161 &&
        ([state.co2Cof.regCof, state.co2Cof.useCof] = [1.5, 0.19]);
      action.payload <= 160 &&
        action.payload >= 131 &&
        ([state.co2Cof.regCof, state.co2Cof.useCof] = [1.1, 0.14]);
      action.payload <= 130 &&
        ([state.co2Cof.regCof, state.co2Cof.useCof] = [0, 0]);
    },
    setEuroStand(state, action) {
      state.euroStand = action.payload;
    },
    setCarType(state, action) {
      for (const key in state.carType) {
        key === action.payload
          ? (state.carType[key].checked = !state.carType[key].checked)
          : (state.carType[key].checked = false);
      }
    },
    calculateCost(state) {
      for (const key in state.carType) {
        if (state.carType[key].checked) {
          const euroStand = state.euroStand;
          const euroStandCof = state.carType[key][euroStand];
          state.regPriceIs =
            state.co2Amount * state.co2Cof.regCof * euroStandCof;
          state.co2PriceIs =
            state.co2Amount * state.co2Cof.useCof * euroStandCof;
        }
      }
    },
  },
});

export const { setEuroStand, setCo2Amount, setCarType, calculateCost } =
  calculatorReducer.actions;
export default calculatorReducer.reducer;
