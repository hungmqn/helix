import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';

const HomePage = () => {
  const theme = useTheme();

  return (
    <Card
      style={{
        padding: theme.space.xxlarge,
        minWidth: '70%',
        maxWidth: '90%',
        marginTop: theme.space.xxlarge,
        marginBottom: theme.space.xxlarge,
      }}
    >
      <Typography.Title
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: theme.space.large,
        }}
        fontWeight="bold"
      >
        <span
          style={{
            color: theme.colors.backgroundHard,
            backgroundColor: theme.colors.white,
            padding: `${theme.space.small}px ${theme.space.medium}px`,
            borderRadius: theme.sizes.small,
          }}
        >
          Home Page
        </span>
      </Typography.Title>
    </Card>
  );
};

export default HomePage;
