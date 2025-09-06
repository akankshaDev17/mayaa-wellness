// src/components/Trusted.jsx
import React, { useEffect, useMemo, useState } from "react";
import img1 from "../assets/LPU.webp";
import img2 from "../assets/SVIT.webp";
import img3 from "../assets/CGC.webp";
import img4 from "../assets/CU.webp";
import img5 from "../assets/GJIMT.webp";
import img6 from "../assets/GD_GOENKA.jpg";

const useMediaFlags = () => {
  const [flags, setFlags] = useState(() => {
    if (typeof window === "undefined") {
      return {
        isMobile: false,
        isMobileScaled: false,
        isIPadMini: false,
        isIPadAir: false,
        isIPadPro: false,
        isDesktop: false,
      };
    }
    return {
      isMobile: window.matchMedia("(max-width: 480px)").matches,
      isMobileScaled: window.matchMedia("(min-width: 481px) and (max-width: 767.5px)").matches,
      isIPadMini: window.matchMedia("(min-width: 744px) and (max-width: 819px)").matches,
      isIPadAir: window.matchMedia("(min-width: 820px) and (max-width: 1023px)").matches,
      isIPadPro: window.matchMedia("(min-width: 1024px) and (max-width: 1350px)").matches,
      isDesktop: window.matchMedia("(min-width: 1351px)").matches,
    };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const qMobile = window.matchMedia("(max-width: 480px)");
    const qMobileScaled = window.matchMedia("(min-width: 481px) and (max-width: 767.5px)");
    const qMini = window.matchMedia("(min-width: 744px) and (max-width: 819px)");
    const qAir = window.matchMedia("(min-width: 820px) and (max-width: 1023px)");
    const qPro = window.matchMedia("(min-width: 1024px) and (max-width: 1350px)");
    const qDesktop = window.matchMedia("(min-width: 1351px)");

    const update = () =>
      setFlags({
        isMobile: qMobile.matches,
        isMobileScaled: qMobileScaled.matches,
        isIPadMini: qMini.matches,
        isIPadAir: qAir.matches,
        isIPadPro: qPro.matches,
        isDesktop: qDesktop.matches,
      });

    const add = (mq, fn) => {
      if (mq.addEventListener) mq.addEventListener("change", fn);
      else if (mq.addListener) mq.addListener(fn);
    };
    const remove = (mq, fn) => {
      if (mq.removeEventListener) mq.removeEventListener("change", fn);
      else if (mq.removeListener) mq.removeListener(fn);
    };

    update();
    add(qMobile, update);
    add(qMobileScaled, update);
    add(qMini, update);
    add(qAir, update);
    add(qPro, update);
    add(qDesktop, update);

    return () => {
      remove(qMobile, update);
      remove(qMobileScaled, update);
      remove(qMini, update);
      remove(qAir, update);
      remove(qPro, update);
      remove(qDesktop, update);
    };
  }, []);

  return flags;
};

const Trusted = () => {
  const images = useMemo(() => [img1, img2, img3, img4, img5, img6], []);
  const { isMobile, isMobileScaled, isIPadMini, isIPadAir, isIPadPro, isDesktop } = useMediaFlags();

  // Desktop sizes (unchanged on true desktop)
  const baseDesktopSizeByIndex = (i) => {
    switch (i % 6) {
      case 0: return "w-[215px] h-[101px]";
      case 1: return "w-[205px] h-[43px]";
      case 2: return "w-[185px] h-[62px]";
      case 3: return "w-[163px] h-[59px]";
      case 4: return "w-[160px] h-[62px]";
      default: return "";
    }
  };

  // Tablet sizes (no crop via object-contain) with bigger img5
  const iPadDesktopSizeByIndex = (i, band) => {
    const idx = i % 6;
    if (band === "mini") {
      switch (idx) {
        case 0: return "w-[176px] h-[82px]";
        case 1: return "w-[168px] h-[36px]";
        case 2: return "w-[152px] h-[52px]";
        case 3: return "w-[134px] h-[49px]";
        case 4: return "w-[132px] h-[52px]";
        case 5: return "w-[168px] h-[35px]"; // increased img5
        default: return "";
      }
    }
    if (band === "air") {
      switch (idx) {
        case 0: return "w-[184px] h-[86px]";
        case 1: return "w-[176px] h-[38px]";
        case 2: return "w-[158px] h-[54px]";
        case 3: return "w-[140px] h-[51px]";
        case 4: return "w-[138px] h-[54px]";
        case 5: return "w-[176px] h-[38px]"; // increased img5
        default: return "";
      }
    }
    // pro
    switch (idx) {
      case 0: return "w-[198px] h-[94px]";
      case 1: return "w-[188px] h-[40px]";
      case 2: return "w-[170px] h-[59px]";
      case 3: return "w-[150px] h-[55px]";
      case 4: return "w-[148px] h-[59px]";
      case 5: return "w-[184px] h-[40px]"; // increased img5
      default: return "";
    }
  };

  const renderDesktopRow = (sizeByIndex, fit = "object-fill", itemMarginX = "mx-12", gap = "gap-x-6") => (
    <div className="hidden md:block">
      <div className="relative overflow-hidden">
        <div className={`flex items-center trusted-animate-right w-[200%] ${gap}`}>
          {[...images, ...images].map((src, i) => {
            const idx = i % 6;
            const sz = sizeByIndex(idx);
            const base = [fit, itemMarginX].join(" ");
            const cls = idx === 5 ? `${base} ${sz} grayscale` : `${base} ${sz}`;
            return (
              <div key={`d-${i}`}>
                <img src={src} alt={`Brand ${idx + 1}`} className={cls} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Two-track mobile marquee; for 481–767.5 add gap and increased img5
  const renderMobileRow = (imgClass, itemClass, withGap = false, img5Class = "") => (
    <div className="md:hidden">
      <div className="relative overflow-hidden">
        <div className="flex w-full">
          <div className={`trusted-animate-right flex items-center whitespace-nowrap ${withGap ? "gap-x-4" : ""}`}>
            {images.map((src, idx) => (
              <div key={`a-${idx}`} className={itemClass}>
                <img
                  src={src}
                  alt={`Brand ${idx + 1}`}
                  className={[
                    idx === 5 && img5Class ? img5Class : imgClass,
                    idx === 5 ? "grayscale" : ""
                  ].join(" ")}
                />
              </div>
            ))}
          </div>
          <div className={`trusted-animate-right flex items-center whitespace-nowrap ${withGap ? "gap-x-4" : ""}`} aria-hidden="true">
            {images.map((src, idx) => (
              <div key={`b-${idx}`} className={itemClass}>
                <img
                  src={src}
                  alt=""
                  className={[
                    idx === 5 && img5Class ? img5Class : imgClass,
                    idx === 5 ? "grayscale" : ""
                  ].join(" ")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4" />
    </div>
  );

  // 1) Mobile original (≤480px)
  if (isMobile) {
    return (
      <section className="pt-[56px] md:pt-[110px] pb-6 md:pb-12 mt-6 sm:mt-8 md:mt-0 bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]">
        <div
          className="block md:hidden absolute"
          style={{ width: "348px", height: "81px", top: "177px", left: "-109px", opacity: 1, transform: "rotate(0deg)", pointerEvents: "none" }}
        />
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-[#09384D] font-juanaMedium font-medium text-sm sm:text-base md:text-[20px] md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]">
              Trusted by Top Universities And Colleges
            </h2>
          </div>
          {renderMobileRow("object-contain mx-auto max-h-[42px] max-w-[100px]", "shrink-0 w-[110px] px-1.5")}
        </div>
      </section>
    );
  }

  // 1.5) 481–767.5: more space, bigger img5, match original scale on duplicate
  if (isMobileScaled) {
    // Increase global item width and add gap; bump base logo size and img5 larger
    const baseImg = "object-contain mx-auto max-h-[54px] max-w-[124px]";
    const baseItem = "shrink-0 w-[134px] px-2";
    const img5Bump = "object-contain mx-auto max-h-[45px] max-w-[184px]";
    return (
      <section className="pt-[56px] md:pt-[110px] pb-6 md:pb-12 mt-6 sm:mt-8 md:mt-0 bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-[#09384D] font-juanaMedium font-medium text-sm sm:text-base md:text-[20px] md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]">
              Trusted by Top Universities And Colleges
            </h2>
          </div>
          {renderMobileRow(baseImg, baseItem, true /* withGap */, img5Bump)}
        </div>
      </section>
    );
  }

  // 2) iPad Mini 744–819: desktop DOM, more spacing, bigger img5
  if (isIPadMini) {
    const sizeByIndex = (idx) => iPadDesktopSizeByIndex(idx, "mini");
    return (
      <section className="pt-[56px] md:pt-[110px] pb-6 md:pb-12 mt-6 sm:mt-8 md:mt-0 bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-[#09384D] font-juanaMedium font-medium text-sm sm:text-base md:text-[20px] md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]">
              Trusted by Top Universities And Colleges
            </h2>
          </div>
          {renderDesktopRow(sizeByIndex, "object-contain", "mx-8", "gap-x-8")}
        </div>
      </section>
    );
  }

  // 3) iPad Air 820–1023
  if (isIPadAir) {
    const sizeByIndex = (idx) => iPadDesktopSizeByIndex(idx, "air");
    return (
      <section className="pt-[56px] md:pt-[110px] pb-6 md:pb-12 mt-6 sm:mt-8 md:mt-0 bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-[#09384D] font-juanaMedium font-medium text-sm sm:text-base md:text-[20px] md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]">
              Trusted by Top Universities And Colleges
            </h2>
          </div>
          {renderDesktopRow(sizeByIndex, "object-contain", "mx-9", "gap-x-8")}
        </div>
      </section>
    );
  }

  // 4) iPad Pro 1024–1350
  if (isIPadPro) {
    const sizeByIndex = (idx) => iPadDesktopSizeByIndex(idx, "pro");
    return (
      <section className="pt-[56px] md:pt-[110px] pb-6 md:pb-12 mt-6 sm:mt-8 md:mt-0 bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-[#09384D] font-juanaMedium font-medium text-sm sm:text-base md:text-[20px] md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]">
              Trusted by Top Universities And Colleges
            </h2>
          </div>
          {renderDesktopRow(sizeByIndex, "object-contain", "mx-10", "gap-x-8")}
        </div>
      </section>
    );
  }

  // 5) Desktop original (≥1351)
  if (isDesktop) {
    const sizeByIndex = (idx) => {
      switch (idx) {
        case 0: return "w-[215px] h-[101px]";
        case 1: return "w-[205px] h-[43px]";
        case 2: return "w-[185px] h-[62px]";
        case 3: return "w-[163px] h-[59px]";
        case 4: return "w-[160px] h-[62px]";
        case 5: return "w-[114px] h-[61.93px]";
        default: return "";
      }
    };
    return (
      <section className="pt-[56px] md:pt-[110px] pb-6 md:pb-12 mt-6 sm:mt-8 md:mt-0 bg-white md:bg-[#fdf8f3] lg:bg-[#fdf8f3]">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-[#09384D] font-juanaMedium font-medium text-sm sm:text-base md:text-[20px] md:leading-[1.5] text-center md:mt-[8px] lg:mt-[20px]">
              Trusted by Top Universities And Colleges
            </h2>
          </div>
          {renderDesktopRow(sizeByIndex, "object-fill", "mx-12", "gap-x-6")}
        </div>
      </section>
    );
  }

  return null;
};

export default Trusted;
