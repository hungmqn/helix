import { useTheme } from 'styled-components';
import { Element, scroller } from 'react-scroll';

import Typography from '../../../shared/Typography';
import { PAGES, CONTENT_LIST } from './constants';
import Icon from '../../../shared/Icon';

const Yoga = () => {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: theme.space.xlarge }}>
      <Element name={PAGES.YOGA} style={{ marginBottom: theme.space.large }}>
        <Typography.Title level={4}>
          {CONTENT_LIST[PAGES.YOGA].title}
        </Typography.Title>
        <hr style={{ width: 200, marginLeft: 0 }} />
      </Element>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Yoga là gì?
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Yoga phiên âm theo tiếng Phạn là <i>yuj</i>, nghĩa là sự kết
                hợp.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Yoga là sự kết hợp của tâm trí với Ý Thức Tối Cao hay Thượng Đế.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Yoga là sự kết hợp của thể xác, tâm trí và tâm linh.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Yoga là con đường để đạt đến tình trạng Hạnh Phúc vô tận hay là
                Chân Phúc. Đó là trạng thái cao nhất và sau cùng của cuộc sống
                con người.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
        <Typography.Text>
          Nguồn gốc nguyên thuỷ của Yoga là <strong>TANTRA</strong>.
          <br />
          Tantra là sự giải thoát khỏi sự lệ thuộc và vô minh. Yoga được hình
          thành cách nay 7000 năm bởi nhà Yogi, <strong>SHIVA</strong>. Tất cả
          những trường phái Yoga khác đều được bắt nguồn từ Tantra Yoga nguyên
          thuỷ này. Đó là phương pháp triết lý để phát triển mọi mặt của con
          người.
        </Typography.Text>
        <Typography.Text tagName="div">
          Từ Tantra Yoga phát triển ra 3 nhánh Yoga khác là:{' '}
          <strong>JINANA YOGA</strong>, <strong>KARMA YOGA</strong> và{' '}
          <strong>BHAKTI YOGA</strong>.
          <ul>
            <li>
              <Typography.Text>
                <strong>Jinana Yoga</strong> là Yoga hiểu biết.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Karma Yoga</strong> là Yoga hành động vị tha.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Bhakti Yoga</strong> là Yoga yêu thương.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
        <Typography.Text tagName="div">
          3 Yoga khác là:
          <ul>
            <li>
              <Typography.Text>
                <strong>Austanga Yoga</strong>: theo phương pháp cổ điển, gồm có
                8 bước. Được trình bày rõ ràng nhất bởi nhà Yogi Patanjali cách
                đây hơn hai thiên niên kỷ. Một số trường hợp còn được gọi là{' '}
                <strong> Raja Yoga (Vua Yoga)</strong>.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Hatha Yoga</strong>: theo phương pháp thực hành các tư
                thế để thông qua đó cố gắng kiểm soát tâm trí. Chủ yếu đề cập
                đến thực hiện các tự thế, không đưa lại kết quả cao nhất về mặt
                tinh thần nhưng mang lại lợi ích to lớn để đạt được trạng thái
                tinh thần mạnh mẽ.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Kundalini Yoga</strong>: thực tập để phát triển tiềm
                năng tinh thần trong con người hiện hữu. Chủ yếu là thực tập các
                tư thế giống Hatha Yoga.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
        <Typography.Text>
          Sự đình chỉ của tất cả khuynh hướng tinh thần thông qua áp lực tinh
          thần. Nhưng chỉ cần các áp lực đó được lấy ra thì những khuynh hướng
          cũ được phục hồi.
        </Typography.Text>
        <Typography.Text>
          Đình chỉ của tất cả khuynh hướng tinh thần thông qua áp lực tinh thần.
          Nhưng chỉ cần các áp lực đó được lấy ra thì những khuynh hướng cũ được
          phục hồi.
        </Typography.Text>
        <Typography.Text>
          Đình chỉ của tâm trí ngưng tất cả các ý nghĩ thì sẽ không đạt được đến
          đỉnh cao tâm linh.
        </Typography.Text>
        <Typography.Text>
          Kết hợp giữa ý thức bản thân với Ý Thức Tối Cao. Việc này xảy ra khi
          tinh thần khao khát yêu thương đến với Ý Thức Tối Cao. Đây là phần chủ
          yếu của Yoga.
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Asana là gì?
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                <strong>Asana</strong> là các <strong>Tư thế</strong> nhẹ nhàng,
                tĩnh lặng và dễ dàng được kết hợp với hít và thở.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Việc thực hiện các động tác giúp cho các tuyến, các cơ quan,
                thần kinh và các mô của cơ thể vận động.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Con người cảm nhận được cơ thể an nhàn và tinh thần điềm tĩnh
                trong khi thực tập <strong>Asana</strong>.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Asana kiểm soát các tuyến nội tiết - tuyến kiểm soát sự tiết của
                hóc môn (hormones) và sự tiết hóc môn này kiểm soát tình trạng
                và khuynh hướng của cơ thể.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Những lợi ích của Asana
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Tăng cường sự dẻo dai cho cơ thể.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Sửa chữa phần khiếm khuyết cho các tuyến nội tiết và làm cân
                bằng sự bài tiết của hormone.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Cân bằng tâm trí và thể xác.</Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Thu rút tâm trí khỏi những ý nghĩ phiền nhiễu hoặc gây hại.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chuẩn bị cho tâm tró được tinh tế và thực hành tâm linh tốt hơn.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Tên của Asana như thế nào?
        </Typography.Title>
        <Typography.Text>
          Một số tên Asana như những vận động hoặc là những đặc trưng của các
          động vật, do đó họ đặt tên theo những con vật đó (cá, chim, rắn,
          v.v...). Một số khác thì được đặt tên theo đặc tính của Asana như:
          toàn chi (đứng trên vai), vi tư thế này tác động vào toàn chi.
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Có hai loại Asana
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Asana chủ yếu cho sức khoẻ cơ thể và thứ hai là cho phát triển
                tâm linh như tư thế toàn chi, con cá, vận cột sống, v.v...
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Asana chủ yếu cho tập trung tinh thần và thiền định, như tư thế
                hoa sen, hoàn hảo, dũng cảm, v.v...
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Asana được phát hiện như thế nào?
        </Typography.Title>
        <Typography.Text>
          Asana được phát hiện bởi nhà Yogi Rsi đã sống trong rừng cách nay hàng
          nghìn năm. Họ đã thấy các động vật khác nhau có sự khác biệt về vận
          động để kích thích các tuyến nội tiết tiết hormone của nó.
        </Typography.Text>
        <Typography.Text>
          Họ đã nghỉ bắt chước tư thế của động vật và theo cách đó để có được
          những bí mật hormone từ cơ thể con người và phát triển một cách tự
          nhiên như động vật đó. Như tư thế con rùa, những Asana khác được phát
          minh để tác động đến các tuyến nội tiết khác nhau của cơ thể.
        </Typography.Text>
        <Typography.Text>
          Tại sao chúng ta không tập tư thế đứng trên đầu (trồng chuối)?
        </Typography.Text>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>Tăng huyết áp.</Typography.Text>
            </li>
            <li>
              <Typography.Text>Không kiểm soát các chi.</Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          MUDRA là gì?
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Mudra là những tư thế thực tập cho thần kinh và cơ bắp.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Người thực tập mudra kiểm soát cơ thể an nhàn và sự điềm tĩnh
                tinh thần.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Con người có được sự cố gắng kiên định để giữ tình trạng tư thế
                đó, nhưng trong tư thế Asana thì không cần.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Những Asana bắt buộc
        </Typography.Title>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                <strong>Nam</strong>: toàn chi (đứng trên vai), con cá, đầu bò,
                đầu đến gối, vận cột sống.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                <strong>Nữ</strong>: chào Yoga, rắn hổ mang, chào dài.
              </Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>

      <div style={{ marginBottom: theme.space.large }}>
        <Typography.Title
          level={5}
          style={{ marginBottom: theme.space.medium }}
        >
          Những lợi ích của Aerobic và Asana
        </Typography.Title>
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
        <Typography.Text>Asana</Typography.Text>
        <Typography.Text tagName="div">
          <ul>
            <li>
              <Typography.Text>
                Từng động tác riêng lẻ, co giãn cơ bắp một cách chậm rãi và nới
                lỏng toàn diện.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chầm chậm, từ từ tác động vào nơi thích hợp, không làm tim căng
                thẳng đập nhanh.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>
                Chủ yếu tác động vào các tuyến nội tiết. Từng chuyển động đơn lẻ
                tập trung vào yên bình và cân bằng.
              </Typography.Text>
            </li>
            <li>
              <Typography.Text>Chủ yếu tác động vào thần kinh.</Typography.Text>
            </li>
          </ul>
        </Typography.Text>
      </div>
      <div
        onClick={() =>
          scroller.scrollTo(PAGES.TABLE_OF_CONTENT, {
            smooth: true,
          })
        }
      >
        <Icon
          icon="arrow-up"
          style={{
            cursor: 'pointer',
            color: theme.colors.backgroundHard,
            backgroundColor: theme.colors.white,
            padding: `${theme.space.small}px ${theme.space.medium}px`,
            borderRadius: 300,
          }}
        />
      </div>
    </div>
  );
};

export default Yoga;
