import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';

const SampleComponent = () => {
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
          Sample Component
        </span>
      </Typography.Title>
    </Card>
  );
};

export default SampleComponent;
