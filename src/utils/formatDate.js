export default function formatDate(dateStr) {
  const date = new Date(dateStr);
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const dayOfWeekNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const month = monthNames[date.getMonth()];
  const dayNumber = date.getDate();
  const dayOfWeek = dayOfWeekNames[date.getDay()];
  return `${month} ${dayNumber.toString().padStart(2, '0')} ${dayOfWeek}`;
}