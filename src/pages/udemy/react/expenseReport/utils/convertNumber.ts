const convertNumber = (price: string) => {
  return Number(price.slice(1).replace(",", ""));
};

export default convertNumber;
