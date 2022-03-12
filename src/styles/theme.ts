import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
	    background: "#fffbf4",
        text: "#023047",
		footer: "#7d3f3e"
    
	  },
      fonts: {
        heading: 'Fredoka',
        body: 'Fredoka',
    },
	styles: {
		global: {
			body: {
				bg: 'background',
				color: 'text',	
			}	
		}	
	}			
})