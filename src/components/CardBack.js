import React from "react";
import Sadapay_White from "../Sadapay_White.PNG";

function CardBack() {
  return (
    <div class="bg-[#FBB089] w-[225px] mx-auto mt-[200px] rounded-xl h-[300px] flex">
      <div class="mx-4 w-8 bg-black h-[300px]"></div>
      <div class="w-44">
        <div class="flex">
          <img
            src={Sadapay_White}
            alt="sadapaywhite"
            srcset=""
            class="w-12 -ml-2"
          />
          <p class="my-4 text-xl font-bold uppercase text-white">Sadapay</p>
        </div>
        <div>
          <p class="mt-16 text-white font-bold">777-100</p>
          <p class="text-xs my-1 text-white">
            Issued by SadaTech Pakistan Pvt. Limited pursuant to a license by
            MasterCard Asia/Pacific Pvt. Ltd
          </p>
          <a href="https://sadapay.pk/" target="_blank">
            <p class="text-xs text-white my-1">sadapay.pk</p>
          </a>
          <p class="text-white font-bold uppercase my-5 text-end text-lg">
            MasterCard
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBack;
