import { GoChevronRight } from "react-icons/go";

function HeroLeftMenu() {
    const categories = [
    { name: "Women's Fashion", hasSubMenu: true },
    { name: "Men's Fashion", hasSubMenu: true },
    { name: "Electronics", hasSubMenu: false },
    { name: "Home & Lifestyle", hasSubMenu: false },
    { name: "Medicine", hasSubMenu: false },
    { name: "Sports & Outdoor", hasSubMenu: false },
    { name: "Baby's & Toys", hasSubMenu: false },
    { name: "Groceries & Pets", hasSubMenu: false },
    { name: "Health & Beauty", hasSubMenu: false },
  ];
  return (
    <div className="w-55 shadow-[inset_-0.5px_0_0_#000] pr-4">
      <ul className="space-y-4 pt-10">
        {categories.map((category, index) => <li key={index} className="flex justify-between">
          <a href="">{category.name}</a>
          <button className="cursor-pointer">{category.hasSubMenu? <GoChevronRight />: null}</button>
        </li>)}
      </ul>
    </div>
  )
}

export default HeroLeftMenu