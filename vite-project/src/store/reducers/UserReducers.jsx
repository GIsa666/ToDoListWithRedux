import { createSlice } from "@reduxjs/toolkit";


const loadState = () => {
    try {
      const serializedState = localStorage.getItem("users");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("users", serializedState);
    } catch {
      // ignore write errors
    }
  };

const userSlice = createSlice({
  name: "users",
  initialState: loadState(),
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      saveState(state);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        saveState(state);
      }
    },
    deleteUser:(state,action)=>{
const {id}=action.payload;
const index = state.findIndex((user) => user.id === id);
if (index !== -1) {
  state.splice(index, 1);
  saveState(state);
}
    }
  },
});
export const {addUser,updateUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;
