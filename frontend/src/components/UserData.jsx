import React, { useEffect, useState } from "react";
import axios from "axios";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://lohamandi.com/api/quicklead") // GET all quick leads
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quick Leads (Mobile Numbers)</h2>

      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No quick leads found.</p>
      ) : (
        <div className="overflow-x-auto rounded-md shadow">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2 text-left">#</th>
                <th className="border px-4 py-2 text-left">Mobile Number</th>
                <th className="border px-4 py-2 text-left">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">
                    {new Date(user.submittedAt).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserData;
