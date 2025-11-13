function DiscountBadge({ text = "-50%" }) {
  return (
      <div
        className={`bg-primary text-white text-xs px-3 py-1 rounded absolute top-[13px] left-3 `}
      >
        {text}
      </div>
  );
}

export default DiscountBadge;
