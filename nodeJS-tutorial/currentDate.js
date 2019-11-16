const currentDate = new Date();

module.exports.currentDate = currentDate;

module.exports.getMessage = function(name) {
  let hour = currentDate.getHours();

  if (hour > 18) return `Good night ${name} !`;
  else if (hour > 12) return `Good day ${name} !`;
  else return `Good morning ${name} !`;
};
