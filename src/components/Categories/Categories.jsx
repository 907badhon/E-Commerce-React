
import CommonHeader from "../CommonComponent/CommonHeader"
import CommonTitle from "../CommonComponent/CommonTitle"
import CategorySection from "./CategorySection/CategorySection"

function Categories() {
  return (
    <div className="container mt-20 relative">
      <CommonTitle text={"Categories"}/>
      <CommonHeader text={"Browse By Category"} />

      <CategorySection />
    </div>
  )
}

export default Categories