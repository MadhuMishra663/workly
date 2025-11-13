"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    companyName: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { role, name, email, password } = formData;
    if (!role || !name || !email || !password) {
      alert("Please fill all required fields!");
      return;
    }

    // Save user data (mock signup)
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Signup successful! Redirecting to login...");
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Role</option>
        <option value="Company">Company</option>
        <option value="Employee">Employee</option>
        <option value="Admin">Admin</option>
      </select>

      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="companyName"
        type="text"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
