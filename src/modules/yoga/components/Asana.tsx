import styled, { useTheme } from 'styled-components';
import { Element, scroller } from 'react-scroll';

import Typography from '../../../shared/Typography';
import { PAGES, CONTENT_LIST } from './constants';
import Icon from '../../../shared/Icon';
import BhujangasanaImage from '../assets/bhujangasana-by-ketut-subiyanto.jpg';
import BalasanaImage from '../assets/balasana-by-karolina-grabowska.jpg';
import PadmasanaImage from '../assets/padmasana-by-miriam-alonso.jpg';

const YogaPoseGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.medium}px;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
`;

const YogaPoseItem = styled.div`
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.sizes.small}px;
  padding: ${({ theme }) => theme.space.large}px;
  background: ${({ theme }) => theme.colors.background};
  > div {
    margin-bottom: ${({ theme }) => theme.space.large}px;
    text-align: center;
    > img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.sizes.small}px;
    }
  }
`;

const Asana = () => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.space.xlarge }}>
      <Element name={PAGES.ASANA} style={{ marginBottom: theme.space.large }}>
        <Typography.Title level={4}>
          {CONTENT_LIST[PAGES.ASANA].title}
        </Typography.Title>
        <hr style={{ width: 200, marginLeft: 0 }} />
      </Element>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Quy tắc
        </Typography.Title>
        <Typography.Text tagName="div">
          <ol>
            <li>
              <Typography.Text>
                Nên tắm hoặc rửa tay, chân và mặt trước khi tập Asana.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tập Asana trong phòng không có gió lùa, nhưng nên mở cửa sổ cho
                thoáng khí.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Không nên có khói nhang hoặc bất kỳ khói nào trong phòng tập.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Mặc đồ lót vừa vặn khi tập.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tập Asana trên một tấm nền hoặc chiếu.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Thở bằng mũi khi tập Asana (hơi thở nên để đi qua lỗ mũi trái
                hoặc đồng thời cả hai mũi).
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Tốt nhất nên có chế độ ăn thích hợp (ăn chay).
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Không nên tập Asana khi còn no. Chỉ được tập cách bữa ăn tử 2
                tiếng rưỡi đến 3 tiếng.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Sau khi tập Asana bạn nên xoa bóp (mát xa) toàn bộ cơ thể từ đầu
                đến chân, nhất là các khớp xương, việc này rất có ích.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Sau khi xoa bóp xong phải nằm thư giãn trong tư thế xác chết tối
                thiểu là 2 phút (tối đa là 10 phút).
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Đi dạo sau khi hoàn tất tư thế thư giãn sâu là rất tốt.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Sau tư thế thư giãn sâu, sau 10 phút mới tiếp xúc với nước.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Sau tư thế thư giãn sâu khoảng 10 đến 15 phút mới được ăn nhẹ
                (uống nước hoặc sữa), khoảng 25 đến 30 phút mới được ăn các đồ
                rắn.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Việc tập thể dục hoặc các môn thể thao khác rất khuyến khích,
                nhưng không tập ngay sau khi tập Asana.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Nếu bạn bị đau (cảm, cúm) không nên tập Asana.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Phụ nữ không được tập Asana trong thời kỳ kinh nguyệt, trong lúc
                mang thai và trong vòng một tháng sau khi sinh con.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Thực hiện Asana chậm và tuân theo hơi thở một cách cẩn thận,
                không đẩy nhanh tốc độ hoặc tập một cách cứng nhắc cho xong động
                tác. Cố gắng điềm tĩnh, kiên định và nhận thức tác động trong
                khi tập Asana.
              </Typography.Text>
            </li>
          </ol>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Tắm sơ
        </Typography.Title>
        <Typography.Text>
          Nên tắm trước khi tập Asana, trước khi ăn và trước khi ngủ
        </Typography.Text>
        <Typography.Text tagName="div">
          <ol>
            <li>
              <Typography.Text>
                Dội nước lạnh lên vùng cơ quan sinh dục.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Dội nước từ đầu gối xuống bắp chuối và bàn chân.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Dội nước từ cùi chỏ trở xuống.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Ngậm nước trong miệng và khoát nước vào hai mắt 12 lần.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>
                  Động tác khó thực hiện, cần thực hành cẩn thận, không hít thở
                  khi cho nước vào mũi. Nếu bị sặc, thực hiện trong lần tắm khác
                  khi bình tĩnh hơn hoặc bỏ qua không thực hiện.
                </strong>
                <br />
                Giữ một ít nước trong lòng bàn tay, nghiêng đầu ra phía sau và
                để nước chảy từ từ vào mũi bạn, nước sẽ chảy xuống miệng rồi nhổ
                ra.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Súc miệng bằng nước và rửa sạch cổ họng.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Rửa tai và phía sau tai.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Rửa phía sau ót (sau gáy).</Typography.Text>
            </li>
          </ol>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Thức ăn
        </Typography.Title>
        <Typography.Text>
          Thức ăn tốt nhất để có sức khoẻ vừa về thể xác vừa về tinh thần là
          thức ăn chay.
        </Typography.Text>
        <Typography.Text tagName="div">
          <ol>
            <li>
              <Typography.Text>
                <strong>Thức ăn tri giác</strong> - Thức ăn tốt nhất cho thân và
                trí):
                <br />
                Trái cây, đa số các loại rau quả, đậu, ngũ cốc, sữa và các sản
                phẩm từ sữa (phô mai, yaourt), ít rau thơm và gia vị nhẹ.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Thức ăn động</strong> - Thức ăn tốt cho thân nhưng có
                thể tốt hoặc không tốt cho trí:
                <br />
                Những thức ăn có chất caffeine như cà phê, trà, sô-cô-la, thức
                uống hoá học, gia vị cay (ớt), thức ăn lên men và một vài loại
                thuốc trị bệnh. Nên tiết chế, sử dụng ít loại thức ăn này.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Thức ăn tĩnh</strong> - Thức ăn có hại cho thân và trí:
                <br />
                Tất cả các loại thịt, cá, trứng, hành, tỏi, nấm, rượu, thuốc lá,
                thuốc phiện, thức ăn chớm hư thối. Nên tránh các loại thức ăn
                này.
              </Typography.Text>
            </li>
          </ol>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Bài tập cơ bản
        </Typography.Title>
        <Typography.Text fontWeight="semi-bold">
          Người mới nên thực hành dưới sự hướng dẫn của chuyên gia hoặc người có
          kinh nghiệm.
        </Typography.Text>
        <Typography.Text tagName="div">
          <ol>
            <li>
              <Typography.Text>Tắm trọn và tắm sơ.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Thực hiện thế hoa sen (10 phút).
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Thực hiện bài khởi động.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Tập thở sâu.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Thực hiện thế Chào Yoga (Yoga Mudra).
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Thực hiện thế rắn hổ mang.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Thực hiện thế chào dài.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Múa Kaoshikii.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Thực hiện xoa bóp (mát xa).</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Thực hiện thế xác chết từ 2 đến 10 phút.
              </Typography.Text>
            </li>
          </ol>
        </Typography.Text>
      </div>
      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Bài tập cơ bản
        </Typography.Title>
        <YogaPoseGrid>
          <YogaPoseItem>
            <div>
              <Typography.Title level={4}>Padmasana</Typography.Title>
              <Typography.Text>Lotus</Typography.Text>
            </div>
            <div>
              <img src={PadmasanaImage} alt="Padmasana by Miriam Alonso" />
              <Typography.Text fontSize={10} fontWeight="light">
                Photo by Miriam Alonso from Pexels
              </Typography.Text>
            </div>
            <div>
              <Typography.Text>Tư thế hoa sen.</Typography.Text>
            </div>
          </YogaPoseItem>
          <YogaPoseItem>
            <div>
              <Typography.Title level={4}>Bhujangasana</Typography.Title>
              <Typography.Text>Cobra</Typography.Text>
            </div>
            <div>
              <img
                src={BhujangasanaImage}
                alt="Bhujangasana by Ketut Subiyanto"
              />
              <Typography.Text fontSize={10} fontWeight="light">
                Photo by Ketut Subiyanto from Pexels
              </Typography.Text>
            </div>
            <div>
              <Typography.Text>Tư thế rắn hổ mang.</Typography.Text>
            </div>
          </YogaPoseItem>
          <YogaPoseItem>
            <div>
              <Typography.Title level={4}>Balasana</Typography.Title>
              <Typography.Text>Child's</Typography.Text>
            </div>
            <div>
              <img src={BalasanaImage} alt="Balasana by Karolina Grabowska" />
              <Typography.Text fontSize={10} fontWeight="light">
                Photo by Karolina Grabowska from Pexels
              </Typography.Text>
            </div>
            <div>
              <Typography.Text>Tư thế đứa trẻ / chào dài.</Typography.Text>
            </div>
          </YogaPoseItem>
        </YogaPoseGrid>
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

export default Asana;
