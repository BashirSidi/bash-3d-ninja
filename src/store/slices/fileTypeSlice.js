import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  fileTypes: [
    "gltf",
    "glb",
    "dae",
    "fbx",
    "obj",
    "jpg",
    "png",
    "json",
    "3mf",
    "stl"
  ],
  fileType: "",
}

export const fileTypesSlice = createSlice({
  name: 'files',
  initialState: initialStateValues,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    fileType: (state, action) => {
      state.fileType = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { fileType } = fileTypesSlice.actions;

export default fileTypesSlice.reducer;