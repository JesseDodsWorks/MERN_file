import React from 'react'
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';

export default function App() {

		return (
			<div>
				<h3>inside App</h3>
				<BrowserRouter>
					<Routes>
						<Route element={<Main />} path="/home" />
					
					</Routes>
				</BrowserRouter>
			</div>
		);
	}

