import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';
import Yoga from './Yoga';
import Asana from './Asana';
import Kaoshikii from './Kaoshikii';
import TableOfContents from './TableOfContents';
import Massage from './Massage';
import Fasting from './Fasting';

const MainPage = () => {
  const theme = useTheme();

  return (
    <Card
      style={{
        boxSizing: 'border-box',
        padding: theme.space.xxlarge,
        marginTop: theme.space.xxlarge,
        marginBottom: theme.space.xxlarge,
        width: '100%',
      }}
    >
      <Typography.Title
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: theme.space.xxlarge,
        }}
        fontWeight="bold"
      >
        <span
          style={{
            color: theme.colors.backgroundHard,
            backgroundColor: theme.colors.white,
            padding: `${theme.space.small}px ${theme.space.medium}px`,
            borderRadius: theme.sizes.small,
          }}
        >
          Yoga
        </span>
      </Typography.Title>

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
    </Card>
  );
};

export default MainPage;
