import InputBox from './InputBox'
import AddToCart from './AddtoCart'
import FavoriteCart from './FavoriteCart'

function ItemSearch() {
  return (
    <div className='flex-center space-x-4'>
        <InputBox />
        <FavoriteCart />
        <AddToCart />
    </div>
  )
}

export default ItemSearch