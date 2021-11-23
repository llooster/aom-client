import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Row, Col, Button } from "antd";
import "./V2Calendar.scss";

const dayOfWeeks = ["일", "월", "화", "수", "목", "금", "토"];

const V2Calendar = (props) => {
  const { date, onSelect, prevMonth, nextMonth } = props;

  const drawDayOfWeeks = () => {
    return dayOfWeeks.map((dayOfWeek, index) => {
      return <div key={index} className="box">
          <span className="text">{dayOfWeek}</span>
        </div>
    });
  };

  const drawDates = () => {
    const month = date.clone().month();
    const startWeek = date.clone().startOf("month").week();
    const endWeek =
      date.clone().endOf("month").week() === 1
        ? 53
        : date.clone().endOf("month").week();

    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <Row key={week}>
          <Col className="days" span={24}>
            {" "}
            {Array(7)
              .fill(0)
              .map((n, i) => {
                let current = date
                  .clone()
                  .week(week)
                  .startOf("week")
                  .add(n + i, "day");
                let currentMonth = current.clone().month();
                let currentDate = current.clone().date();
                let visible = month === currentMonth ? "" : "hidden";
                let selected = date.date() === currentDate ? "selected" : "";

                return <div
                    key={i}
                    className={`box box-${i} ${visible} ${selected}`}
                  >
                    <span className={`text`} onClick={() => onSelect(current)}>
                      {current.format("D")}
                    </span>
                  </div>
              })}
          </Col>
        </Row>
      );
    }
    return calendar;
  };

  return (
    <Row>
      <Col className="V2Calendar" span={24}>
        <div className="head">
          <Button className="arrow" onClick={prevMonth}>
            <MdChevronLeft />
          </Button>
          <span>{date.format("MMM")}</span>
          <Button className="arrow" onClick={nextMonth}>
            <MdChevronRight />
          </Button>
        </div>
        <div className="middle">
          <span className="sub">{date.format("YYYY")}</span>
        </div>
        <div className="body">
          <Row>
            <Col className="days" span={24}>
              {drawDayOfWeeks()}
            </Col>
          </Row>
          {drawDates()}
        </div>
      </Col>
    </Row>
  );
};

export default V2Calendar;