import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';
import Yoga from './Yoga';
import Asana from './Asana';
import Kaoshikii from './Kaoshikii';
import TableOfContents from './TableOfContents';
import Massage from './Massage';
import Fasting from './Fasting';

const AsanaMainPage = () => {
  const theme = useTheme();

  return (
    <Card
      style={{
        padding: theme.space.xxlarge,
        minWidth: '70%',
        maxWidth: '90%',
        marginTop: theme.space.xxlarge,
        marginBottom: theme.space.xxlarge,
      }}
    >
      <Typography.Title
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Yoga
      </Typography.Title>

      <Typography.Text
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        <strong>
          Dùng cho mục đích lưu nhớ
          <br />
          Người mới nên thực hành dưới sự hướng dẫn của chuyên gia hoặc người có
          kinh nghiệm
        </strong>
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

export default AsanaMainPage;
