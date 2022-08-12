import React, {createContext, useState} from 'react';
// import {useState} from 'react';
import './App.css';
import NavBar from './NavBar.jsx';
import Contents from './Contents.jsx';
import TestBox from './TestBox.jsx';
import {ThemeProvider} from './ThemeContext.jsx';

function App() {

	return (
		<ThemeProvider>
			<main>
				<NavBar />
				<Contents />
				<TestBox />
			</main >
		</ThemeProvider>
	)
}



export default App;