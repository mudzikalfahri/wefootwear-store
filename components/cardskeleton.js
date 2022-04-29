import React from "react";
import Skeleton from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <div>
      <Skeleton className="h-44 mb-2" />
      <Skeleton className="h-5 mb-2" />
      <Skeleton className="h-3 mb-2" />
      <Skeleton className="h-3 mb-2" />
    </div>
  );
}

export default CardSkeleton;
