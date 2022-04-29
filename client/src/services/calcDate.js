// 맨 처음 홈화면으로 이동했을 때, 오늘 날짜 계산 함수.
export function toDayInfo() {
  const today = new Date();

  const date_info = today.toString().split(" ");
  const day = changeDayFull(date_info[0]);
  const mm = changeMonthInt(date_info[1]);
  const dd = date_info[2];
  const yy = date_info[3];

  return {
    date: `${yy}-${mm}-${dd}`,
    day: day,
  };
}

export function printDayInfo(info) {
  const [yy, mm, dd] = info.date.split("-");

  return `${info.day}, ${changeMonthFromIntToFull(mm)} ${dd}`;
}

export function changeDayFull(day) {
  switch (day) {
    case "Sun":
      return "Sunday";
    case "Mon":
      return "Monday";
    case "Tue":
      return "Tuesday";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Fri":
      return "Friday";
    case "Sat":
      return "Saturday";
    default:
      return "day";
  }
}

export function changeMonthFull(month) {
  switch (month) {
    case "Jan": {
      return "January";
    }
    case "Feb": {
      return "February";
    }
    case "Mar": {
      return "March";
    }
    case "Apr": {
      return "April";
    }
    case "May": {
      return "May";
    }
    case "Jun": {
      return "June";
    }
    case "Jul": {
      return "July";
    }
    case "Aug": {
      return "August";
    }
    case "Sep": {
      return "September";
    }
    case "Oct": {
      return "October";
    }
    case "Nov": {
      return "November";
    }
    case "Dec": {
      return "December";
    }
    default:
      return "";
  }
}

export function changeMonthInt(month) {
  switch (month) {
    case "Jan": {
      return "01";
    }
    case "Feb": {
      return "02";
    }
    case "Mar": {
      return "03";
    }
    case "Apr": {
      return "04";
    }
    case "May": {
      return "05";
    }
    case "Jun": {
      return "06";
    }
    case "Jul": {
      return "07";
    }
    case "Aug": {
      return "08";
    }
    case "Sep": {
      return "09";
    }
    case "Oct": {
      return "10";
    }
    case "Nov": {
      return "11";
    }
    case "Dec": {
      return "12";
    }
    default:
      return "";
  }
}

function changeMonthFromIntToFull(month) {
  switch (month) {
    case "01": {
      return "January";
    }
    case "02": {
      return "February";
    }
    case "03": {
      return "March";
    }
    case "04": {
      return "April";
    }
    case "05": {
      return "May";
    }
    case "06": {
      return "June";
    }
    case "07": {
      return "July";
    }
    case "08": {
      return "August";
    }
    case "09": {
      return "September";
    }
    case "10": {
      return "October";
    }
    case "11": {
      return "November";
    }
    case "12": {
      return "December";
    }
    default:
      return "";
  }
}
