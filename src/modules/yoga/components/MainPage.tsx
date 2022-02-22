import Typography from '../../../shared/Typography';
import Yoga from './Yoga';
import Asana from './Asana';
import Kaoshikii from './Kaoshikii';
import TableOfContents from './TableOfContents';
import Massage from './Massage';
import Fasting from './Fasting';
import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const MainPage = () => {
  return (
    <PageContainer>
      <PageHeader text="Yoga" />
      <Typography.Text
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        <strong>
          Dùng cho mục đích lưu nhớ và thuận tiện tham chiếu.
          <br />
          Người mới nên thực hành dưới sự hướng dẫn của chuyên gia hoặc người có
          kinh nghiệm.
        </strong>
      </Typography.Text>
      <Typography.Text
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        This page is a note of all things to remember in my Yoga journey.
        <br />
        Please keep in mind that it is dangerous to do without professional
        guidance.
      </Typography.Text>
      <TableOfContents />
      <Yoga />
      <Asana />
      <Kaoshikii />
      <Massage />
      <Fasting />
    </PageContainer>
  );
};

export default MainPage;
