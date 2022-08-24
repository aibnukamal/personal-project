import dayjs from 'dayjs';

/**
 * formatDate, get formated date
 * @param {Date} date, input date
 * @param {string} format, format date
 *
 * @returns {date} response date object
 *
 */
export const formatDate = (date, format = 'DD MMM YYYY') => {
  return dayjs(date).format(format);
};
