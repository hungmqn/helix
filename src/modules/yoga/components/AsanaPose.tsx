import styled, { useTheme } from 'styled-components';

import Typography from '../../../shared/Typography';

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
    <div style={{ marginBottom: theme.space.large }}>
      <Typography.Title level={5} style={{ marginBottom: theme.space.medium }}>
        Các tư thế
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
  );
};
