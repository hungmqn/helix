import { useTheme } from 'styled-components';
import { scroller } from 'react-scroll';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';
import YogaPage from './YogaPage';
import AsanaPage from './AsanaPage';
import KaoshikiiPage from './KaoshikiiPage';

import { PAGES } from './constants';

const AsanaMainPage = () => {
  const theme = useTheme();

  return (
    <Card style={{ padding: theme.space.xxlarge, minWidth: '70%' }}>
      <Typography.Title
        style={{ textAlign: 'center', textTransform: 'uppercase' }}
      >
        Yoga
      </Typography.Title>
      <Typography.Text tagName="div">
        <ul style={{ listStyleType: 'katakana' }}>
          <li
            style={{ cursor: 'pointer' }}
            onClick={() =>
              scroller.scrollTo(PAGES.YOGA, {
                smooth: true,
              })
            }
          >
            <Typography.Text>{PAGES.YOGA}</Typography.Text>
          </li>
          <li
            style={{ cursor: 'pointer' }}
            onClick={() =>
              scroller.scrollTo(PAGES.ASANA, {
                smooth: true,
              })
            }
          >
            <Typography.Text>{PAGES.ASANA}</Typography.Text>
          </li>
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
          <li
            style={{ cursor: 'pointer' }}
            onClick={() =>
              scroller.scrollTo(PAGES.KAOSHIKII, {
                smooth: true,
              })
            }
          >
            <Typography.Text>{PAGES.KAOSHIKII}</Typography.Text>
          </li>
          <li>Massage</li>
          <li>Fasting</li>
        </ul>
      </Typography.Text>
      <br />
      <YogaPage />
      <br />
      <AsanaPage />
      <br />
      <KaoshikiiPage />
    </Card>
  );
};

export default AsanaMainPage;
