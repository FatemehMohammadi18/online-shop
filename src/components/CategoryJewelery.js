import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContextProvider";
import { CategoryProductCart } from "./shared/CategoryProductCart";
const  CategoryJewelery = () => {
  const products = useContext(ProductContext)

  // گروه‌بندی محصولات براساس دسته‌بندی آن‌ها
  const groupedProducts = {};
  products.forEach((product) => {
    if (product.category === "jewelery") {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [product];
      } else {
        groupedProducts[product.category].push(product);
      }
    }
  });
  return (
    <div>
      {Object.keys(groupedProducts).map((category) => (
          <div key={category} className=" w-full flex flex-col items-center bg-purple-600 p-8">
              <h2 className=" font-black text-4xl">{category.toUpperCase()}</h2>
              <div className="flex flex-wrap justify-center mt-14">
               {groupedProducts[category].map((product) => (
                  <CategoryProductCart key={product.title}
                                    product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryJewelery;