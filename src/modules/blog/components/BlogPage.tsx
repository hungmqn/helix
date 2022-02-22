import Typography from '../../../shared/Typography';
import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const BlogPage = () => {
  return (
    <PageContainer>
      <PageHeader text="Blog" />

      <Typography.Text>
        I write when I am interested in something.
      </Typography.Text>
    </PageContainer>
  );
};

export default BlogPage;
