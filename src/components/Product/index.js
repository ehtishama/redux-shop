import React from "react"
import { Link } from "react-router-dom"
import { MdShoppingCart } from "react-icons/md"
import { setCart } from "../../redux/reducers/cartReducer"
import { useDispatch } from "react-redux"
import { commerce } from "../../lib/commerce"
import { IconButton } from "@material-ui/core"

function Product({ product }) {
  const { id, name, description, media, price } = product
  const dispatch = useDispatch()

  const handleAddCartClick = async () => {
    const { cart } = await commerce.cart.add(id, 1)
    dispatch(setCart(cart))
  }

  return (
    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-2" key={id}>
      <div className={"border rounded hover:shadow"}>
        <Link to={`/product-details/${id}`}>
          <div className="h-72 p-4">
            <img src={media.source} alt={name} className={"w-full h-full object-contain"} />
          </div>
          <div className="p-4">
            <div className="font-medium text-gray-600 h-6 overflow-hidden">{name}</div>
            <div className="text-gray-500">{price.formatted_with_symbol}</div>
          </div>
        </Link>

        <div className="flex justify-end" title="Add to cart">
          <IconButton onClick={handleAddCartClick}>
            <MdShoppingCart size={30} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Product
