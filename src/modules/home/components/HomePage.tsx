import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Icon from '../../../shared/Icon';
import Typography from '../../../shared/Typography';

const HomePage = () => {
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
      <Typography.Title
        style={{
          textAlign: 'center',
          marginBottom: theme.space.xxlarge,
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

      <Typography.Text style={{ textAlign: 'center' }}>
        <strong> Hello there, welcome to my website!</strong>
        <br />I am Hung, a software engineer. Some useful myth here, hope you
        find it!
      </Typography.Text>
      <Typography.Text tagName="div" style={{ textAlign: 'center' }}>
        <Icon icon="heart" />
      </Typography.Text>
    </Card>
  );
};

export default HomePage;
