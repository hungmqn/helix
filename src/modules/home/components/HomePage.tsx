import Icon from '../../../shared/Icon';
import Typography from '../../../shared/Typography';
import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const HomePage = () => {
  return (
    <PageContainer>
      <PageHeader text="Hello There" />

      <Typography.Text style={{ textAlign: 'center' }}>
        <strong>Welcome to my website!</strong>
        <br />I am Hung, a software engineer. I hid some useful stuff here, hope
        you find it!
      </Typography.Text>
      <Typography.Text tagName="div" style={{ textAlign: 'center' }}>
        <Icon icon="heart" />
      </Typography.Text>
    </PageContainer>
  );
};

export default HomePage;
