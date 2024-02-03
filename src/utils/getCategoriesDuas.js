export const getCategoriesDuas = async (categoryName, categoryId) => {
  const response = await fetch(
    `http://localhost:5000/duas/${categoryName}?cat=${categoryId}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};
