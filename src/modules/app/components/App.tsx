import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import AppContainer from './AppContainer';
import theme from '../../../shared/theme';

const GlobalStyle = createGlobalStyle`
/**Global style here */
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
