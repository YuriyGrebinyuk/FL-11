const formatTime = (time) => {
  let result;
  let day = Math.floor(time / (24 * 60));
  let hours = Math.floor((time % (24 * 60)) / 60);
  let minutes = (time % (24 * 60)) % 60;
  result = `${day} day(s) ${hours} hour(s) ${minutes} minute(s)`;
  return result;
}

formatTime(3601);
