
import CommonHeader from "../CommonComponent/CommonHeader"
import CommonTitle from "../CommonComponent/CommonTitle"
import CategorySection from "./CategorySection/CategorySection"

function Categories() {
  return (
    <div className="container mt-20 relative">
      <CommonTitle text={"Categories"}/>
      <CommonHeader text={"Browse By Category"} />
      <CategorySection />
      <div className="bg-[#b3b3b3] mt-[70px] h-px"></div>
    </div>
  )
}

export default Categories