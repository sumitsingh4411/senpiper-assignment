import { ERROR_MESSAGE } from "./constant";

export const getAllError = (data: any, setError: Function, error: any) => {
  let tempError = { ...error };
  //check if any filed is empty or not

  // for name validation
  if (data.name.trim() === "") {
    tempError.name = ERROR_MESSAGE.EMPTY_ERROR;
  } else {
    tempError.name = "";
  }

  // for email validation
  if (data.email.trim() === "") {
    tempError.email = ERROR_MESSAGE.EMPTY_ERROR;
  } else if (!validateEmail(data.email)) {
    tempError.email = ERROR_MESSAGE.EMAIL_ERROR;
  } else {
    tempError.email = "";
  }

  // for phone validation
  if (data.phone.trim() === "") {
    tempError.phone = ERROR_MESSAGE.EMPTY_ERROR;
  } else if (data.phone.length < 10) {
    tempError.phone = "Please enter valid phone number";
  } else {
    tempError.phone = "";
  }

  // for service validation
  if (data.service.trim() === "") {
    tempError.service = ERROR_MESSAGE.EMPTY_ERROR;
  } else {
    tempError.service = "";
  }

  // for beverage validation
  if (data.beverage.trim() === "") {
    tempError.beverage = ERROR_MESSAGE.EMPTY_ERROR;
  } else {
    tempError.beverage = "";
  }

  // for clean validation
  if (data.clean.trim() === "") {
    tempError.clean = ERROR_MESSAGE.EMPTY_ERROR;
  } else {
    tempError.clean = "";
  }

  // for food validation
  if (data.food.trim() === "") {
    tempError.food = ERROR_MESSAGE.EMPTY_ERROR;
  } else {
    tempError.food = "";
  }
  setError(tempError);
  return tempError;
};

export const validateEmail = (email: string) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const checkHasError = (error: any) => {
  for (let key in error) {
    if (error[key] !== "") {
      return true;
    }
  }
  return false;
};

export const setItemToLocalStorage = (value: any) => {
  let data: any = localStorage.getItem("feedbackData");
  if (data) {
    data = JSON.parse(data);
    data.push(value);
    localStorage.setItem("feedbackData", JSON.stringify(data));
  } else {
    localStorage.setItem("feedbackData", JSON.stringify([value]));
  }
};

export const getDataFromLocalStorage = () => {
  let data: any = localStorage.getItem("feedbackData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
