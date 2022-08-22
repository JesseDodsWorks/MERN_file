import React from 'react'
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import Detail from './components/Detail'

export default function App() {

		return (
			<div>
				<BrowserRouter>
					<Routes>
						<Route element={<Main />} path="/home" />
						<Route element={<Detail />}  path="/detail/:id" />
					
					</Routes>
				</BrowserRouter>
			</div>
		);
	}

