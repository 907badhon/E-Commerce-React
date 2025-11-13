function CommonTitle({ text }) {
  return (
    <div className="flex items-center space-x-4 ">
      <div className="w-5 h-10 bg-primary rounded"></div>
      <strong className="text-[#DB4444]">{text}</strong>
    </div>
  );
}

export default CommonTitle;
