import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function DateInput({
  format = "dd/mm/yyyy",
  label = "Date",
  setDate,
}) {
  const today = new Date();

  const [open, setOpen] = useState(false);
  const [popupTop, setPopupTop] = useState(true);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [day, setDay] = useState(today.getDate());

  const inputRef = useRef();
  const calendarRef = useRef();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar = [];
  for (let i = 0; i < firstDay; i++) calendar.push("");
  for (let i = 1; i <= daysInMonth; i++) calendar.push(i);

  const goPrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  const goNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const selectDate = (selectedDay) => {
    setDay(selectedDay);
    const finalydate = {
      "day" : selectedDay,
      "month" : month+1,
      "year" : year
    }
    setDate(finalydate)
    setOpen(false);
    let formatted = "";
    if (format === "dd/mm/yyyy")
      formatted = `${selectedDay.toString().padStart(2, "0")}/${(month + 1)
        .toString()
        .padStart(2, "0")}/${year}`;
    else if (format === "mm/dd/yyyy")
      formatted = `${(month + 1).toString().padStart(2, "0")}/${selectedDay
        .toString()
        .padStart(2, "0")}/${year}`;
    inputRef.current.value = formatted;
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const popupHeight = 360;
      setPopupTop(spaceBelow < popupHeight);
    }
  }, [open]);

  useEffect(()=>{
   const finalydate = {
      "day" : day,
      "month" : month+1,
      "year" : year
    }
    setDate(finalydate)
  },[])

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
         <span
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Icon icon="mdi:calendar" width="20" height="20" />
        </span>
        <input
          ref={inputRef}
          type="text"
          placeholder={label}
          defaultValue={`${day}/${month+1}/${year}`}
          readOnly
          onClick={() => setOpen((prev) => !prev)}
          className="w-full placeholder:font-semibold placeholder:text-black px-4 py-2 pl-10 rounded-md border border-[#e0ebeb] focus:outline-none "
        />
        
      </div>

      {open && (
        <div
          ref={calendarRef}
          className={`absolute w-[350px] rounded-2xl shadow-md border border-gray-200 p-6 bg-[#e2ecec] z-10`}
          style={{
            top: popupTop ? "auto" : "100%",
            bottom: popupTop ? "100%" : "auto",
            marginTop: popupTop ? "0" : undefined,
            marginBottom: popupTop ? "8px" : undefined,
          }}
        >
          <div className="flex items-center justify-between w-full px-1 py-2 mb-3">
            <span
              onClick={goPrevMonth}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-500 hover:bg-gray-100"
            >
              <Icon icon="mdi:chevron-left" width="18" height="18" />
            </span>
            <div className="text-lg font-semibold">
              {months[month]} {year}
            </div>
            <span
              onClick={goNextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-500 hover:bg-gray-100"
            >
              <Icon icon="mdi:chevron-right" width="18" height="18" />
            </span>
          </div>

          <div className="rounded-xl border border-gray-500 p-4">
            <div className="grid grid-cols-7 text-center text-sm  mb-2">
              {daysName.map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {calendar.map((d, i) => (
                <div
                  key={i}
                  onClick={() => d && selectDate(d)}
                  className={`h-9 flex items-center justify-center rounded-md ${
                    d ? "hover:bg-[#1e5959] cursor-pointer" : ""
                  } ${d === day ? "bg-[#1e5959] text-white" : ""}`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
