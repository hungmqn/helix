import { useTheme } from 'styled-components';
import { Element } from 'react-scroll';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';
import { PAGES } from './constants';

const AsanaPage = () => {
  const theme = useTheme();

  return (
    <Card style={{ padding: theme.space.xxlarge, minWidth: '70%' }}>
      <Element name={PAGES.ASANA}>
        <Typography.Title
          style={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          {PAGES.ASANA}
        </Typography.Title>
      </Element>
      <Typography.Text tagName="div">
        <ul style={{ listStyleType: 'katakana' }}>
          <li>Yoga</li>
          <li>Asana</li>
          <ul style={{ listStyleType: 'katakana-iroha' }}>
            <li>Tắm sơ</li>
            <li>Thức ăn</li>
            <li>Bài tập</li>
            <ul style={{ listStyleType: 'hiragana' }}>
              <li>Tắm sơ</li>
              <li>Thức ăn</li>
              <li>Bài tập</li>
              <ul style={{ listStyleType: 'hiragana-iroha' }}>
                <li>Tắm sơ</li>
                <li>Thức ăn</li>
                <li>Bài tập</li>
              </ul>
            </ul>
          </ul>
          <li>Kaoshikii</li>
          <li>Massage</li>
          <li>Fasting</li>
        </ul>
      </Typography.Text>
    </Card>
  );
};

export default AsanaPage;
