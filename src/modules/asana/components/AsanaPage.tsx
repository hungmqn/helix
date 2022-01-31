import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';

const AsanaPage = () => {
  const theme = useTheme();

  return (
    <Card style={{ padding: theme.space.xxlarge, minWidth: '70%' }}>
      <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Yoga</h3>
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
    </Card>
  );
};

export default AsanaPage;
