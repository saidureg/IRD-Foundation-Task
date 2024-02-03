export const getAllCategories = async () => {
  const response = await fetch("http://localhost:5000/categories");
  const data = await response.json();
  return data;
};
