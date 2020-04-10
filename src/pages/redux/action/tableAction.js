export const deleteData = (id) => {
  return {
    type: "DELETE_DATA",
    id,
  };
};
export const showDialog = (id) => {
  return {
    type: "SHOW_DIALOG",
    id,
  };
};
