import { Element, scroller } from 'react-scroll';

import Typography from '../../../shared/Typography';

import { CONTENT_LIST, PAGES } from './constants';

interface TopicProps {
  to: string;
  title: string;
}

const Topic = ({ to, title }: TopicProps) => (
  <li
    onClick={() =>
      scroller.scrollTo(to, {
        smooth: true,
      })
    }
  >
    <Typography.Title level={3} style={{ cursor: 'pointer' }} intent="main">
      {title}
    </Typography.Title>
  </li>
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
