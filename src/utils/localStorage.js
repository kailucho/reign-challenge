export const setInLocalStorage = (key, data) => {
  const dataParsed = JSON.stringify(data);
  localStorage.setItem(key, dataParsed);
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  const dataParsed = data ? JSON.parse(data) : null;
  return dataParsed;
};

export const removeFavorite = (post) => {
  const localPosts = getFromLocalStorage("Favorites");
  const localPostParsed = localPosts instanceof Array ? localPosts : [];
  const index = localPostParsed.findIndex(
    (p) => p.created_at === post.created_at
  );
  if (index > -1) {
    localPostParsed.splice(index, 1);
    setInLocalStorage("Favorites", localPostParsed);
  }
};

export const addFavorite = (post) => {
  const localPosts = getFromLocalStorage("Favorites");
  const localPostParsed = localPosts instanceof Array ? localPosts : [];
  localPostParsed.push(post);
  setInLocalStorage("Favorites", localPostParsed);
};

export const getFavorites = () => {
  return getFromLocalStorage("Favorites") || [];
};
