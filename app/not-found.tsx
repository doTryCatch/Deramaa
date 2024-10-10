import React from "react";
import PageNotFound from "@/public/icon/pageNotFound.png";
import Image from "next/image";
function NotFound() {
  return (
    <div className="page-not-ready-yet center h-[80vh] ">
      <div className="pageNotFound-container md:flex    text-center ">
        <Image src={PageNotFound} alt="page not found" height={200} />
        <strong className=" text-slate-500  center">
          Oops: Page unavailable!!
        </strong>
      </div>
    </div>
  );
}

export default NotFound;
