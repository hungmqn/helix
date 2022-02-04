import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import AppContainer from './AppContainer';
import AppHeader from './AppHeader';
import AppBody from './AppBody';

import theme from '../../../shared/theme';
import AppFooter from './AppFooter';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <AppHeader />
          <AppBody />
        </BrowserRouter>
        <AppFooter />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
