import iPost from '@/interfaces/i-post';

function UseStoreNewPost(newTitle: string, newContent: string): iPost {
  const newPost: iPost = {
    title: newTitle,
    content: newContent,
    isCurrentEdit: false,
  };
  return newPost;
}

export default UseStoreNewPost;
