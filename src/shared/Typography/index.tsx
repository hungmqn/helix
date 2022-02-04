import Text from './Text';
import Title from './Title';

interface TypographyProps {
  Text: typeof Text;
  Title: typeof Title;
}

const Typography: TypographyProps = {
  Text,
  Title,
};

export default Typography;
