export const currentDate = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const firstDayOfWeek = () => {
  const currDate = new Date(currentDate());
  const dayOfWeek = currDate.getDay();
  const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const firstDayOfWeek = new Date(
    currDate.getTime() - daysToSubtract * 24 * 60 * 60 * 1000
  );
  return firstDayOfWeek;
};

export const firstDayOfMonth = () => {
  const currDate = new Date(currentDate());
  const month = currDate.getMonth();
  const year = currDate.getFullYear();
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = prevMonth === 11 ? year - 1 : year;
  const previousMonthDate = new Date(prevYear, prevMonth, currDate.getDate());
  return previousMonthDate;
};
