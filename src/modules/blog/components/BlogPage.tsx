import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';

const BlogPage = () => {
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
          Blog
        </span>
      </Typography.Title>

      <Typography.Text>
        I write when I am interested in something.
      </Typography.Text>
    </Card>
  );
};

export default BlogPage;
