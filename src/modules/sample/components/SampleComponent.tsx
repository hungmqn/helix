import { useTheme } from 'styled-components';

import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const SampleComponent = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <PageHeader text="Sample Title" />
      <div style={{ marginBottom: theme.space.large }}>Content Here</div>
    </PageContainer>
  );
};

export default SampleComponent;
