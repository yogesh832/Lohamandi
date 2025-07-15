import React, { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("dashboardAccess") === "true";
    setIsAuthenticated(auth);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "admin@123";

    if (inputPassword === correctPassword) {
      sessionStorage.setItem("dashboardAccess", "true");
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center my-20 min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Enter Dashboard Password
          </h2>

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="border px-3 py-2 w-full rounded"
              placeholder="Password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
