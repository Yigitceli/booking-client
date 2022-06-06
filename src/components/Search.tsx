import React, { useRef, useState } from "react";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, RangeKeyDict } from "react-date-range";
import useOnClickOutside from "../hooks/useClickOutside";
import { GiPerson } from "react-icons/gi";

interface IDates {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

interface IOptions {
  adult: number;
  room: number;
  children: number;
}

function Search() {
  const dateRef = useRef(null);
  const optionsRef = useRef(null);
  const openDateRef = useRef(null)
  const openOptionsRef = useRef(null)
  useOnClickOutside(dateRef, () => setDateOpen(false), openDateRef);
  useOnClickOutside(optionsRef, () => setOptionsOpen(false), openOptionsRef);

  const [options, setOptions] = useState<IOptions>({
    adult: 1,
    room: 1,
    children: 0,
  });

  const [dates, setDates] = useState<IDates>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [dateOpen, setDateOpen] = useState<boolean>(false);
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false);

  const handleSelect = (ranges: RangeKeyDict) => {
    setDates({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: ranges.selection.key,
    });
  };

  const handleDateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDateOpen(!dateOpen);
  };

  const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOptionsOpen(!optionsOpen);
  };

  const optionsClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    actionType: "d" | "i"
  ) => {
    if (actionType === "d") {
      const { name } = e.currentTarget;
      const target = ((options[name as keyof IOptions] as number) -
        1) as number;
      setOptions((prev) => {
        return {
          ...prev,
          [name]: target,
        };
      });
    } else {
      const { name } = e.currentTarget;
      const target = ((options[name as keyof IOptions] as number) +
        1) as number;
      setOptions((prev) => {
        return {
          ...prev,
          [name]: target,
        };
      });
    }
  };

  return (
    <div className="w-full bg-[#003580] flex justify-center h-16">
      <div className="max-w-[1024px] flex w-full p-3 relative ">
        <div className="absolute left-0 top-8 flex w-full border-[3px] border-solid border-[#febb02] bg-white p-2 rounded-lg justify-around">
          <div className="flex items-center text-[#d4d4d4] justify-center gap-2 ">
            <FaBed fontSize={"20px"} />
            <input
              placeholder="Where are you going?"
              className="focus:outline-none placeholder:text-slate-900 placeholder:text-sm text-slate-900 text-sm"
            />
          </div>
          <button
            className="flex items-center text-[#d4d4d4] justify-center gap-2"
            onClick={handleDateClick}
            ref={openDateRef}
          >
            <FaCalendarAlt fontSize={"20px"} />
            <p>
              {dates?.startDate?.toLocaleDateString()} to{" "}
              {dates?.endDate?.toLocaleDateString()}
            </p>
          </button>
          <button
            className="flex items-center text-[#d4d4d4] justify-center gap-2"
            onClick={handleOptionsClick}
            ref={openOptionsRef}
          >
            <GiPerson fontSize={"20px"} />
            <p>
              {options.adult} Adults · {options.children} Children ·{" "}
              {options.room} Rooms
            </p>
          </button>
          <button className="p-2 text-white bg-[#0874c4]">Search</button>
        </div>
        {dateOpen && (
          <div ref={dateRef} className="absolute z-20 top-24 left-80 shadow-regular">
            <DateRange
              ranges={[dates]}
              onChange={handleSelect}
              minDate={new Date()}
            />
          </div>
        )}
        {optionsOpen && (
          <div
            ref={optionsRef}
            className="text-[#878486] absolute z-20 top-24 right-52 flex flex-col shadow-regular p-4 rounded-xl w-52 gap-2 bg-white"
          >
            <div className="flex justify-between">
              <span>Adult</span>
              <div className="flex gap-2 items-center">
                <button
                  className="flex items-center justify-center border-2 border-solid border-[#0474c4] w-8 h-8 disabled:cursor-not-allowed"
                  disabled={options.adult <= 1}
                  name="adult"
                  onClick={(e) => optionsClickHandler(e, "d")}
                >
                  -
                </button>
                <span>{options.adult}</span>
                <button
                  className="flex items-center justify-center border-2 border-solid border-[#0474c4] w-8 h-8 disabled:cursor-not-allowed"
                  name="adult"
                  onClick={(e) => optionsClickHandler(e, "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Children</span>
              <div className="flex gap-2 items-center">
                <button
                  className="flex items-center justify-center border-2 border-solid border-[#0474c4] w-8 h-8 disabled:cursor-not-allowed"
                  disabled={options.children <= 0}
                  name="children"
                  onClick={(e) => optionsClickHandler(e, "d")}
                >
                  -
                </button>
                <span>{options.children}</span>
                <button
                  className="flex items-center justify-center border-2 border-solid border-[#0474c4] w-8 h-8 disabled:cursor-not-allowed"
                  name="children"
                  onClick={(e) => optionsClickHandler(e, "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Room</span>
              <div className="flex gap-2 items-center">
                <button
                  className="flex items-center justify-center border-2 border-solid border-[#0474c4] w-8 h-8 disabled:cursor-not-allowed"
                  disabled={options.room <= 1}
                  name="room"
                  onClick={(e) => optionsClickHandler(e, "d")}
                >
                  -
                </button>
                <span>{options.room}</span>
                <button
                  className="flex items-center justify-center border-2 border-solid border-[#0474c4] w-8 h-8 disabled:cursor-not-allowed"
                  name="room"
                  onClick={(e) => optionsClickHandler(e, "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
