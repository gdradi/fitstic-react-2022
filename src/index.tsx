import './index.scss';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App, Var2  } from './components2/app';

import hfudahfudfhdsf from "./components2/app";


const theme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiButton: {
            styleOverrides: {

            },
            defaultProps: {

            }
        }
    }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);