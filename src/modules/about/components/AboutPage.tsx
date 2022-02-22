import Typography from '../../../shared/Typography';
import PageContainer from '../../../shared/PageContainer';
import PageHeader from '../../../shared/PageHeader';

const AboutPage = () => {
  return (
    <PageContainer>
      <PageHeader text="About Me" />

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
    </PageContainer>
  );
};

export default AboutPage;
