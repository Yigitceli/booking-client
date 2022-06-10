import React, { useRef, useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchResult from "../components/SearchResult";
import useOnClickOutside from "../hooks/useClickOutside";

interface IDates {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

function Search() {
  const dateRef = useRef(null);
  const openDateRef = useRef(null);
  useOnClickOutside(dateRef, () => setDateOpen(false), openDateRef);

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
    <div className="w-screen h-full flex flex-col items-center">
      <Header />
      <div className="h-full w-full my-4 max-w-[1024px] flex gap-5">
        <div className="flex-1 gap-2 flex flex-col bg-[#ffbc04] sticky h-fit p-3 rounded-xl top-5 bottom-5">
          <h2 className="text-xl text-[#5d594c] font-bold">Search</h2>
          <label htmlFor="destination" className="text-sm">
            Destination
          </label>
          <input
            placeholder="Where are you going?"
            id="destionation"
            className="p-2"
          />
          <p className="text-sm">Check-in Date</p>
          <div className="relative">
            <button
              className="text-left bg-white w-full p-2"
              ref={openDateRef}
              onClick={handleDateClick}
            >
              Date
            </button>
            {dateOpen && (
              <div ref={dateRef} className="absolute shadow-regular">
                <DateRange
                  ranges={[dates]}
                  onChange={handleSelect}
                  minDate={new Date()}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-sm">Options</h2>
            <div className="px-3 py-1 flex flex-col gap-2 text-[#5d594c]">
              <div className="flex gap-1 w-full justify-between items-center">
                <label htmlFor="minPrice" className="text-xs">
                  Min price per night
                </label>
                <input
                  type={"number"}
                  min={0}
                  id="minPrice"
                  className="w-12 min-w-8 px-1 border-2 border-solid border-slate-800"
                  placeholder="0"
                />
              </div>
              <div className="flex gap-1 w-full justify-between items-center">
                <label htmlFor="maxPrice" className="text-xs">
                  Max price per night
                </label>
                <input
                  type={"number"}
                  min={0}
                  id="maxPrice"
                  className="w-12 min-w-8 px-1 border-2 border-solid border-slate-800"
                  placeholder="0"
                />
              </div>
              <div className="flex gap-1 w-full justify-between items-center">
                <label htmlFor="adult" className="text-xs">
                  Adult
                </label>
                <input
                  type={"number"}
                  min={1}
                  id="adult"
                  className="w-12 min-w-8 px-1 border-2 border-solid border-slate-800"
                  placeholder="1"
                />
              </div>
              <div className="flex gap-1 w-full justify-between items-center">
                <label htmlFor="children" className="text-xs">
                  Children
                </label>
                <input
                  type={"number"}
                  min={0}
                  id="children"
                  className="w-12 min-w-8 px-1 border-2 border-solid border-slate-800"
                  placeholder="0"
                />
              </div>
              <div className="flex gap-1 w-full justify-between items-center">
                <label htmlFor="room" className="text-xs">
                  Room
                </label>
                <input
                  type={"number"}
                  min={1}
                  id="room"
                  className="w-12 min-w-8 px-1 border-2 border-solid border-slate-800"
                  placeholder="1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[3]">
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      </div>
    </div>
  );
}

export default Search;
