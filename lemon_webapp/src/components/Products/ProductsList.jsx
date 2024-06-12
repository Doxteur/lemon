import React, { useEffect } from "react";
import FilterBar from "./FilterBar";
import Pagination from "../Tables/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/reducers/Products";
import { Link } from "react-router-dom";

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts()).unwrap().then((data) => console.log("Jd fetch",data));
  }, [dispatch]);

  return (
    <>
      {/* component */}
      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Derniers produits
            </h2>
          </div>
          <FilterBar />
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {/* More products... */}
                {products.map((product) => (
                  <Link to={`/product/${product.slug}`} key={product.ean}>
                    <li
                      className="inline-flex w-64 flex-col text-center "
                      key={product.ean}
                    >
                      <div className="group relative">
                        <div className="overflow-hidden rounded-md bg-gray-200 hover:shadow-lg transition-shadow duration-300">
                          <img
                          src={product?.images[0]?.path}
                            alt="Black machined steel pen with hexagonal grip and small white logo at top."
                            className="w-64 h-64 object-center object-cover "
                          />
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">{product.ean}</p>
                          <h3 className="mt-1 font-semibold text-gray-900">
                            <a href="#">
                              <span className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-gray-900">{product.price}</p>
                        </div>
                      </div>
                      <h4 className="sr-only">Available colors</h4>
                      <ul
                        role="list"
                        className="mt-auto flex items-center justify-center space-x-3 pt-6"
                      >
                        <li
                          className="h-4 w-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: "#111827" }}
                        >
                          <span className="sr-only">Black</span>
                        </li>
                        <li
                          className="h-4 w-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: "#fde68a" }}
                        >
                          <span className="sr-only">Brass</span>
                        </li>
                        <li
                          className="h-4 w-4 rounded-full border border-black border-opacity-10"
                          style={{ backgroundColor: "#e5e7eb" }}
                        >
                          <span className="sr-only">Chrome</span>
                        </li>
                      </ul>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 float-right">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
