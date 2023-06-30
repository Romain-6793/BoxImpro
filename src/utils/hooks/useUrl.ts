
import { useState, useEffect } from "react";

const useUrl = () => {

const [currentURL, setCurrentURL] = useState(window.location.href);

  useEffect(() => {
    const handleURLChange = () => {
      setCurrentURL(window.location.href);
    };

    // Adds an event listener to detect URL changes
    window.addEventListener("popstate", handleURLChange);

    // Removes the event listener when the component dismounts
    return () => {
      window.removeEventListener("popstate", handleURLChange);
    };
  }, []);

  return currentURL

}

export default useUrl