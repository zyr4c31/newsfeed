import iPost from '@/interfaces/i-post';
import UseGetPostIndex from './use-find-post-index';

const UseDeletePost = (posts: iPost[], title:
    string) => posts.splice(UseGetPostIndex(posts, title), 1);

export default UseDeletePost;
