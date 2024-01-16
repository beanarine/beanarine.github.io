import { writable, readable } from 'svelte/store';

function cachePosts() {
  const { subscribe, set, update } = writable([], set => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => set(data));
  });

  return {
    subscribe,
    add: post => update(posts => [...posts, post])
  };
}

function fetchPosts() {
  const { subscribe, set, update } = readable([], set => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => set(data));
  });

  return {
    subscribe,
    add: post => update(posts => [...posts, post])
  };
}