import { useTheme } from 'styled-components';
import { Element } from 'react-scroll';

import Typography from '../../../shared/Typography';
import { PAGES, CONTENT_LIST } from './constants';

const Fasting = () => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.space.xlarge }}>
      <Element name={PAGES.FASTING} style={{ marginBottom: theme.space.large }}>
        <Typography.Title level={4}>
          {CONTENT_LIST[PAGES.FASTING].title}
        </Typography.Title>
        <hr style={{ width: 200, marginLeft: 0 }} />
      </Element>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Phương pháp nhịn ăn
        </Typography.Title>
        <Typography.Text fontWeight="semi-bold">
          Người mới nên thực hành dưới sự hướng dẫn của chuyên gia hoặc người có
          kinh nghiệm. Tuyệt đối không thực hiện tự phát một mình.
        </Typography.Text>
        <Typography.Text>Aerobic</Typography.Text>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Lập đi lập lại nhanh, sôi nổi của sự co giãn cơ bắp.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Làm cho tim đập nhanh và căng.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tác động chủ yếu đến thân thể, đặc biệt là cơ bắp.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Tính chất tranh đua.</Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>
    </div>
  );
};

export default Fasting;
