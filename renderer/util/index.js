export const currentDate = () => {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  var day = ('0' + currentDate.getDate()).slice(-2);
  var formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
};
