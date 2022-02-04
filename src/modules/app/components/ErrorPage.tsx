import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Icon from '../../../shared/Icon';

import Typography from '../../../shared/Typography';

interface ErrorPageProps {
  code: 401 | 403 | 404 | 500;
  message?: string;
}

const getMessageFromCode = (code: number) => {
  switch (code) {
    case 401:
      return 'Unauthorized';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Page not found';
    case 500:
      return 'Internal Server Error';
    case 502:
      return 'Internal Server Error';
    default:
      return 'Unknown error';
  }
};

const ErrorPage: FunctionComponent<ErrorPageProps> = ({ code, message }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: theme.space.xxlarge,
      }}
    >
      <Typography.Title
        level={2}
        style={{
          marginBottom: theme.space.large,
        }}
      >
        <span
          style={{
            color: theme.colors.backgroundHard,
            background: theme.colors.primaryText,
            padding: theme.space.medium,
            borderRadius: theme.sizes.small,
          }}
        >
          {code}
        </span>
      </Typography.Title>
      <Typography.Title level={5} style={{ marginBottom: theme.space.large }}>
        {message ? message : getMessageFromCode(code)}
      </Typography.Title>
      <Link
        to="/"
        style={{
          color: theme.colors.primaryText,
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <Icon icon="arrow-left" /> Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
