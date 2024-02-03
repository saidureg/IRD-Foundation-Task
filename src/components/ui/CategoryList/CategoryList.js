import { getAllCategories } from "@/utils/getAllCategories";
import Link from "next/link";

const CategoryList = async () => {
  const data = await getAllCategories();
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
        {data?.map((category) => {
          return (
            // <div key={category.id} className="collapse hover:bg-base-200">
            //   <input type="radio" name="my-accordion-1" checked="checked" />

            //   <div className="collapse-title text-xl font-medium">
            //     <Link href={`${category.cat_name_en}`}>
            //       {category.cat_name_en}
            //     </Link>
            //   </div>
            //   <div className="collapse-content">
            //     <p>hello</p>
            //   </div>
            // </div>
            <div
              key={category.id}
              tabIndex={0}
              className="collapse bg-base-100 text-base-content focus:bg-base-200 hover:bg-base-200 focus:text-base-content"
            >
              <div className="collapse-title">
                <Link
                  href={`/duas/${category.cat_name_en
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/ /g, "-")}?cat=${category.cat_id}`}
                >
                  {category.cat_name_en}
                </Link>
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
