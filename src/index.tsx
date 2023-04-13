import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import { ThemeProvider } from 'styled-components';
import UiTheme from './UI/Theme/theme';
import "./index.css"

const root =
	createRoot(document.getElementById("root") as HTMLElement);
	root.render(
		<React.StrictMode>
			<ThemeProvider theme={UiTheme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	);
