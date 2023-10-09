import { useLocation } from "react-router-dom";

const useLocationAwareness = (allowedPaths) => {
  const location = useLocation();
  return allowedPaths.includes(location.pathname);
};

export default useLocationAwareness;
