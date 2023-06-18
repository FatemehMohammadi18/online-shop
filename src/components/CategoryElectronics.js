import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContextProvider";
import { CategoryProductCart } from "./shared/CategoryProductCart";
const  CategoryElectronics = () => {
  const products = useContext(ProductContext)

  // گروه‌بندی محصولات براساس دسته‌بندی آن‌ها
  const groupedProducts = {};
  products.forEach((product) => {
    if (product.category === "electronics") {
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
          <div key={category} className=" w-full flex flex-col items-center bg-cyan-500 p-8">
              <h2 className=" font-black text-4xl">{category.toUpperCase()}</h2>
              <div className="flex flex-wrap justify-center mt-14">
            {groupedProducts[category].map((product) => (
                <CategoryProductCart key={product.id}
                                    product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryElectronics;