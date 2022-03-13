import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import Typography from '../../../shared/Typography';
import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const Gallery = () => {
  const theme = useTheme();

  return (
    <div>
      <PageContainer>
        <PageHeader text="Gallery" />
        <div style={{ marginBottom: theme.space.large }}>Content Here</div>
        <Link to="/">
          <Typography.Title
            style={{
              marginTop: theme.space.xlarge,
              marginBottom: theme.space.xlarge,
            }}
          >
            Hung Nguyen
          </Typography.Title>
        </Link>
      </PageContainer>
    </div>
  );
};

export default Gallery;
