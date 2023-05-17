const TooltipComponent = (name, link) => {
  return (
    <div className="tooltip-styles">
      <h2>{name}</h2>
      <input
        type="button"
        value="Download"
        onClick={navigate("www.google.com")}
      />
    </div>
  );
};

export default TooltipComponent;
