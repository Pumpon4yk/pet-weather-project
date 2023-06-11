export const getDayInWeek = (dateString) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  const dayOfWeekIndex = date.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];
  return dayOfWeek;
}