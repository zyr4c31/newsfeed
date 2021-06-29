import iPost from '@/interfaces/i-post';
import UseGetPostIndex from './use-get-post-index';
import UseStoreNewPost from './use-store-new-post';

function UseCreatePost(posts: iPost[], newTitle: string, newContent: string) {
  if (UseGetPostIndex(posts, newTitle) >= 0) {
    alert('Please input a different title');
  } else {
    posts.unshift(UseStoreNewPost(newTitle, newContent));
  }
}

export default UseCreatePost;
