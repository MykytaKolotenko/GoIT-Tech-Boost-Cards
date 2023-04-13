import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string,
	fontWeight: {
		normal: number,
		bold: number,
	},
	fontSize: {
		normal:string ,
		btnSize: string,
	},
	lineHeight: {
		textHeight: number,
	},
	color: {
		activeBtnColor: string,
		main: string,
		secondary: string,
	},
	linearGradient: string,
  }
}