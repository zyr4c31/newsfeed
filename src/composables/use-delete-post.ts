import iPost from '@/interfaces/i-post';
import UseGetPostIndex from './use-get-post-index';

function UseDeletePost(posts: iPost[], title: string) {
  return posts.splice(UseGetPostIndex(posts, title), 1);
}

export default UseDeletePost;
