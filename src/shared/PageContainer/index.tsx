import { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import Card from '../Card';

const PageContainer = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <Card
      style={{
        boxSizing: 'border-box',
        padding: theme.space.xxlarge,
        marginTop: theme.space.xxlarge,
        marginBottom: theme.space.xxlarge,
        width: '100%',
      }}
    >
      {children}
    </Card>
  );
};

export default PageContainer;
