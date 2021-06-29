import iPost from '@/interfaces/i-post';
import UseFindPost from './use-find-post';

const useLogFunction = (posts: iPost[],
  title: string) => console.log('UseFindPost: ', UseFindPost(posts, title));

export default useLogFunction;
