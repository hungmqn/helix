import styled, { useTheme } from 'styled-components';

import { backgroundRadial } from '../../../shared/common/gradients';

import PageHeader from '../../../shared/PageHeader';
import AppFooter from '../../app/components/AppFooter';

const StyledPageContainer = styled.div`
  ${backgroundRadial}
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.linkText};
`;

const Gallery = () => {
  const theme = useTheme();

  return (
    <StyledPageContainer>
      <PageHeader text="Gallery" />
      <div style={{ marginBottom: theme.space.large }}>Content Here</div>
      <AppFooter />
    </StyledPageContainer>
  );
};

export default Gallery;
