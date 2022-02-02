import { ThemeProvider } from 'styled-components';

import MainApp from './modules/layout/components/AppContainer';
import YogaMainPage from './modules/yoga/components/MainPage';

import theme from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainApp>
        <YogaMainPage />
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
