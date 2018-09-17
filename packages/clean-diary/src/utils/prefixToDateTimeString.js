export default function prefixToDateTimeString(str) {
  let dateString = /^(\d{4}-\d{2}-\d{2})/.exec(str);
  dateString = dateString ? dateString[1] : '';

  let timeString = /--(\d{2}-\d{2})$/.exec(str);
  timeString = timeString ? timeString[1].replace('-', ':') : '00:00';

  return `${dateString}T${timeString}`;
}
