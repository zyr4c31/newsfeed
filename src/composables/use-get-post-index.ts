import iPost from '@/interfaces/i-post';

const UseGetPostIndex = (posts: iPost[],
  title: string) => posts.findIndex((post) => post.title === title);

export default UseGetPostIndex;
