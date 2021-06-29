import iPost from '@/interfaces/i-post';

function UseGetPostIndex(posts: iPost[], title: string) {
  const indexOfPost = posts.findIndex((post) => post.title === title);
  return indexOfPost;
}

export default UseGetPostIndex;
