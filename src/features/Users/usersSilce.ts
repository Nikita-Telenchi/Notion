import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        full_name: "Andrey Olishchuck",
        department: "Digital marketing",
        country: "Ukraine",
        status: "Active",
    },
    {
        id: 2,
        full_name: "Andrey Olishchuck",
        department: "Digital marketing",
        country: "Ukraine",
        status: "Active",
    },
    {
        id: 2,
        full_name: "Andrey Olishchuck",
        department: "Digital marketing",
        country: "Ukraine",
        status: "Active",
    },
    {
        id: 2,
        full_name: "Andrey Olishchuck",
        department: "Digital marketing",
        country: "Ukraine",
        status: "Active",
    }
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // addUser: ( state, action) => {
		// 	state.checker = !state.checker;
		// },
    }
})

// export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;