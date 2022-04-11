export const filterCompleteNews = (data) => {
  const filterData = data.filter((item) => {
    return item.author && item.story_title && item.story_url && item.created_at;
  });
  return filterData;
};
