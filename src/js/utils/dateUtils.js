'use strict';

const getDatetime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayInMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${year}-${month}-${dayInMonth} ${hours}:${minutes}:${seconds}`;
};

module.exports = { getDatetime };
