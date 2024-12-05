import { createSlice } from "@reduxjs/toolkit";

interface IModalProperties {
  isModalOpen: boolean
}

const initialState: IModalProperties = {
  isModalOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state ) {
      state.isModalOpen = true
    },
    closeModal(state) {
      state.isModalOpen = false
    }
  }
});

export const modalActions = modalSlice.actions;
export default modalSlice;