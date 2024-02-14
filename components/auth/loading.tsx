"use client";
import { Triangle } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Triangle
        visible={true}
        height="120"
        width="120"
        color="#db4412"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};
