import React, { useEffect, useState } from "react"
import getData from "./constant/getData"

const Pagination = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const getProducts = async () => {
    try {
      const data = await getData(page)
      if (data) {
        setProducts(data.products)
        setTotalPages(Math.ceil(data.total / 10))
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePages = (value) => {
    setPage((prev) => prev + value)
  }

  useEffect(() => {
    getProducts()
  }, [page])
  return (
    <div className="w-full flex flex-col select-none">
      <div className="flex gap-2 m-auto *:w-8 *:text-center *:border-[1px] *:border-black *:rounded-sm ">
        <span
          onClick={() => handlePages(-1)}
          className={`${
            page === 1
              ? "opacity-70 cursor-default pointer-events-none"
              : "opacity-1 cursor-pointer"
          }`}
        >
          👈
        </span>
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index + 1}
            onClick={() => setPage(index + 1)}
            className={`cursor-pointer ${
              index + 1 === page || index === page || index + 2 === page
                ? "flex justify-center"
                : "hidden"
            } ${
              index + 1 === page ? "bg-red-400 text-white" : "hover:bg-red-200"
            }`}
          >
            {index + 1}
          </span>
        ))}
        <span
          onClick={() => handlePages(1)}
          className={`${
            page === totalPages
              ? "opacity-70 cursor-default pointer-events-none"
              : "opacity-1 cursor-pointer"
          }`}
        >
          👉
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.length > 0 &&
          products.map((prod) => (
            <div
              key={prod.title}
              className="p-4 bg-slate-500 rounded-md text-center"
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-full max-w-80 m-auto mb-4"
              />
              <span>{prod.title}</span>
            </div>
          ))}
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Pagination
