import { useSelector } from "react-redux";

// 캘린더 이벤트 생성 함수.
// 추후 일정도 추가.
export const MakeCalendarEvents = () => {
  // 생리 관련 정보들
  const cycleToggle = useSelector((state) => state.cycle.toggled);
  const startArr = useSelector((state) => state.cycle.start_dates);
  const dueArr = useSelector((state) => state.cycle.due_dates);

  // 이벤트 식별자
  // 시작일 : 1000번대,
  // 예정일 : 2000번대,
  // 일정 : 3000번대.
  const events = [];

  // 토클 ON/OFF 기능
  // 일정도 추가 해야 함.
  if (cycleToggle === "ON") {
    startArr.forEach((item, idx) => {
      events.push({
        id: 1000 + idx,
        title: `시작일 ${idx}`,
        date: item.date,
        classNames: ["menstruation-start-date"],
      });
    });

    dueArr.forEach((item, idx) => {
      events.push({
        id: 2000 + idx,
        title: `예정일 ${idx}`,
        date: item.date,
        classNames: ["menstruation-due-date"],
      });
    });
  } else {
    // 일정만 추가
  }

  return events;
};

// 일기 이벤트를 만드는 함수.
export const MakeDiaryEvents = () => {
  const diarys = useSelector((state) => state.diary.month_diary);
  const events = [];

  diarys.forEach((diary, idx) => {
    events.push({
      id: diary.diary_no,
      title: diary.content,
      date: diary.date,
      classNames: [`diary-event diary-event-${diary.emotion}`],
    });
  });

  return events;
};

export const GetCalendarMonthYear = (calendarApi) => {
  const { viewTitle } = calendarApi.getCurrentData();
  const [month, year] = viewTitle.split(" ");

  return { month, year };
};
