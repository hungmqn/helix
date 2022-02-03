import { useTheme } from 'styled-components';
import { Element, scroller } from 'react-scroll';

import Typography from '../../../shared/Typography';
import { PAGES, CONTENT_LIST } from './constants';
import Icon from '../../../shared/Icon';

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
        <Typography.Text>
          Chúng ta nhịn ăn 2 ngày <strong>Ekadashi</strong> theo lịch của Hội
          trung tâm hoặc vào ngày 11 và 26 <strong>âm lịch</strong> hàng tháng,
          nếu vào ngày này ta bận thì có thể nhịn sớm hoặc trễ hơn một ngày.
        </Typography.Text>
        <Typography.Text>
          Ngày nhịn ăn, chúng ta <strong>không ăn uống</strong> gì hết trong
          vòng 24 tiếng đồng hồ từ 6 giờ sáng ngày nhịn đến 6 giờ sáng hôm sau.
          Nếu cảm thấy khó khăn thì những lần đầu nhịn ăn thì ta có thể nhịn ăn
          nhưng vẫn thu nạp nước, nước trái cây hoặc các loại chất lỏng khác.
          Sau đó, bỏ dần chỉ còn nước và cuối cùng thì không uống gì. Trong ngày
          nhịn ăn, nếu cảm thất mệt hay nóng thì đi tắm hoặc tắm sơ, hoặc đi bơi
          hay ngâm mình trong bồn tắm thì sẽ cảm thấy nhẹ nhàng và thoải mái.
        </Typography.Text>
        <Typography.Text>
          Ngày hôm sau thức dậy, sau khi làm công việc vệ sinh xong, ta pha nửa
          lít nước với 2 chái tranh và một muỗng canh gạt muối, quen rồi thì có
          thể uống 1 lít nước với 4 trái chanh và 1 muỗng đầy vung muối, nếm thử
          sẽ có vị hơi chua và mặn là tốt. Xong ta ngồi xuống uống hết rồi ăn 2
          trái chuối sứ, cắn vừa, đủ nuốt trộng rồi chờ từ khoảng 15 phút đến 1
          tiếng. Khi sôi bụng, đi cầu xả lần đầu xong ta sẽ bị khát, có thể ăn
          các loại trái cây có nhiều nước như dưa hấu, lê, v.v... Sau đó khoảng
          nửa tiếng hay 1 tiếng sẽ tiếp tục sôi bụng đi cầu, xả xong ta có thể
          ăn yaourt không đường, uống sữa đậu nành nóng không đường, nói chung
          là các chất lỏng. Tiếp theo, khoảng từ 1 đến 2 tiếng tiếp tục sôi
          bụng, đi cầu xong ta có thể ăn cháo đậu tổng hợp hoặc cháo gạo lứt.
          Đến trưa ta có thể ăn lại bình thường, ta nên chọn thực phẩm có nhiều
          chất xơ thì tốt hơn (ngày sau nhịn ăn không được ăn thực phẩm cứng
          hoặc khó tiêu).
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Diễn giải
        </Typography.Title>
        <Typography.Text>
          Vào ngày nhịn ăn, không được ăn từ lúc mặt trời mọc cho đến lúc mặt
          trời mọc vào ngày hôm sau. Uống nước cũng không được khuyến khích vào
          các ngày nhịn ăn. Vào lúc trăng đầy và trăng non, lực hút kết hợp của
          mặt trăng và mặt trời<sup>1</sup>, các yếu tố hơi và chất lỏng trong
          cơ thể dâng lên trong ngực và đầu tạo nên cảm giác khó chịu. Nhịn ăn
          trong ngày đó sẽ hạn chế các yếu tố đó dâng lên, làm giảm bớt cảm giác
          khó chịu. Những ngày thích hợp nhất để nhịn ăn là ngày 11 và 26 âm
          lịch (theo chu kỳ mặt trăng). Nếu muốn tăng cường độ, có thể thực hiện
          vào ngày trăng tròn và trăng non. Trong trường hợp không thể nhịn vào
          các ngày đã nêu, có thể nhịn vào ngày trước hoặc sau các ngày đó.
        </Typography.Text>
        <Typography.Text>
          Những người đau khổ vì sạn mật sạn thận nên nhịn có nước. Người ta có
          thể thuyên giảm ngay cả các bệnh mãn tính ngoài da bằng cách tiếp tục
          nhịn lâu với nước chanh. Những người bệnh và người có sức khoẻ thường
          nên theo việc nhịn ăn và uống nhiều nước với chanh. Người yếu hơn có
          thể ăn một lượng nhỏ trái cây và sữa. Nếu không nhịn ăn vào ngày 11 và
          26 âm lịch, ít nhất nên kiêng ăn cơm, đồ chiên xào và thức ăn không
          phải ăn chay vào những ngày đó.
        </Typography.Text>
        <Typography.Text>
          Thức ăn mà chúng ta ăn chuyển đổi qua bảy giai đoạn liên tiếp thành
          tinh chất sau cùng gọi là bạch huyết. Bạch huyết dùng như nguyên liệu
          mà từ đó các tuyến nội tiết sản xuất các kích thích tố của riêng. Nó
          cũng là nguyên liệu để tạo tinh trùng, tinh dịch, sữa mẹ và trứng. Sau
          cùng, bất cứ gì bạch huyết còn lại là thức ăn của não sau khi hoàn
          thành hai nhu cầu đầu tiên<sup>2</sup>. Từ đó phân tử ngoại sinh chất
          của trí đơn vị được hình thành. Nếu ta nhịn ăn theo hệ thống, bạch
          huyết thặng dư sẽ không kích thích các khuynh hướng thấp của trí, thay
          vào đó trí sẽ hướng lên các tham vọng cao hơn. Hơn nữa, kết quả của
          việc nhịn ăn, các chất độc và các chất vô dụng của cơ thể bị tiêu huỷ
          và loại bỏ. Năng lượng thường dùng để tiêu hoá thức ăn có thể sử dụng
          cho các mục đích khác. Vì vậy các ngày nhịn ăn là thời gian tuyệt hảo
          cho việc hành thiền.
        </Typography.Text>
        <Typography.Text>
          Nhịn ăn tự nó không khó một khi ta đã vượt qua sự sợ hãi. Nhưng phải
          lưu tâm đến phương thức đúng khi ăn lại. Trong khi nhịn ăn, cơ thể bận
          rộn tự làm sạch và giải độc. Nhiều chất độc tích tụ lại trong ruột và
          không nên để nó tái hấp thụ, cách nhẹ nhàng nhất và nhanh nhất để ruột
          tống các chất độc là nước chanh muối. Nước này phải mặn hơn nước biển,
          một muỗng canh đầy muối với nửa lít nước sẽ tốt. Thêm vào ít nhất nước
          của ba trái chanh nhiều nước<sup>3</sup>. Sau mười phút ta nên ăn một
          trái chuối chín và chờ 10 phút trước khi ăn thức ăn khác.
        </Typography.Text>
        <Typography.Text tagName="div">
          Đây là vài lời khuyên làm cho việc nhịn ăn dễ dàng hơn:
          <ul>
            <li>
              <Typography.Text>
                Lần đầu nhịn ăn phải có sự hướng dẫn của người có kinh nghiệm.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Bữa ăn chiều trước ngày nhịn ăn nên ăn hơi nhẹ hơn thường lệ,
                không nặng hơn.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Buổi sáng của ngày nhịn khi mặt trời mọc, uống nước liên quan
                đến bài tập trên giường như thường lệ hầu để làm sạch ruột.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Cơn đói không phải là vấn đề trong ngày nhịn, nhưng cơn khát có
                thể là vấn đề, đặc biệt ở khí hậu nóng, tắm sơ và tắm trọn rất
                có ích kiềm chế cơn khát. Tắm càng thường càng tốt.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Vào buổi chiều ngày nhịn nóng có thể cảm thấy dữ dội quanh rốn,
                nhức đầu, đau khớp, buồn nôn. Tuy khó chịu nhưng không phải dấu
                hiệu xấu. Nó báo hiệu rằng đang đốt các chất độc và các chất vô
                ích. Khi cơ thể trở nên trong sạch qua việc nhịn ăn đều đặn,
                những phiền toái này sẽ dần biết mất.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>
      <hr style={{ width: 100, marginLeft: 0 }} />
      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Text tagName="div">
          <ol>
            <li>
              <Typography.Text>
                Sự thay đổi lực hấp dẫn của mặt trời và mặt trăng cũng có thể
                quan sát sự lên xuống của thuỷ triều. Thuỷ triều thay đổi tối đa
                sẽ vào khoảng trăng tròn và trăng non. Thực sự 70% cơ thể của ta
                là nước và bị ảnh hưởng tương tự như nước trong đại dương.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Sử dụng bạch huyết theo ưu tiên bắt buộc do bản năng sinh tồn.
                Quan trọng nhất là sinh tồn cá nhân nghĩa là bảo vệ hệ thống
                miễn dịch, thứ hai là sự sinh sản hay tồn tại của loài, thứ ba
                là phát triển tâm trí. Trong trường hợp các bệnh thoái hoá khi
                nhiều bạch huyết phải phân phát vì mục đích chiến đấu với bệnh
                tật, trước tiên trí trở nên đần độn (dưới mức cung cấp của bạch
                huyết). Kế đó, khả năng sáng tạo bị đình chỉ để tiết kiệm bạch
                huyết. Việc đó báo hiệu cơ thể đến gần điểm mà bạch huyết không
                đủ để duy trì hệ thống miễn dịch (AIDS, ung thư). Khi hệ miễn
                dịch kiệt sức thì cái chết là không tránh khỏi.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Nếu chanh không đủ, sẽ bị nôn mửa. Nếu không đủ muối, ruột sẽ
                không được tẩy sạch. Nếu có quá nhiều muối nhưng đủ nhiều chanh
                thì sẽ không nôn mửa nhưng sẽ gây nhức đầu và buồn nôn tới 2 giờ
                đồng hồ. Tuy nhiên, nó sẽ tự biến mất sau đó và không gây hại.
                Sau cùng, người ta phải học hỏi bằng thử nghiệm để biết được
                liều lượng thích hợp cho cơ thể của bản thân, tất cả chỉ là để
                có được kết quả mong muốn: ruột được xổ trong vòng một giờ sau
                khi uống nước chanh với muối.
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

export default Fasting;
