import React, { useEffect, useState } from "react";

export default function App() {
  const [backendData, setBackendData] = useState<{ users?: string[] }>({});

  useEffect(() => {
    fetch("http://localhost:5000/api") // Use full URL
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);


  return (
    <div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, index) => (
          <p key={index}>{user}</p> // Use `index` as the key
        ))
      )}
    </div>
  );
}
