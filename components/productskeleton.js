import React from "react";
import Skeleton from "react-loading-skeleton";

function ProductSkeleton() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg py-8 px-10 md:flex">
      <div className="photo h-72 overflow-hidden md:w-1/3">
        <Skeleton className=" h-full" />
      </div>
      <div className="detail mt-3 md:mt-0 md:ml-6 py-2 md:w-2/3">
        <Skeleton className="h-8" />
        <Skeleton className="h-16 my-3" />
        <Skeleton className="h-8" />
        <Skeleton className="h-14 my-3" />
        <Skeleton className="h-10" />
      </div>
    </div>
  );
}

export default ProductSkeleton;
