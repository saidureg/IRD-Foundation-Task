"use client";
import Link from "next/link";
import { useState } from "react";

const Accordion = ({ items }) => {
  //   console.log(items);
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index} className="accordion-item">
          <Link
            href={`/duas/${item.cat_name_en
              .toLowerCase()
              .replace(/ & /g, "-&-")
              .replace(/ /g, "-")}?cat=${item.cat_id}`}
          >
            <div
              className={`accordion-header hover:bg-base-200 ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="flex justify-between">
                <p className="flex flex-col">
                  <span>{item.cat_name_en}</span>
                  <span className="text-xs mt-1 text-gray-400 font-medium">
                    Subcategory: {item.no_of_subcat}
                  </span>
                </p>
                <p className="flex flex-col text-center">
                  <span>{item.no_of_dua}</span>
                  <span className="text-gray-400"> Duas</span>
                </p>
              </div>
            </div>
          </Link>
          {openIndex === index && (
            <div className="accordion-content space-y-3 mx-1">
              {item.subCategory.map((subCategory) => (
                <ul
                  key={subCategory.id}
                  className="cursor-pointer text-sm text-gray-500"
                >
                  <li className="list-disc">{subCategory.subcat_name_en}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
