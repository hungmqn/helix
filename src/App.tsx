import { ThemeProvider } from 'styled-components';

import MainApp from './modules/layout/components/AppContainer';
// import Sidebar from './modules/sidebar/components/Sidebar';
import Form from './modules/compoundEffectFormula/components/Form';
import theme from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainApp>
        {/* <Sidebar /> */}
        <Form />
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
