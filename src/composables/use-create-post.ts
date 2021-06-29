import iPost from '@/interfaces/i-post';
import UseGetPostIndex from './use-get-post-index';
import UseStoreNewPost from './use-store-new-post';

function UseCreatePost(posts: iPost[], title: string, content: string) {
  if (UseGetPostIndex(posts, title) >= 0) {
    alert('Please input a different title');
  } else {
    posts.unshift(UseStoreNewPost(title, content));
  }
}

export default UseCreatePost;
