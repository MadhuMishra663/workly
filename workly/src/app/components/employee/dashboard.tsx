// // "use client";

// // import { useEffect, useState } from "react";

// // export default function EmployeeDashboard() {
// //   const [isPresent, setIsPresent] = useState(false);
// //   const [timeElapsed, setTimeElapsed] = useState(0);
// //   const [idleTime, setIdleTime] = useState(0);
// //   const [showIdlePopup, setShowIdlePopup] = useState(false);

// //   useEffect(() => {
// //     let timer: NodeJS.Timeout;
// //     let idleTimer: NodeJS.Timeout;

// //     if (isPresent) {
// //       timer = setInterval(() => {
// //         setTimeElapsed((prev) => prev + 1);
// //       }, 1000);

// //       const resetIdle = () => {
// //         setIdleTime(0);
// //       };

// //       const increaseIdle = () => {
// //         setIdleTime((prev) => prev + 1);
// //       };

// //       document.addEventListener("mousemove", resetIdle);
// //       idleTimer = setInterval(increaseIdle, 1000);

// //       return () => {
// //         clearInterval(timer);
// //         clearInterval(idleTimer);
// //         document.removeEventListener("mousemove", resetIdle);
// //       };
// //     }
// //   }, [isPresent]);

// //   useEffect(() => {
// //     if (idleTime >= 120 && isPresent) {
// //       // eslint-disable-next-line react-hooks/set-state-in-effect
// //       setShowIdlePopup(true);
// //     }
// //   }, [idleTime, isPresent]);

// //   const handleMarkAttendance = () => {
// //     setIsPresent(true);
// //     setTimeElapsed(0);
// //     setIdleTime(0);
// //   };

// //   const handlePopupResponse = (accept: boolean) => {
// //     if (accept) {
// //       setShowIdlePopup(false);
// //       setIdleTime(0);
// //     } else {
// //       setShowIdlePopup(false);
// //       setTimeElapsed((prev) => prev - idleTime);
// //       setIdleTime(0);
// //     }
// //   };

// //   const formatTime = (seconds: number) => {
// //     const hrs = Math.floor(seconds / 3600);
// //     const mins = Math.floor((seconds % 3600) / 60);
// //     const secs = seconds % 60;
// //     return `${hrs.toString().padStart(2, "0")}:${mins
// //       .toString()
// //       .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
// //       <h1 className="text-3xl font-bold text-blue-700 mb-4">
// //         Employee Dashboard
// //       </h1>

// //       {!isPresent ? (
// //         <button
// //           onClick={handleMarkAttendance}
// //           className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
// //         >
// //           Mark Attendance
// //         </button>
// //       ) : (
// //         <div className="flex flex-col gap-4">
// //           <p className="text-lg text-gray-700">
// //             Attendance marked. Time elapsed:
// //             <span className="ml-2 text-blue-700 font-semibold">
// //               {formatTime(timeElapsed)}
// //             </span>
// //           </p>
// //           <p className="text-gray-500 text-sm">
// //             (Your work timer is running. Idle detection active.)
// //           </p>
// //         </div>
// //       )}

// //       {/* Placeholder sections */}
// //       <div className="mt-10 grid md:grid-cols-3 gap-6">
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-xl font-semibold text-blue-600 mb-2">
// //             Apply for Leave
// //           </h2>
// //           <p className="text-gray-600 text-sm">
// //             Submit leave requests for approval.
// //           </p>
// //         </div>
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-xl font-semibold text-blue-600 mb-2">
// //             Holiday List
// //           </h2>
// //           <p className="text-gray-600 text-sm">View upcoming holidays.</p>
// //         </div>
// //         <div className="bg-white p-6 rounded shadow">
// //           <h2 className="text-xl font-semibold text-blue-600 mb-2">
// //             Meetings Calendar
// //           </h2>
// //           <p className="text-gray-600 text-sm">See scheduled meetings.</p>
// //         </div>
// //       </div>

// //       {/* Idle popup */}
// //       {showIdlePopup && (
// //         <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/40 z-50">
// //           <div className="bg-white p-6 rounded shadow-lg text-center space-y-4 border border-blue-200">
// //             <h3 className="text-lg font-semibold text-blue-700">
// //               Are you still there?
// //             </h3>
// //             <p className="text-gray-600">
// //               We noticed no activity for 20 minutes.
// //             </p>
// //             <div className="flex justify-center gap-4">
// //               <button
// //                 onClick={() => handlePopupResponse(true)}
// //                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //               >
// //                 Yes, I’m here
// //               </button>
// //               <button
// //                 onClick={() => handlePopupResponse(false)}
// //                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
// //               >
// //                 No, I was away
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import Header from "../header/header";

// export default function EmployeeDashboard() {
//   const [isPresent, setIsPresent] = useState(false);
//   const [timeElapsed, setTimeElapsed] = useState(0);
//   const [idleTime, setIdleTime] = useState(0);
//   const [showIdlePopup, setShowIdlePopup] = useState(false);

//   // Attendance Timer + Idle Tracking
//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     let idleTimer: NodeJS.Timeout;

//     if (isPresent) {
//       timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);

//       const resetIdle = () => setIdleTime(0);
//       const increaseIdle = () => setIdleTime((prev) => prev + 1);

//       document.addEventListener("mousemove", resetIdle);
//       idleTimer = setInterval(increaseIdle, 1000);

//       return () => {
//         clearInterval(timer);
//         clearInterval(idleTimer);
//         document.removeEventListener("mousemove", resetIdle);
//       };
//     }
//   }, [isPresent]);

//   // Idle Popup
//   useEffect(() => {
//     if (idleTime >= 120 && isPresent && !showIdlePopup) {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setShowIdlePopup(true);
//     }
//   }, [idleTime, isPresent, showIdlePopup]);

//   const handleMarkAttendance = () => {
//     setIsPresent(true);
//     setTimeElapsed(0);
//     setIdleTime(0);
//   };

//   const handlePopupResponse = (accept: boolean) => {
//     if (accept) {
//       setShowIdlePopup(false);
//       setIdleTime(0);
//     } else {
//       setShowIdlePopup(false);
//       setTimeElapsed((prev) => prev - idleTime);
//       setIdleTime(0);
//     }
//   };

//   const formatTime = (seconds: number) => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs.toString().padStart(2, "0")}:${mins
//       .toString()
//       .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <Header />
//       <div className="p-8">
//         <h1 className="text-3xl font-bold text-blue-700 mb-4">
//           Employee Dashboard
//         </h1>

//         {!isPresent ? (
//           <button
//             onClick={handleMarkAttendance}
//             className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//           >
//             Mark Attendance
//           </button>
//         ) : (
//           <div className="flex flex-col gap-4">
//             <p className="text-lg text-gray-700">
//               Attendance marked. Time elapsed:
//               <span className="ml-2 text-blue-700 font-semibold">
//                 {formatTime(timeElapsed)}
//               </span>
//             </p>
//             <p className="text-gray-500 text-sm">
//               (Your work timer is running. Idle detection active.)
//             </p>
//           </div>
//         )}

//         {/* Sections */}
//         <div className="mt-10 grid md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">
//               Apply for Leave
//             </h2>
//             <p className="text-gray-600 text-sm">
//               Submit leave requests for approval.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">
//               Holiday List
//             </h2>
//             <p className="text-gray-600 text-sm">View upcoming holidays.</p>
//           </div>
//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">
//               Meetings Calendar
//             </h2>
//             <p className="text-gray-600 text-sm">See scheduled meetings.</p>
//           </div>
//         </div>
//       </div>

//       {/* Idle popup */}
//       {showIdlePopup && (
//         <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/40 z-50">
//           <div className="bg-white p-6 rounded shadow-lg text-center space-y-4 border border-blue-200">
//             <h3 className="text-lg font-semibold text-blue-700">
//               Are you still there?
//             </h3>
//             <p className="text-gray-600">
//               We noticed no activity for 20 minutes.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => handlePopupResponse(true)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Yes, I’m here
//               </button>
//               <button
//                 onClick={() => handlePopupResponse(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 No, I was away
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Header from "../header/header";
import AttendanceSection from "./attendence";
import LeaveSection from "./leave";
import HolidayList from "./holidays";
import CalendarSection from "./calender";
import CompanyStructure from "./companyStructure";
import IdlePopup from "./idealPopup";

export default function EmployeeDashboard() {
  const [isPresent, setIsPresent] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [idleTime, setIdleTime] = useState(0);
  const [showIdlePopup, setShowIdlePopup] = useState(false);
  const [showCompanyStructure, setShowCompanyStructure] = useState(false);

  // Attendance & Idle Time
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let idleTimer: NodeJS.Timeout;

    if (isPresent) {
      timer = setInterval(() => setTimeElapsed((prev) => prev + 1), 1000);

      const resetIdle = () => setIdleTime(0);
      const increaseIdle = () => setIdleTime((prev) => prev + 1);

      document.addEventListener("mousemove", resetIdle);
      idleTimer = setInterval(increaseIdle, 1000);

      return () => {
        clearInterval(timer);
        clearInterval(idleTimer);
        document.removeEventListener("mousemove", resetIdle);
      };
    }
  }, [isPresent]);

  useEffect(() => {
    if (idleTime >= 120 && isPresent && !showIdlePopup) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowIdlePopup(true);
    }
  }, [idleTime, isPresent, showIdlePopup]);

  const handlePopupResponse = (accept: boolean) => {
    if (accept) {
      setShowIdlePopup(false);
      setIdleTime(0);
    } else {
      setShowIdlePopup(false);
      setTimeElapsed((prev) => prev - idleTime);
      setIdleTime(0);
    }
  };

  const holidays = [
    { date: "2025-01-26", name: "Republic Day" },
    { date: "2025-03-17", name: "Holi" },
    { date: "2025-08-15", name: "Independence Day" },
    { date: "2025-10-02", name: "Gandhi Jayanti" },
    { date: "2025-12-25", name: "Christmas Day" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Employee Dashboard
        </h1>

        <AttendanceSection
          isPresent={isPresent}
          setIsPresent={setIsPresent}
          timeElapsed={timeElapsed}
        />

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          <LeaveSection />
          <HolidayList holidays={holidays} />
          <CalendarSection />
          <CompanyStructure
            show={showCompanyStructure}
            toggle={() => setShowCompanyStructure((prev) => !prev)}
          />
        </div>

        {showCompanyStructure && <CompanyStructure showGraph />}
      </div>

      {showIdlePopup && <IdlePopup handlePopupResponse={handlePopupResponse} />}
    </div>
  );
}
