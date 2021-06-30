import iPost from '@/interfaces/i-post';

const UseFindPostIndex = (posts: iPost[],
  title: string) => posts.findIndex((post) => post.title === title);

export default UseFindPostIndex;