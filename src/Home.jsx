import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link
        to="/pagination-and-autoscroll/pagination"
        className="text-3xl text-blue-600 underline my-8 block"
      >
        pagination
      </Link>
    </div>
  )
}

export default Home
