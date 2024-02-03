import Accordion from "@/components/shared/Accordion";
import { getAllCategories } from "@/utils/getAllCategories";
import { getAllSubCategories } from "@/utils/getAllSubCategories";

const CategoryList = async () => {
  const data = await getAllCategories();
  const sub_categories = await getAllSubCategories();

  const filteredData = data.map((category) => {
    const subCategory = sub_categories.filter(
      (sub_category) => sub_category.cat_id === category.cat_id
    );
    return {
      ...category,
      subCategory,
    };
  });

  return (
    <div>
      <h3 className="bg-[#1FA45B] text-center py-4 rounded-t-xl text-white">
        Categories
      </h3>
      <div className="form-control px-2 my-3">
        <input
          type="text"
          placeholder="Search Categories"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <div className="space-y-3 px-2">
        <Accordion items={filteredData} />
      </div>
    </div>
  );
};

export default CategoryList;
