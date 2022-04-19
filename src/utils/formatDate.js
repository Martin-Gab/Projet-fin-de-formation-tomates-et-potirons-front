// function to format the dates retrieved from the DB (yyyy-mm-dd to dd-mm-year)

const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  // Extract the parts of the date
  const day = date.getDate();
  // if the month is > 10 the date.getMonth returns (for exemple) "9" instead of "09"
  // so we need to add a "0" in front for all numbers > to 10
  const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export default formatDate;
