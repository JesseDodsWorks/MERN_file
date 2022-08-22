import React from 'react'
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Detail from './components/Detail'
import Update from './components/Update'

export default function App() {

		return (
			<div>
				<BrowserRouter>
					<Routes>
						<Route element={<Main />} path="/home" />
						<Route element={<Detail />}  path="/detail/:id" />
						<Route element={<Update />} path="/update/:id" />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}

