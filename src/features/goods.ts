import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState:string[] = [];

const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {
    add: (goods, action: PayloadAction<string>) => [...goods, action.payload],
    take: (goods, action: PayloadAction<string>) =>
      goods.filter((good) => good !== action.payload),
    clear: () => [],
  },
});

export const { actions } = goodsSlice;

export default goodsSlice.reducer;
