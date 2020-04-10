export const getData = () => {
  return {
    type: "GET_DATA",
  };
};
export const successData = (data) => {
  return {
    type: "SUCCESS_DATA",
    data,
    status: 1,
  };
};
export const errorData = () => {
  return {
    type: "ERROR_DATA",
    status: 2,
  };
};
