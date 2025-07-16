import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@app/App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes/default';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
