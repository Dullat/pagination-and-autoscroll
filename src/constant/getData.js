const getData = async (page) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    )
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default getData
