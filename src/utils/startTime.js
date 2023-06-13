import { formatDateTime } from './formatDate';

export const startTime = (func, timezone) => {
  const timer = setInterval(() => {
    func(formatDateTime(timezone));
  }, 1000);
  return timer;
};



