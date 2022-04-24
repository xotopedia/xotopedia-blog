import Head from 'next/head';
import { generateRSS } from '../utils/rssUtil';
import { PostCard } from '../components/PostCard';
import { PostData } from '../model/PostData';
import { loadBlogPosts } from '../utils/loader';

const Home = (props: { readme: string; posts: PostData[]; }) => {
  return (
    <div className="content">
      <Head>
        <title>Introducing My Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="section">
        <h2>My blog posts</h2>
        <div className="post-card-container">
          {props.posts.map((post, j) => { return <PostCard post={post} key={j} />; })}
        </div>
      </div>
      <div className="section alternate">
        <h2 className="centered">Get started</h2>
        <a>
          <button className="fork-button">Go to README</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();
  await generateRSS(posts);
  const props = {
    readme: readme,
    posts,
  };
  return { props };
};
