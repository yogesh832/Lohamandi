import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FcCalculator } from "react-icons/fc";
import { LuDiameter } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";
import { GiWeight } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FcBarChart } from "react-icons/fc";

export default function TmtCalculator() {
  const [diam, setDiam] = useState(12);
  const [totalWeight, setTotalWeight] = useState(10);
  const [qty, setQty] = useState(10);
  const [price, setPrice] = useState(10);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculate();
  }, [diam, totalWeight, qty, price]);

  function calculate() {
    const d = parseFloat(diam);
    const tw = parseFloat(totalWeight);
    const q = parseInt(qty) || 0;
    const p = parseFloat(price) || 0;

    if (!d || d <= 0 || !tw || tw <= 0 || q <= 0) {
      setResult(null);
      return;
    }

    // Weight per meter formula
    const wpm = (d * d) / 162; // kg/m
    const weightPerBar = tw / q; // kg
    const lengthPerBar = weightPerBar / wpm; // m
    const totalCost = tw * p;

    setResult({
      wpm: wpm.toFixed(3),
      lengthPerBar: lengthPerBar.toFixed(3),
      weightPerBar: weightPerBar.toFixed(3),
      totalCost: totalCost.toFixed(2),
      qty: q
    });
  }

  return (
    <div className="max-w-xl pt-40 h-full mx-auto p-6 bg-[#F9FAFB] rounded-xl shadow-lg font-[font-libertinus] mb-20">
      <h2 className="font-bold text-xl md:text-2xl mb-4 text-center mt-10 truncate">
        <span className="flex justify-center items-center gap-2"><FcCalculator className="inline"/>
         TMT Bar Calculator
         </span>
      </h2>
      

      {/* Diameter */}
      <label className="block font-medium mb-1 text-[14px] md:text-[18px]  "> <LuDiameter className="inline text-[#cc7f36] font-bold text-[16px]"/> Diameter (mm)</label>
      <select
        value={diam}
        onChange={(e) => setDiam(e.target.value)}
        className="border rounded w-full p-2 mb-4 pl-3"
   >
        {[6, 8, 10, 12, 16, 20, 25, 32, 40].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      {/* Total weight */}
      <label className="block font-medium mb-1 text-[14px] md:text-[18px] "> <GiWeight className="inline text-[#d81fb0] font-bold text-[16px]"/> Total weight (kg)</label>
      <input
        type="number"
        value={totalWeight}
        onChange={(e) => setTotalWeight(e.target.value)}
        className="border rounded w-full p-1 pl-3 mb-4"
        placeholder="Enter total weight in kg"
      />

      {/* Quantity */}
      <label className="block font-medium mb-1 text-[14px] md:text-[18px] "> <TfiBag className="inline text-[#0025de] font-bold text-[16px]"/> Quantity (no. of bars)</label>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="border rounded w-full p-1 pl-3 mb-4"
        placeholder="Enter Pieces"
      />

      {/* Price */}
      <label className="block font-medium mb-1 text-[14px] md:text-[18px] "> <GiTakeMyMoney className="inline text-[#35a02a] font-bold text-[16px]"/> Price per kg (₹)</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border rounded w-full p-1 pl-3 mb-4"
        placeholder="Enter Price per kg"
      />

      {/* Results */}
      {result && (
        <div className="mt-6 p-3 pl-4 border rounded bg-gray-50 text-[14px] md:text-[18px] border-[#d400ff]">
          <h3 className="text-lg font-semibold mb-2 underline text-green-600"> <FcBarChart className="inline font-bold text-[23px] mr-1"/>Result</h3>
          <p className="mb-1">Weight per meter = <span className="text-[15px] md:text-[19px]"> {result.wpm } </span> kg/m</p>
          <p className="mb-1">Weight per bar = <span className="text-[15px] md:text-[19px]"> {result.weightPerBar} </span> kg</p>
          <p className="mb-1">Length per bar = <span className="text-[15px] md:text-[19px]">{result.lengthPerBar} </span> m</p>
          <p className="mb-1">Total weight ( <span className="text-[15px] md:text-[19px]"> {result.qty} </span> bars) = <span className="text-[15px] md:text-[19px]"> {totalWeight} </span> kg</p>
          <hr className="mb-2 mt-[6px] text-amber-500"/>
          <p className="font-semibold">Estimated cost = <span className="text-[15px] md:text-[19px] text-[#000000] inline font-bold"> <FaRupeeSign className="inline"/> {result.totalCost} </span></p>
        </div>
      )}
    </div>
  );
}