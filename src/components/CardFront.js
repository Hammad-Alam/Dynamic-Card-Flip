import React from "react";
import ATMcardchip from "../ATMcardchip.png";
import Mastercard from "../Mastercard.png";
import Sadapay from "../Sadapay.png";

function CardFront() {
  return (
    <div class="bg-[#00a99d] w-[225px] mx-auto mt-[200px] rounded-xl h-[300px]">
      <div class="mx-12 py-6">
        <img src={ATMcardchip} alt="cardchip" srcset="" class="ml-6" />
      </div>
      <div class="text-center py-5 text-white">Hammad Alam</div>
      <div class="flex">
        <img src={Mastercard} alt="mastercard" srcset="" class="w-20 mt-10" />
        <img src={Sadapay} alt="sadapay" srcset="" class="w-20 ml-16 mt-10" />
      </div>
    </div>
  );
}

export default CardFront;
