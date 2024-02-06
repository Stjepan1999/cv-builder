export const formatDate = (date) => {
  const dateInput = new Date(date);
  const yyyy = dateInput.getFullYear();
  let mm = dateInput.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  return `${mm}/${yyyy}`;
};
