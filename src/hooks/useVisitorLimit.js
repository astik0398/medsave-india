import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MAX_FREE_COMPARISONS = 2;

export default function useVisitorLimit() {
  const [visitorId, setVisitorId] = useState(null);
  const [compareCount, setCompareCount] = useState(0);

  // Initialize visitorId and count from localStorage
  useEffect(() => {
    let storedVisitorId = localStorage.getItem("visitorId");
    let storedCount = parseInt(localStorage.getItem("compareCount") || "0", 10);

    if (!storedVisitorId) {
      storedVisitorId = uuidv4();
      localStorage.setItem("visitorId", storedVisitorId);
    }

    setVisitorId(storedVisitorId);
    setCompareCount(storedCount);
  }, []);

  // Increment comparison count
  const incrementCompareCount = () => {
    const newCount = compareCount + 1;
    setCompareCount(newCount);
    localStorage.setItem("compareCount", newCount.toString());
  };

  // Check if user can still compare
 const canCompare = compareCount < MAX_FREE_COMPARISONS;

  // Reset when they log in (if you ever add login later)
  const resetCompareCount = () => {
    setCompareCount(0);
    localStorage.setItem("compareCount", "0");
  };

  return { visitorId, compareCount, canCompare, incrementCompareCount, resetCompareCount, MAX_FREE_COMPARISONS  };
}
