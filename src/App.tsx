import { ThemeProvider } from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

import MainApp from './modules/layout/components/AppContainer';
import AsanaMainPage from './modules/asana/components/AsanaMainPage';

import theme from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainApp>
        <AsanaMainPage />
        <button
          style={{ marginTop: 100, marginBottom: 100 }}
          onClick={() => scroll.scrollToTop()}
        >
          Top
        </button>
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
