import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "addFeed",
  initialState,
  reducers: {
    addFeed: (state, action) => {
      state.number = state.number + action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addFeed } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
