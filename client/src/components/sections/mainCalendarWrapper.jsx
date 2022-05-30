import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  GetCalendarMonthYear,
  MakeCalendarEvents,
} from "../../services/calendar";
import { ChangeCycleAsync, RequestCycleAsync } from "../../store/actions/cycle";
import { calcMonthYear, changeDayFull } from "../../services/calcDate";
import {
  RequestSchedulesAsync,
  SetCurSchedules,
} from "../../store/actions/schedule";
import { RequestTodosAsync } from "../../store/actions/todo";

const MainCalendarWrapper = ({
  setIsToggle,
  setSelectedDate,
  selectedDate,
}) => {
  const calendarRef = useRef();
  const dispatch = useDispatch();

  // 캘린더 이벤트 생성 함수.
  const events = MakeCalendarEvents();
  // console.log("calendar :", events);

  // 캘린더 달 prev, next 클릭 이벤트
  const movePrevMonth = () => {
    const calendarApi = calendarRef.current._calendarApi;
    const { month, year } = GetCalendarMonthYear(calendarApi);
    const calced_date = calcMonthYear("prev", month, year);

    dispatch(RequestTodosAsync(calced_date.yy, calced_date.mm));
    dispatch(RequestSchedulesAsync(calced_date.yy, calced_date.mm));
    dispatch(ChangeCycleAsync(calced_date.mm, calced_date.yy));

    calendarApi.prev();
  };

  const moveNextMonth = () => {
    const calendarApi = calendarRef.current._calendarApi;
    const { month, year } = GetCalendarMonthYear(calendarApi);
    const calced_date = calcMonthYear("next", month, year);

    dispatch(RequestTodosAsync(calced_date.yy, calced_date.mm));
    dispatch(RequestSchedulesAsync(calced_date.yy, calced_date.mm));
    dispatch(ChangeCycleAsync(calced_date.mm, calced_date.yy));

    calendarApi.next();
  };

  // 캘린더 날짜 클릭 이벤트
  // 날짜 선택 시, 버튼창 뜨도록...
  const onClickDate = (info) => {
    setIsToggle(true);

    const date = info.dateStr;
    const shortDay_info = info.date.toString().split(" ")[0];
    const day = changeDayFull(shortDay_info);

    setSelectedDate({
      date,
      day,
    });

    dispatch(SetCurSchedules(date, day));
  };

  return (
    <div className="main-calendar">
      <FullCalendar //
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "",
          center: "customPrev title customNext",
          end: "",
        }}
        // eventClick={function () {
        // alert("hi");
        // }}
        events={events}
        // eventClick={console.log("event click")}
        eventOverlap={true}
        dateClick={(info) => {
          onClickDate(info);
        }}
        customButtons={{
          customPrev: {
            text: "<",
            click: function () {
              movePrevMonth();
            },
          },
          customNext: {
            text: ">",
            click: () => {
              moveNextMonth();
            },
          },
        }}
      />
    </div>
  );
};

export default MainCalendarWrapper;
