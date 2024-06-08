import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[10px] z-[1] text-center text-xl text-white font-clash-display ${className}`}
    >
      <div className="w-[345px] relative box-border h-0.5 border-t-[2px] border-solid border-gray-400" />
      <div className="flex flex-col items-center justify-start gap-[1px]">
        <div className="w-[308.2px] relative leading-[34px] font-medium inline-block h-[34.9px] shrink-0">
          Your Alpha Points
        </div>
        <div className="flex flex-row items-center justify-start gap-[5px] text-36xl">
          <div className="flex flex-row items-center justify-start">
            <img
              className="w-[51px] relative h-[57px]"
              alt=""
              src="/objects.svg"
            />
          </div>
          <b className="w-[285px] relative tracking-[0.04em] leading-[100%] uppercase flex text-transparent !bg-clip-text [background:linear-gradient(0deg,_#b76920,_#ffe600)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center justify-center shrink-0">
            300,000
          </b>
        </div>
      </div>
      <div className="w-[345px] relative box-border h-0.5 border-t-[2px] border-solid border-gray-400" />
    </div>
  );
};

export default FrameComponent;
