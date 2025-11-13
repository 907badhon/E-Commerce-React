import ItemSearch from "./ItemSearch/ItemSearch";

function Navbar() {
  return (
    <div className="shadow-[inset_0_-0.2px_0_#000]">
      <div className="container h-[60px] flex items-center justify-between">
        <h1 className="text-black font-bold text-2xl antialiased">Exclusive</h1>
        <ul className="flex space-x-12">
            <li><a className="border-b" href="">Home</a></li>
            <li><a className="hover:border-b" href="">Contact</a></li>
            <li><a className="hover:border-b" href="">About</a></li>
            <li><a className="hover:border-b" href="">Sign Up</a></li>
        </ul>
        <ItemSearch />
      </div>
    </div>
  );
}

export default Navbar;
