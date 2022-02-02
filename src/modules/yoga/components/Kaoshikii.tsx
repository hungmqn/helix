import { useTheme } from 'styled-components';
import { Element } from 'react-scroll';

import Typography from '../../../shared/Typography';
import { PAGES, CONTENT_LIST } from './constants';

const Kaoshikii = () => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.space.xlarge }}>
      <Element
        name={PAGES.KAOSHIKII}
        style={{ marginBottom: theme.space.large }}
      >
        <Typography.Title level={4}>
          {CONTENT_LIST[PAGES.KAOSHIKII].title}
        </Typography.Title>
        <hr style={{ width: 200, marginLeft: 0 }} />
      </Element>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Lợi ích
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Rèn luyện vận động tất cả các tuyến nội tiết và tứ chi, từ đầu
                đến chân.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Gia tăng tuổi thọ.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Giúp sinh nở dễ dàng.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Làm dẻo dai cột sống.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chữa khỏi chứng viêm khớp cột sống, cổ, thắt lưng và các khớp
                khác.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chữa được bệnh gout ở cột sống, cổ, tay và thắt lưng.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tâm trí trở nên mạnh mẽ và sắc bén.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Giúp đều hoà kinh nguyệt.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Cân bằng tiết xuất của nội tiết tấu.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Loại bỏ những vấn đề về bàng quang và niệu đạo (ống dẫn nước
                tiểu).
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Kiểm soát hoạt động tứ chi.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Làm sáng da và tạo sự duyên dáng ở mặt.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Loại bỏ vết nhăn.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Xua trừ chứng lờ đờ, thiếu sinh khí.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Chữa mất ngủ.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Giảm thiểu động kinh.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Giảm sợ hãi.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Xoá đi cảm giác vô vọng.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tăng khả năng thể hiện, diễn tả bản thân và phát triển năng lực
                bản thân.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chữa trị các bệnh về vột sống, trĩ, thoát vị bẹn ở nam giới đau
                ách thần kinh, thiểu năng tuần hoàn.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chữa các chứng bệnh về thận, mật, dạ dày, chứng khó tiêu, thừa
                acid, kiết lị, giang mai, lậu, béo phì, thừa cân và các bệnh về
                gan.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tăng khả năng làm việc, vận động cho đến 75-80 tuổi.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
        <Typography.Text>
          Namaskar: Con thiết lập sự liên kết với Đại vũ trụ.
          <br />
          Nghiêng phải: Con biết phải thỉnh nguyện Ngài như thế nào.
          <br />
          Nghiêng trái: Con biết cách làm tròn mệnh lệnh Ngài giao phó.
          <br />
          Cúi trước: Con biết phó thác hoàn toàn cho Ngài như thế nào.
          <br />
          Ngả sau: Con sẵn sàng đối mặt với mọi khó khăn.
          <br />
          Tata: Con đọc lời sám hối trong nhịp điệu hoà lẫn với nhịp điệu của
          Ngài.
        </Typography.Text>
      </div>
    </div>
  );
};

export default Kaoshikii;
