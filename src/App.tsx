import { ThemeProvider } from 'styled-components';

import MainApp from './modules/layout/components/AppContainer';
import AsanaPage from './modules/asana/components/AsanaPage';

import theme from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainApp>
        <AsanaPage />
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
