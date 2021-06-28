import ListOfPosts from "@/data/list-of-posts";
import { ref } from "vue";
import getIndex from "./getIndex";

function updatePost(title: string) {
    const posts = ref(ListOfPosts);
    (posts.value[getIndex(title)].isCurrentEdit) = !posts.value[getIndex(title)].isCurrentEdit;
  }

  import default updatePost