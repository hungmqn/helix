import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import { backgroundRadial } from '../../../shared/common/gradients';

import Typography from '../../../shared/Typography';
import PageHeader from '../../../shared/PageHeader';

const StyledPageContainer = styled.div`
  ${backgroundRadial}
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const Gallery = () => {
  const theme = useTheme();

  return (
    <StyledPageContainer>
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
    </StyledPageContainer>
  );
};

export default Gallery;
