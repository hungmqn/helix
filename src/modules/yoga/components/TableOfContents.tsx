import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';

import Typography from '../../../shared/Typography';

import { CONTENT_LIST, PAGES } from './constants';

const StyledTopic = styled.li`
  > h3 {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryText};
    transition: ${({ theme }) => theme.transitions.colorCubic};
    &:hover {
      color: ${({ theme }) => theme.colors.secondaryText};
    }
  }
`;

interface TopicProps {
  to: string;
  title: string;
}

const Topic = ({ to, title }: TopicProps) => (
  <StyledTopic
    onClick={() =>
      scroller.scrollTo(to, {
        smooth: true,
      })
    }
  >
    <Typography.Title level={3} intent="main">
      {title}
    </Typography.Title>
  </StyledTopic>
);

const TableOfContents = () => {
  return (
    <Element name={PAGES.TABLE_OF_CONTENT}>
      <ul
        style={{
          listStyleType: 'none',
          paddingInlineStart: 0,
        }}
      >
        {Object.keys(CONTENT_LIST).map((content) => (
          <Topic
            key={CONTENT_LIST[content].destination}
            to={CONTENT_LIST[content].destination}
            title={CONTENT_LIST[content].title}
          />
        ))}
      </ul>
    </Element>
  );
};

export default TableOfContents;
