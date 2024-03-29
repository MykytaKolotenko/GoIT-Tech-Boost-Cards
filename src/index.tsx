import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App'
import { ThemeProvider } from 'styled-components'
import UiTheme from './UI/Theme/theme'
import './index.css'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root =
	createRoot(document.getElementById("root") as HTMLElement);
	root.render(
		<React.StrictMode>
			<BrowserRouter >
				<ThemeProvider theme={UiTheme}>
					<Provider store={store}>
						<App />
					</Provider>
				</ThemeProvider>
			</BrowserRouter>
		</React.StrictMode>
	)
