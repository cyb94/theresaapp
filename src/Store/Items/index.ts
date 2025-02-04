import {createSlice} from '@reduxjs/toolkit';

type state = {
  items: any[] | null;
};

const initialState: state = {
  items: null,
};

export const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items?.find(item => item.id === action.payload.id);
      if (item) {
        return;
      }
      if (state.items) {
        state.items.push(action.payload);
      } else {
        state.items = [action.payload];
      }
    },
    resetItems: state => {
      state.items = null;
    },
    removeItem: (state, action) => {
      if (state.items) {
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {addItem, removeItem, resetItems} = ItemsSlice.actions;

export default ItemsSlice.reducer;
