import SupportFeaturedCard from "./SupportFeaturedCard"
import { FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";

  const features = [
    {
      title: "Free and fast delivery",
      text: "Free delivery for all orders over $140",
      icon: <FaTruck size={"40px"} />,
    },
    {
      title: "24/7 customer service",
      text: "Friendly 24/7 customer support",
      icon: <FaHeadset size={"40px"} />,
    },
    {
      title: "Money back guarantee",
      text: "We return money within 30 days",
      icon: <FaCheckCircle size={"40px"} />,
    },
  ];

function SupportFeatured() {
  return (
    <div className='container flex justify-evenly mt-[140px]'>
        {
            features.map((f, i) => <SupportFeaturedCard key={i} icon={f.icon} title={f.title} text={f.text} /> )
        }
    </div>
  )
}

export default SupportFeatured