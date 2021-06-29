import iPost from '@/interfaces/i-post';

function UseStoreNewPost(newTitle: string, newContent: string) {
  const newPost: iPost = {
    title: newTitle,
    content: newContent,
    isCurrentEdit: false,
  };
  return newPost;
}

export default UseStoreNewPost;
