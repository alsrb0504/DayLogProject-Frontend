import { useSelector } from "react-redux";
import { editScheduleEnd } from "./calcDate";

// 홈 화면 캘린더 이벤트 생성 함수.
// 생리 기록, 일정 이벤트 생성.
export const MakeCalendarEvents = () => {
  const events = [];
  // 생리 관련 정보들
  const cycleToggle = useSelector((state) => state.cycle.toggled);
  const startArr = useSelector((state) => state.cycle.start_dates);
  const dueArr = useSelector((state) => state.cycle.due_dates);

  // 일정 정보
  const scheduleArr = useSelector((state) => state.schedule.month_schedules);

  scheduleArr.forEach((schedule, idx) => {
    const { schedule_no, start_date, end_date, title } = schedule;

    // 시작 날짜와 종료 날짜가 같은 경우 캘린더에 일정 이벤트 표시가 안 됨.
    // 예외로 "schedule-event-same" 클래스를 추가하여 따로 스타일 설정

    // FullCalendar 표기를 위해 마지막 날짜만 하루 더 추가.
    // date_info = { is_same , date };
    // const date_info = editScheduleEnd(start_date, end_date);
    const date_info = editScheduleEnd(start_date, end_date);

    const edited_end = date_info.date;
    const is_same = date_info.is_same;

    events.push({
      id: schedule_no,
      title: `${title} 일정`,
      start: start_date,
      end: edited_end,
      classNames: [
        `${is_same && "schedule-event-same"} schedule-event schedule-event-${
          schedule_no % 7
        }`,
      ],
      backgroundColor: "tomato",
      borderColor: "transparent",
      display: "block",
    });
  });

  console.log(events);

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
  }

  return events;
};

// 일기 캘린더
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

// 출석 캘린더 이벤트 만드는 함수
// 이모지 캘린더
export const MakeEmojiEvents = () => {
  const emojiArr = useSelector((state) => state.qa.month_emoji);
  const events = [];

  console.log(emojiArr);

  emojiArr.forEach((emoji, idx) => {
    console.log(emoji);
    events.push({
      id: idx,
      date: emoji.date,
      classNames: [`emoji-event emoji-event-${emoji.emoji_index}`],
    });
  });

  return events;
};
