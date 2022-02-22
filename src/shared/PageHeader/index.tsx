import { useTheme } from 'styled-components';

import Typography from '../Typography';

const PageHeader = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Typography.Title
      level={2}
      style={{
        textAlign: 'center',
        marginBottom: theme.space.xxlarge,
      }}
      fontWeight="bold"
    >
      <span
        style={{
          padding: `${theme.space.small}px ${theme.space.medium}px`,
          borderTop: `1px solid ${theme.colors.white}`,
          borderBottom: `1px solid ${theme.colors.white}`,
        }}
      >
        {text}
      </span>
    </Typography.Title>
  );
};

export default PageHeader;
