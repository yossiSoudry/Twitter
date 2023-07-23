import React, { createContext, useContext, useState, useEffect } from "react";

// Define the type for the context value
type ContextValueType = {
  currentMode: string;
  setCurrentMode: (mode: string) => void;
};

// Create the context with an initial default value
const StateContext = createContext<ContextValueType>({
  currentMode: "dark",
  setCurrentMode: () => {},
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Holds and sets the current mode - dark or light.
  const [currentMode, setCurrentMode] = useState<string>("dark");

  useEffect(() => {
    // Check if localStorage is available (i.e., we're on the client-side)
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("themeMode");
      setCurrentMode(storedMode || "dark");
    }
  }, []);

  return (
    <StateContext.Provider
      value={{
        currentMode,
        setCurrentMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

