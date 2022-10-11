export const TAB_NAME = [
  {
    id: 1,
    name: "FeedBack Form",
  },
  {
    id: 2,
    name: "FeedBack List",
  },
];

export const enum URLPaths {
  FEEDBACK_FORM = "/feedback-form",
  FEEDBACK_LIST = "/feedback-list",
  HOME = "/",
  FEEDBACK_SUCCESS = "/feedback-success",
}

export const enum PAGE_KEY {
  FEEDBACK_FORM = 0,
  FEEDBACK_LIST = 1,
}

export const enum FEEDBACK_FORM_LABEL {
  SERVICE = "Please rate the quality of service you received from your host.",
  BEVERAGE = "Please rate the quality of your beverage.",
  CLEAN = "Was our restaurant clean?",
  FOOD = "Please rate your overall dining experience.",
}

export const CHECKBOX_LABEL = [
  {
    id: 1,
    label: "Excellent",
  },
  {
    id: 2,
    label: "Good",
  },
  {
    id: 3,
    label: "Fair",
  },
  {
    id: 4,
    label: "Bad",
  },
];

export const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  beverage: "",
  clean: "",
  food: "",
};

export const enum ERROR_MESSAGE {
  EMPTY_ERROR = "Please enter value for the above field",
  EMAIL_ERROR = "Please enter valid email",
  PHONE_ERROR = "Please enter valid phone number",
}
