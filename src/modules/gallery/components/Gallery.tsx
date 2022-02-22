import { useTheme } from 'styled-components';

import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const Gallery = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <PageHeader text="Gallery" />
      <div style={{ marginBottom: theme.space.large }}>Content Here</div>
    </PageContainer>
  );
};

export default Gallery;
