import React from "react";

interface AttendanceProps {
  isPresent: boolean;
  setIsPresent: (value: boolean) => void;
  timeElapsed: number;
}

export default function AttendanceSection({
  isPresent,
  setIsPresent,
  timeElapsed,
}: AttendanceProps) {
  const handleMarkAttendance = () => {
    setIsPresent(true);
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {!isPresent ? (
        <button
          onClick={handleMarkAttendance}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Mark Attendance
        </button>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray-700">
            Attendance marked. Time elapsed:
            <span className="ml-2 text-blue-700 font-semibold">
              {formatTime(timeElapsed)}
            </span>
          </p>
          <p className="text-gray-500 text-sm">
            (Your work timer is running. Idle detection active.)
          </p>
        </div>
      )}
    </>
  );
}
