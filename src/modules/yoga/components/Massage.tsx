import { useTheme } from 'styled-components';
import { Element, scroller } from 'react-scroll';

import Typography from '../../../shared/Typography';
import { PAGES, CONTENT_LIST } from './constants';
import Icon from '../../../shared/Icon';

const Massage = () => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.space.xlarge }}>
      <Element name={PAGES.MASSAGE} style={{ marginBottom: theme.space.large }}>
        <Typography.Title level={4}>
          {CONTENT_LIST[PAGES.MASSAGE].title}
        </Typography.Title>
        <hr style={{ width: 200, marginLeft: 0 }} />
      </Element>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Lợi ích của tự xoa bóp (mát xa)
        </Typography.Title>
        <Typography.Text>
          Sau khi tập Asana, tự xoa bóp nên thực hiện đều khắp từ đầu đến chân.
        </Typography.Text>
        <Typography.Text tagName="div">
          <ol>
            <li>
              <Typography.Text>
                Các Asana kích thích các tuyến bã nhờn nằm dưới da bài tiết các
                chất dầu tự nhiên. Ta xoa bóp trả lại những chất bài tiết hữu
                ích hấp thụ trở lại, giữ cho da mềm mịn. Để giữ các loại dầu tự
                nhiên này, Asana phải được luyện tập xa ánh sáng mặt trời và chỉ
                được tắm sau 30 phút sau khi xoa bóp.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Xoa bóp kích thích tất cả các đầu mút thần kinh trên bề mặt cơ
                thể, do đó cũng kích thích cả hệ thần kinh.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Nó làm thư giãn các cơ bắp ở cường độ thấp nhất của sức căng cơ
                bản.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Xoa bóp làm gia tăng tuần hoàn máu.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Nâng cao sức khoẻ toàn diện.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Gia tăng chức năng hoạt động của bạch huyết.
                <br />
                Bạch huyết là một chất lỏng sống (vital fluid) thanh lọc máu.
                Thể lỏng này lấp đầy chỗ trống giữa các tế bào và mao mạch, có
                chứ năng tẩy sạch các chất thừa trong cơ thể. Xoa bóp kích thích
                nhiều dòng bạch huyết như cổ, nách, háng và đầu gối. Bạch huyết
                cũng là thức ăn cho các tế bào và là nguyên liệu để sản xuất
                hormone.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Cuối cùng bàn chân cần được xoa bóp cẩn thận. Nhiều dây thần
                kinh của cơ thể có đầu tận cùng ở bàn chân, vì vậy, xoa bóp bàn
                chân kích thích dòng năng lượng đến các cơ quan nội tạng, bạch
                huyết, các tuyến và sự thư giãn của da, cơ bắp, chuẩn bị cho sự
                thư giãn sâu của tư thế xác chết.
              </Typography.Text>
            </li>
          </ol>
        </Typography.Text>
      </div>
      <div
        onClick={() =>
          scroller.scrollTo(PAGES.TABLE_OF_CONTENT, {
            smooth: true,
          })
        }
      >
        <Icon icon="arrow-up" style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default Massage;
