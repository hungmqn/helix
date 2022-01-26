import { ThemeProvider } from 'styled-components';

import MainApp from './modules/layout/components/AppContainer';
import Sidebar from './modules/sidebar/components/Sidebar';
import theme from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainApp>
        <Sidebar />
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
