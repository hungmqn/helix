import { useTheme } from 'styled-components';

import Card from '../../../shared/Card';
import Typography from '../../../shared/Typography';

const AboutPage = () => {
  const theme = useTheme();

  return (
    <Card
      style={{
        boxSizing: 'border-box',
        padding: theme.space.xxlarge,
        marginTop: theme.space.xxlarge,
        marginBottom: theme.space.xxlarge,
        width: '100%',
      }}
    >
      <Typography.Title
        style={{
          textAlign: 'center',
          marginBottom: theme.space.xxlarge,
        }}
        fontWeight="bold"
      >
        <span
          style={{
            color: theme.colors.backgroundHard,
            backgroundColor: theme.colors.white,
            padding: `${theme.space.small}px ${theme.space.medium}px`,
            borderRadius: theme.sizes.small,
          }}
        >
          About Me
        </span>
      </Typography.Title>
      <Typography.Text>
        My name is Nguyen Mai Quoc Hung (Nguyen is the last name). I am
        currently working as a software engineer at
        <a
          href="https://employmenthero.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Employment Hero
        </a>{' '}
        where I am developing a platform for HR, payroll, performance, learning,
        recognition and benefits for customers across the world.
      </Typography.Text>
      <Typography.Text>
        I am passionate about creating beatiful and high-performance web
        applications using latest web technologies.
      </Typography.Text>
      <Typography.Text>
        I am a big fan of{' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        ,{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{' '}
        and also have my eye on{' '}
        <a
          href="https://www.rust-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rust
        </a>
        .
      </Typography.Text>
      <Typography.Text tagName="div">
        I have experience developing large-scale web applications and be
        familiar with web technologies:
        <ul>
          <li>React, Vue, Redux.</li>
          <li>Node.js</li>
          <li>HTML/CSS.</li>
        </ul>
      </Typography.Text>
      <Typography.Text tagName="div">
        I also work well with:
        <ul>
          <li>Git.</li>
          <li>Docker.</li>
        </ul>
      </Typography.Text>
      <Typography.Text tagName="div">
        And in my freetime, I do:
        <ul>
          <li>Edit media (images, videos, etc.).</li>
          <li>Read/watch manga, anime.</li>
          <li>Yoga.</li>
        </ul>
      </Typography.Text>
    </Card>
  );
};

export default AboutPage;
