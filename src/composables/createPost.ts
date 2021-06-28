import ListOfPosts from "@/data/list-of-posts";
import iPost from "@/interfaces/i-post";
import { ref } from "vue";
import getIndex from "./getIndex";


function createPost(newTitle: string, newContent: string) {
    const posts = ref(ListOfPosts);
    if (getIndex(newTitle) === -1) {
      const emptyPost: iPost = {
        title: newTitle,
        content: newContent,
        isCurrentEdit: false,
      };
      posts.value.unshift(emptyPost);
    } else {
      alert('Please input a different title');
    }
  }

  import default createPost
