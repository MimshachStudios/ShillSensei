import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-between pt-[30px] px-[30px] pb-0 z-[0] text-center text-21xl text-white font-mareka ${className}`}
    >
      <button className="cursor-pointer [border:none] py-2 px-[9px] bg-gray-100 rounded-2xl flex flex-row items-center justify-start gap-[10px]">
        <img
          className="w-6 relative h-6 object-cover"
          alt=""
          src="/wallet-9693898-1@2x.png"
        />
        <div className="relative text-sm font-semibold font-clash-display text-white text-left">
          Wallet
        </div>
      </button>
      <div className="w-[102px] relative leading-[88%] inline-block h-[74.7px] shrink-0">
        <p className="m-0">SHILL</p>
        <p className="m-0">SENSEI</p>
      </div>
      <button className="cursor-pointer [border:none] py-2 px-[9px] bg-gray-100 rounded-2xl flex flex-row items-center justify-start gap-[10px]">
        <img
          className="w-[26px] relative h-[25.2px] object-cover"
          alt=""
          src="/group-1000002544@2x.png"
        />
        <div className="relative text-sm font-semibold font-clash-display text-white text-left">
          Boost
        </div>
      </button>
    </div>
  );
};

export default FrameComponent1;
