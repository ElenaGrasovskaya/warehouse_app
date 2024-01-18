import { createSlice } from '@reduxjs/toolkit';

type Position = {
  x: number;
  y: number;
};

const startPosition: Position = { x: 0, y: 0 };

const posiitonSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {
    moveLeft: (position) => {
      position.x -= 1;
      return position;
    },
    moveRigh: (position) => {
      position.x += 1;
      return position;
    },
    moveUp: (position) => {
      position.y -= 1;
      return position;
    },
    moveDown: (position) => {
      position.y += 1;
      return position;
    },
  },
});

export const actions = posiitonSlice.actions;

export default posiitonSlice.reducer;
