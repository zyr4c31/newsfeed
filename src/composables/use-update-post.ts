import iPost from '@/interfaces/i-post';
import UseGetPostIndex from './use-find-post-index';

function updatePost(posts: iPost[], title: string) {
  if (UseGetPostIndex(posts, title) >= 0) {
    alert('Please input a different title');
  } else {
    (posts[UseGetPostIndex(posts,
      title)].isCurrentEdit) = !posts[UseGetPostIndex(posts,
      title)].isCurrentEdit;
  }
}

export default updatePost;
