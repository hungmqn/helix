import { useTheme } from 'styled-components';
import Typography from '../../../shared/Typography';

import AppNavigator from './AppNavigator';

const AppHeader = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Typography.Title
        style={{
          marginTop: theme.space.xlarge,
          marginBottom: theme.space.xlarge,
        }}
      >
        Hung Nguyen
      </Typography.Title>
      <AppNavigator />
    </div>
  );
};

export default AppHeader;
