import iPost from '@/interfaces/i-post';

const UseFindPost = (posts: iPost[],
  title: string): iPost | undefined => posts.find((post) => post.title === title);

export default UseFindPost;
