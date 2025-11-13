// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const router = useRouter();

//   const handleLogin = (role: string) => {
//     localStorage.setItem("role", role);
//     if (role === "Employee") router.push("/employee/dashboard");
//     if (role === "HR") router.push("/hr/dashboard");
//     if (role === "Admin") router.push("/admin/dashboard");
//   };
//   return (
//     <form className="space-y-4">
//       <select
//         className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         defaultValue=""
//       >
//         <option value="" disabled>
//           Select Role
//         </option>
//         <option>Company</option>
//         <option>Employee</option>
//         <option>Admin</option>
//       </select>

//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
//         onClick={() => handleLogin}
//       >
//         Login
//       </button>
//     </form>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (role: string) => {
    // For testing: set dummy name & role
    localStorage.setItem("name", email);
    localStorage.setItem("role", role);

    // 🔥 Manually dispatch an event to notify Header
    window.dispatchEvent(new Event("localStorageUpdate"));

    // Navigate to dashboard based on role
    if (role === "Employee") router.push("/employee/dashboard");
    if (role === "HR") router.push("/hr/dashboard");
    if (role === "Admin") router.push("/admin/dashboard");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!role) {
          alert("Please select a role before logging in.");
          return;
        }
        handleLogin(role);
      }}
      className="space-y-4"
    >
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Role</option>
        <option value="Company">Company</option>
        <option value="Employee">Employee</option>
        <option value="HR">HR</option>
        <option value="Admin">Admin</option>
      </select>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
}
