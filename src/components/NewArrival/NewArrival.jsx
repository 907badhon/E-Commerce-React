import CommonTitle from "../CommonComponent/CommonTitle";
import CommonHeader from "../CommonComponent/CommonHeader";
import NewArrivalImg from "./NewArrivalImg"

function NewArrival() {
  return (
    <div className="container mt-[140px] ">
      <CommonTitle text={"Featured"} />
      <CommonHeader text={"New Arrival"} />
      <NewArrivalImg />
    </div>
  );
}

export default NewArrival;
