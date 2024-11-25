"use client";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(false); // 'patient' by default
  const [fachrichtung, setFachrichtung] = useState("");
  const [lizenznummer, setLizenznummer] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleRegister = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const payload = new URLSearchParams({
      name,
      email,
      username,
      password,
      roll: role.toString(),
      fachrichtung: role ? fachrichtung : "",
      lizenznummer: role ? lizenznummer : "",
      address: !role ? address : "",
      birthDate: !role ? birthDate : "",
    });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      const data = await response.text();
      if (response.ok) {
        alert("Arzt/Patient registered successfully");
      } else {
        alert(`Error: ${data}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Register an Account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="px-8 py-6">
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
            />

            <label className="block mt-3 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
            />

            <label className="block mt-3 font-semibold">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
            />

            <label className="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
            />

            <label className="block mt-3 font-semibold">Role</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setRole(true)}
                className={`py-2 px-4 rounded-md ${
                  role === true
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Doctor
              </button>
              <button
                type="button"
                onClick={() => setRole(false)}
                className={`py-2 px-4 rounded-md ${
                  role === false
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Patient
              </button>
            </div>

            {role === true && (
              <>
                <label className="block mt-3 font-semibold">
                  Specialization (Fachrichtung)
                </label>
                <input
                  type="text"
                  value={fachrichtung}
                  onChange={(e) => setFachrichtung(e.target.value)}
                  placeholder="Specialization"
                  className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
                />

                <label className="block mt-3 font-semibold">
                  License Number (Lizenznummer)
                </label>
                <input
                  type="text"
                  value={lizenznummer}
                  onChange={(e) => setLizenznummer(e.target.value)}
                  placeholder="License Number"
                  className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
                />
              </>
            )}

            {role === false && (
              <>
                <label className="block mt-3 font-semibold">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
                />

                <label className="block mt-3 font-semibold">Birth Date</label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="border w-full h-5 px-3 py-5 mt-2 rounded-md"
                />
              </>
            )}

            <button
              type="submit"
              onClick={handleRegister}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
