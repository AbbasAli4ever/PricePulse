const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        right: "20px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        left: "20px",
        zIndex: 1,
      }}
      onClick={onClick}
    ></div>
  );
};

export { PrevArrow, NextArrow };
