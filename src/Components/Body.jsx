import React, { useEffect, useState } from 'react'
import Card from './Card';

const Body = () => {

  const [profile, setProfile] = useState([]);
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(10);

  // 🔹 Random Users
  async function generateProfile() {
    const ran = Math.floor(1 + Math.random() * 10000);
    const res = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
    const data = await res.json();
    setProfile(data);
  }

  // 🔹 Search Users
  async function searchProfile() {
    if (!username) return;

    const res = await fetch(`https://api.github.com/search/users?q=${username}&per_page=${count}`);
    const data = await res.json();

    setProfile(data.items);
  }

  useEffect(() => {
    generateProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Controls */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-6">

        {/* Username Search */}
        <input
          type="text"
          placeholder="Search username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchProfile()}
          className="px-4 py-2 w-52 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Number of Profiles */}
        <input
          type="number"
          placeholder="No. of profiles"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="px-4 py-2 w-40 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Buttons */}
        <button
          onClick={searchProfile}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>

        <button
          onClick={generateProfile}
          className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Random
        </button>

      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {
          profile.map((value) => (
            <Card key={value.id} value={value} />
          ))
        }
      </div>

    </div>
  )
}

export default Body;