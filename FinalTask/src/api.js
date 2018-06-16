export const search = (serchOptions, input, sortOption) => {
  return fetch(`http://localhost:8080/movies?${serchOptions}_like=${input}&_sort=${sortOption}&_order=desc`)
  .then(response => response.json())
};

export const particularFilm = (title) => {
  return fetch(`http://localhost:8080/movies?title=${title}`)
  .then(response => response.json())
};

export const filmByDirector = (director) => {
  return fetch(`http://localhost:8080/movies?director=${director}`)
  .then(response => response.json())
};