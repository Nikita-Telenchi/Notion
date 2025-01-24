import { createSlice } from "@reduxjs/toolkit";

export class User {
    id: number = 0;
	full_name: string = "";
	department: string = "";
	country: string = "";
	status: string = "";

    constructor(id: number, full_name: string, department: string, country: string, status: string){
        this.id = id;
        this.full_name = full_name;
        this.department = department;
        this.country = country;
        this.status = status;
    }
}

const initialState: User[] = [
	new User(1, "Andrey Olishchuck", "Digital marketing", "Ukraine", "Active"),
	new User(2, "Emma Carson", " Software Development", "USA", "Active"),
	new User(3, "Liam Bennett", "IT Support", "France", "Active"),
	new User(4, "Sophia Diaz", "Project Management", "USA", "Active"),
];

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		// addUser: ( state, action) => {
		// 	state.checker = !state.checker;
		// },
	},
});

// export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
