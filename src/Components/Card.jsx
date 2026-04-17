import React from "react";

export default function Card({ value }) {
     if (!value) return null;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-72 hover:shadow-2xl transition duration-300">
      <img
        src={value.avatar_url}
        alt="Profile"
        className="w-full h-48 object-cover rounded-xl"
      />

      <h2 className="text-xl font-semibold mt-3 text-gray-800">
        {value.login}
      </h2>

      <a
        href={value.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-500 hover:text-blue-700"
      >
        Visit Profile
      </a>
    </div>
  );
}