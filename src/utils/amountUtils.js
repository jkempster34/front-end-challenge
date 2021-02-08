export const formatFigure = (amount, units) => {
  switch (units) {
    case "pound":
      return `£${formatNumber(amount)}`;
    default:
      return `${amount}${units}`;
  }
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
