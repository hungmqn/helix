import { ReactElement } from 'react';

// import MenuItem from './MenuItem';
import Card from '../../../shared/Card';

const Sidebar = (): ReactElement => {
  // const handleNavigate = (path: string) => {
  //   window.location.assign(path);
  // };
  return (
    <Card>
      {/* <MenuItem
        icon="home"
        text="KC Home"
        active={currentPath === '/'}
        onClick={() => handleNavigate('/')}
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
      /> */}
    </Card>
  );
};

export default Sidebar;
