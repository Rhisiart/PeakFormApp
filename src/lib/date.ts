export const getCurrentWeekDays = (offset: number) => {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const currentDay = currentDate.getDate();

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDay - currentDayOfWeek + 7 * offset);

  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const newDate = new Date(startOfWeek);
    newDate.setDate(startOfWeek.getDate() + i);

    days.push(newDate);
  }

  return days;
};

export const isToday = (date: Date) => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
