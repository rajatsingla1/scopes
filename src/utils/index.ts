import { formatDistanceToNow, isValid } from 'date-fns';
import parseISO from 'date-fns/parseISO';

export const tooltipText = {
  categoryVendor: `If you provide a unique wedding service then please fill out the "Other Services" Post.  It's whatever you provide - think Dance Lessons, Tattoo Artists, etc.`,
  dateVendor: `We recommend posting at least 6 months in advance to give couples time to book you.`,
  locationVendor: `Our posts charge by Date + State. We do not charge by Areas in a State. So you can select an unlimited number of Areas in any State. And you will not be charged to market to those Areas.`,
  venueLocationVendor: `Enter the City, State where your business has its address. We’ll market your business to couples exploring cities & areas near your address (no extra charge). This lets couples know about your business even if they are not searching for your exact City, State.`
};

export const debounce = (func: any, timeout = 400) => {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const formatPhoneNumber = (phoneNumberString: any) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '+1 (' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};

export const formatDate = (date: any) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  return `${month}/${day}/${year}`;
};

export const getAbsoluteDate = (date: any) => {
  if (!date) return '';
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  if (!(date instanceof Date)) {
    date = new Date(date.replace(/-/g, '/'));
  }

  return date.toLocaleDateString('en-US', options);
};

export const relativeTime = (date: string) => {
  const parsedDate = parseISO(date);
  const isValidDate = isValid(parsedDate);
  if (!isValidDate) return;

  return formatDistanceToNow(parsedDate);
};
