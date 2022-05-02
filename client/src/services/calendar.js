// 추후 일정도 추가.
export const MakeCalendarEvents = (startArr, dueArr) => {
  const events = [];

  // 이벤트 식별자
  // 시작일 : 1000번대,
  // 예정일 : 2000번대,
  // 일정 : 3000번대.
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

  return events;
};
