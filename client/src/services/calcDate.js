// 추후 캘린더에서 날짜 선택시 바뀌는 것도 만들어야 함.

export default function calcDate(data) {
  if (data === undefined) {
    const date = new Date();
    const date_string =
      //
      `${getDayString(date.getDay())}, ${getMonthString(
        date.getMonth()
      )} ${date.getDate()}`;

    return date_string;
  } else {
    console.log("2022-04-29");
  }
}

function getDayString(day) {
  switch (day) {
    case 0: {
      return "Sunday";
    }
    case 1: {
      return "Monday";
    }
    case 2: {
      return "Tuesday";
    }
    case 3: {
      return "Wednesday";
    }
    case 4: {
      return "Thursday";
    }
    case 5: {
      return "Friday";
    }
    case 6: {
      return "Saturday";
    }
    default:
      return "";
  }
}

function getMonthString(month) {
  switch (month) {
    case 0: {
      return "January";
    }
    case 1: {
      return "February";
    }
    case 2: {
      return "March";
    }
    case 3: {
      return "April";
    }
    case 4: {
      return "May";
    }
    case 5: {
      return "June";
    }
    case 6: {
      return "July";
    }
    case 7: {
      return "August";
    }
    case 8: {
      return "September";
    }
    case 9: {
      return "October";
    }
    case 10: {
      return "November";
    }
    case 11: {
      return "December";
    }
    default:
      return "";
  }
}
