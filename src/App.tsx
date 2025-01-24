
import './App.css'
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route element={<Users/>} path={"/"} />
				{/* <Route element={<Catalog />} path={"/catalog"} /> */}
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
