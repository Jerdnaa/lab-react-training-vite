const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div
      style={{
        height: "200px",
        width: "500px",
        border: "1px solid black",
        color: `${color}`,
        backgroundColor: `${bgColor}`,
      }}
    >
      <h3>{type}</h3>
      <p>{number.replace(/.(?=.{4})/g, "*")}</p>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
