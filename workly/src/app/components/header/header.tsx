// type HeaderProps = {
//   onLogin: () => void;
//   onSignup: () => void;
// };

// export default function Header({ onLogin, onSignup }: HeaderProps) {
//   return (
//     <header className="flex justify-between items-center px-8 py-4 border-b border-blue-100 bg-white shadow-sm">
//       <h1 className="text-3xl font-bold text-blue-600 font-serif">Workly</h1>
//       <div className="space-x-4">
//         <button
//           onClick={onLogin}
//           className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
//         >
//           Login
//         </button>
//         <button
//           onClick={onSignup}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//         >
//           Sign Up
//         </button>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type HeaderProps = {
  onLogin?: () => void;
  onSignup?: () => void;
};

export default function Header({ onLogin, onSignup }: HeaderProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement | null>(null);

  // ✅ Load user immediately and whenever storage changes
  useEffect(() => {
    const loadUser = () => {
      const name = localStorage.getItem("name");
      setUserName(name);
    };

    // Run immediately
    loadUser();

    // Listen for localStorage updates
    window.addEventListener("storage", loadUser);
    window.addEventListener("localStorageUpdate", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("localStorageUpdate", loadUser);
    };
  }, []);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUserName(null);
    router.push("/"); // Redirect to home
  };

  const handleProfile = () => {
    router.push("/profile");
  };

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : "";

  return (
    <header className="flex justify-between items-center px-8 py-4 border-b border-blue-100 bg-white shadow-sm relative">
      <h1
        className="text-3xl font-bold text-blue-600 font-serif cursor-pointer"
        onClick={() => router.push("/")}
      >
        Workly
      </h1>

      {/* ✅ Show user icon if logged in */}
      {userName ? (
        <div className="relative" ref={menuRef}>
          <div
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full text-lg font-semibold cursor-pointer select-none"
          >
            {firstLetter}
          </div>

          {showMenu && (
            <div className="absolute right-0 mt-3 w-40 bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden z-50">
              <button
                onClick={handleProfile}
                className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700"
              >
                My Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 border-t"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-x-4">
          <button
            onClick={onLogin}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </button>
          <button
            onClick={onSignup}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
