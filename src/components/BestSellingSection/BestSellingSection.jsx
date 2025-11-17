import CommonTitle from "../CommonComponent/CommonTitle"
import CommonHeader from "../CommonComponent/CommonHeader"
import BestSellingCard from "./BestSellingCard"

function BestSellingSection() {
  return (
    <div className='container mt-[70px] relative'>
        <CommonTitle text={"This Month"}  />
        <CommonHeader text={"Best Selling Products"} />
        <BestSellingCard />
    </div>
  )
}

export default BestSellingSection