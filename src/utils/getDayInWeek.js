export const getDayInWeek = (dateString) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  const today = new Date(); // Поточна дата
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1); // Завтрашня дата

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return "Tomorrow";
  } else {
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    return dayOfWeek;
  }
}