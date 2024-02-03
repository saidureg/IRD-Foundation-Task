export const getAllSubCategories = async () => {
  const response = await fetch("http://localhost:5000/sub_categories");
  const data = await response.json();
  return data;
};
