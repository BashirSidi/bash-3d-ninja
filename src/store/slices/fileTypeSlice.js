import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  fileTypes: ["gltf", "glb"],
}

export const fileTypesSlice = createSlice({
  name: 'files',
  initialState: initialStateValues,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    fileTypes: (state, action) => {
      state.fileTypes;
    },
  },
})

// Action creators are generated for each case reducer function
export const { fileTypes } = fileTypesSlice.actions;

export default fileTypesSlice.reducer;