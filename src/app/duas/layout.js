import CategoryList from "@/components/ui/CategoryList/CategoryList";

const CategoriesLayout = ({ children }) => {
  return (
    <div className="flex gap-2 w-full">
      <div className="w-1/4 bg-base-100 rounded-xl">
        <CategoryList />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default CategoriesLayout;
