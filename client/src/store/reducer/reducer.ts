import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const getAllUsers:any = createAsyncThunk(
  "user/getAllUsers",
  async () => {
    const response = await axios.get("http://localhost:8080/user");
    return response.data;
  }
);


export const addUser:any = createAsyncThunk(
  "user/addUser",
  async (userData) => {
    const response = await axios.post("http://localhost:8080/user", userData);
    return response.data;
  }
);


const userSlice:any = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle", // Possible values: idle, loading, succeeded, failed
    error: null
  },
  reducers: {
    // Add any synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state:any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state:any, action:any) => {
        state.status = "succeeded";
        state.users.push(action.payload)
      })
      .addCase(addUser.rejected, (state:any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
