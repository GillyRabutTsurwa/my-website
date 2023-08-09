import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
    state: () => {
        return {
            posts: [],
            techPosts: [],
            filteredPosts: [],
            filteredTechPosts: [],
        };
    },
});
