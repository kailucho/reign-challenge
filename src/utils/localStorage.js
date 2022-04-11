export const setInLocalStorage = (key, data) => {
  const dataParsed = JSON.stringify(data);
  localStorage.setItem(key, dataParsed);
};

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  const dataParsed = data ? JSON.parse(data) : null;
  return dataParsed;
};
