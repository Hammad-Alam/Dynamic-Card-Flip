import React from "react";
import Sadapay_White from "../Sadapay_White.PNG";

function CardBack() {
  return (
    <div
      data-aos="flip-right"
      className="bg-[#FBB089] w-full max-w-56 mx-auto mt-10 rounded-xl h-[300px] flex"
    >
      <div className="mx-4 w-8 bg-black"></div>
      <div className="flex-1">
        <div className="flex items-center">
          <img src={Sadapay_White} alt="sadapaywhite" className="-ml-2 w-12" />
          <p className="ml-2 text-xl font-bold uppercase text-white">Sadapay</p>
        </div>
        <div className="mt-16 text-white">
          <p className="text-lg font-bold">777-100</p>
          <p className="text-xs my-1">
            Issued by SadaTech Pakistan Pvt. Limited pursuant to a license by
            MasterCard Asia/Pacific Pvt. Ltd
          </p>
          <a href="https://sadapay.pk/" target="_blank" className="block mt-2">
            sadapay.pk
          </a>
          <p className="text-lg font-bold uppercase text-end mt-5">
            MasterCard
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBack;
