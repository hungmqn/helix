import { ReactElement } from 'react';
import styled from 'styled-components';

import { useCurrentPath } from '../../../shared/hooks/useCurrentPath';
import MenuItem from './MenuItem';

const StyledSidebar = styled.div`
  border-radius: ${({ theme }) => theme.sizes.medium}px;
  padding: ${({ theme }) => theme.space.xlarge}px;

  transition: ${({ theme }) => theme.transitions.boxShadowCubic};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
`;

const Sidebar = (): ReactElement => {
  const currentPath = useCurrentPath();

  const handleNavigate = (path: string) => {
    console.log(path);
    window.location.assign(path);
  };
  return (
    <StyledSidebar>
      <MenuItem
        icon="home"
        text="KC Home"
        active={currentPath === '/'}
        onClick={() => handleNavigate('/')}
      />
      <MenuItem
        icon="folder"
        text="KC Folder"
        active={currentPath === '/folder'}
        onClick={() => handleNavigate('/folder')}
      />
      <MenuItem
        icon="quill"
        text="KC Writing"
        active={currentPath === '/writing'}
        onClick={() => handleNavigate('/writing')}
      />
      <MenuItem
        icon="mail"
        text="KC Mail"
        active={currentPath === '/mail'}
        onClick={() => handleNavigate('/mail')}
      />
    </StyledSidebar>
  );
};

export default Sidebar;
