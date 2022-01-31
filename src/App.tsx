import { ThemeProvider } from 'styled-components';

import MainApp from './modules/layout/components/AppContainer';
// import Sidebar from './modules/sidebar/components/Sidebar';
import Form from './modules/compoundEffectFormula/components/Form';
import PayAmountForm from './modules/compoundEffectFormula/components/PayAmountForm';
import theme from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainApp>
        {/* <Sidebar /> */}
        <Form />
        <PayAmountForm />
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
