// Functions to calculate the price of the membership

export const calculateBasketPrice = (state) => {
  let basketPrice;

  if (state.basketFull && state.oneMonthChecked && state.basketOption) {
    basketPrice = 30;
  }
  else if (state.basketHalf && state.oneMonthChecked && state.basketOption) {
    basketPrice = 15;
  }
  else if (state.basketFull && state.fiveMonthChecked && state.basketOption) {
    basketPrice = 25 * 5;
  }
  else if (state.basketHalf && state.fiveMonthChecked && state.basketOption) {
    basketPrice = 12.5 * 5;
  }
  else if (state.basketFull && state.tenMonthChecked && state.basketOption) {
    basketPrice = 20 * 10;
  }
  else if (state.basketHalf && state.tenMonthChecked && state.basketOption) {
    basketPrice = 10 * 10;
  }
  else {
    basketPrice = 0;
  }

  return basketPrice;
};

export const calculateTotalPrice = (membershipPrice, basketPrice, donation) => (
  membershipPrice + basketPrice + Number(donation)
);

export const monthlyPayment = (state) => {
  let monthlyPaymentValue;

  if (state.basketFull && state.fiveMonthChecked && state.monthlyChecked) {
    monthlyPaymentValue = '(25€ x 5)';
  }
  else if (state.basketHalf && state.fiveMonthChecked && state.monthlyChecked) {
    monthlyPaymentValue = '(12.5€ x 5)';
  }
  else if (state.basketFull && state.tenMonthChecked && state.monthlyChecked) {
    monthlyPaymentValue = '(20€ x 10)';
  }
  else if (state.basketHalf && state.tenMonthChecked && state.monthlyChecked) {
    monthlyPaymentValue = '(10€ x 10)';
  }
  else {
    monthlyPaymentValue = '';
  }

  return monthlyPaymentValue;
};

export const checkCustomPayment = (state, totalPrice) => {
  if ((state.nberCheck * state.amount) === totalPrice) {
    return true;
  }
  return false;
};
