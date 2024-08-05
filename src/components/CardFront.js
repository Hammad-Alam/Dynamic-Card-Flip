import React from "react";
import ATMcardchip from "../ATMcardchip.png";
import Mastercard from "../Mastercard.png";
import Sadapay from "../Sadapay.png";

function CardFront() {
  return (
    <div className="bg-[#00a99d] w-full max-w-56 mx-auto mt-10 rounded-xl h-[300px] p-6">
      <div className="flex justify-center mx-12 py-6">
        <img src={ATMcardchip} alt="cardchip" />
      </div>
      <div className="text-center py-5 text-white">Hammad Alam</div>
      <div className="flex justify-between mt-10">
        <img src={Mastercard} alt="mastercard" className="w-20 -ml-6" />
        <img src={Sadapay} alt="sadapay" className="w-20 ml-16" />
      </div>
    </div>
  );
}

export default CardFront;
