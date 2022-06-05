import React, { useRef, useState } from "react";
import { FaBed, FaCalendarAlt } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, RangeKeyDict } from "react-date-range";
import useOnClickOutside from "../hooks/useClickOutside";

interface IDates {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

function Search() {
  const dateRef = useRef(null);
  useOnClickOutside(dateRef, () => setDateOpen(false));

  const [dates, setDates] = useState<IDates>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [dateOpen, setDateOpen] = useState<boolean>(false);

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

  return (
    <div className="w-full bg-[#003580] flex justify-center h-16">
      <div className="max-w-[1048px] flex w-full p-3 relative ">
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
          >
            <FaCalendarAlt fontSize={"20px"} />
            <p>
              {dates?.startDate?.toLocaleDateString()} to{" "}
              {dates?.endDate?.toLocaleDateString()}
            </p>
          </button>
          <div className="flex items-center text-[#d4d4d4] justify-center gap-2">
            <FaBed fontSize={"20px"} />
            <input placeholder="Where are you going?" />
          </div>
          <button className="p-2 text-white bg-[#0874c4]">Search</button>
        </div>
        {dateOpen && (
          <div ref={dateRef} className="absolute z-10 top-24 left-80">
            <DateRange
              ranges={[dates]}
              onChange={handleSelect}
              minDate={new Date()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
