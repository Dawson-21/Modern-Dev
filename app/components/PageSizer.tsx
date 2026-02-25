// Purely for development purposes to visualize screen sizes easier
"use client";

function PageSizer() {
  return (
    <div className="fixed bottom-20 left-4 bg-black border-2 border-white rounded-lg p-1 z-999 text-[12px]">
      <div className="block mobileS:hidden text-white">smallest</div>
      <div className="hidden mobileS:block mobileM:hidden text-white">
        mobileS
      </div>
      <div className="hidden mobileM:block mobileDroid:hidden text-white">
        mobileM
      </div>
      <div className="hidden mobileDroid:block mobileL:hidden text-white">
        mobileDroid
      </div>
      <div className="hidden mobileL:block mobileXL:hidden text-white">
        mobileL
      </div>
      <div className="hidden mobileXL:block md:hidden text-white">mobileXL</div>
      <div className="hidden md:block tab:hidden text-white">md</div>
      <div className="hidden tab:block lg:hidden text-white">tab</div>
      <div className="hidden lg:block xl:hidden text-white">lg</div>
      <div className="hidden xl:block lap:hidden text-white">xl</div>
      <div className="hidden lap:block 2xl:hidden text-white">lap</div>
      <div className="hidden 2xl:block text-white">2xl</div>
    </div>
  );
}

export default PageSizer;
