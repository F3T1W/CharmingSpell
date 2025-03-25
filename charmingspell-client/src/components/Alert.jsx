import React, { useState, useEffect } from "react";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem("hasSeenAlert");
    if (hasSeenAlert === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenAlert", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
        <div className="flex justify-between items-center">
          <p>Видишь мои куки, какие они все мокрые, они так долго этого ждали!</p>
          <button
            onClick={handleClose}
            className="ml-4 text-white hover:text-gray-200"
          >
            Согласен
          </button>
        </div>
      </div>
    </div>  
  );
};

export default Alert;