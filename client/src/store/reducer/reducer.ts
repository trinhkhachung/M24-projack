import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  block: boolean;
}

interface InitialState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: InitialState = {
  users: [],
  status: "idle",
  error: null
};

export const getAllUsers:any = createAsyncThunk<User[]>(
  "user/getAllUsers",
  async () => {
    const response = await axios.get<User[]>("http://localhost:8080/user");
    return response.data;
  }
);

export const addUser:any = createAsyncThunk<User, Omit<User, 'id' | 'block'>>(
  "user/addUser",
  async (userData) => {
    const response = await axios.post<User>("http://localhost:8080/user", userData);
    return response.data;
  }
);

export const blockUser:any = createAsyncThunk<User[], { id: number; block: boolean }>(
  "user/blockUser",
  async (item) => {
    const { id, block } = item;
    await axios.patch(`http://localhost:8080/user/${id}`, { block: !block });
    const response = await axios.get<User[]>("http://localhost:8080/user");
    return response.data;
  }
);
export const addProducts:any = createAsyncThunk(
  "products/addProducts",
  async (newProduct) => {
    const response = await axios.post("http://localhost:8080/products", newProduct);
    return response.data;
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
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
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(blockUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(blockUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(blockUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      })
       .addCase(addProducts.pending, (state:any) => {
        state.status = "loading";
      })
  }
});

export default userSlice.reducer;
