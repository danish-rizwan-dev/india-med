import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const CalendarIcon = () => (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <Image
        src="/images/icons/calender.png"
        alt="Calendar Icon"
        width={26.18}
        height={24.73}
        className="object-contain brightness-0 invert"
      />
    </div>
  );

  return (
    <section
      className="
        relative w-full bg-white overflow-hidden
        px-6 py-12 lg:px-0 lg:py-0 lg:min-h-[850px]
      "
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute pointer-events-none z-0 hidden md:block md:w-[508px] md:h-[723px] md:top-[-70.33px] md:right-0">
        <Image
          src="/backgroundgrids.png"
          alt=""
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* ================= WRAPPER ================= */}
      <div className="relative flex flex-col items-center lg:block">
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative lg:absolute z-10
            flex flex-col
            w-full max-w-full sm:max-w-[584px]
            text-center lg:text-left
            gap-6 sm:gap-[30px] md:gap-[35px] lg:gap-[45px]
          "
        >
          {/* 👇 keep exact desktop positioning */}
          <div className="w-full lg:[top:75px] lg:[left:208px] lg:absolute">
            <div className="flex flex-col gap-4 sm:gap-[20px]">
              <p className="brand-label">India Med Services</p>

              <h1
                className="
                  text-[#444444] font-montserrat font-bold
                  text-[28px] sm:text-[34px] md:text-[40px] lg:text-[47px]
                  leading-tight
                "
              >
                Affordable Medical Treatment in India with
                <p className="text-[#EE4423]"> World-Class Care</p>
              </h1>
              <p
                className="
                  font-montserrat font-semibold
                  text-[15px] sm:text-[16px] lg:text-[17px]
                  leading-normal text-[#58595B]
                "
              >
                Looking for medical treatment in India? We help you compare
                treatment costs in India, choose top hospitals and get complete
                visa & patient support.
              </p>
            </div>

            <Link
              href="/appointment"
              className="
                flex items-center justify-center
                bg-[#EE4423] text-white
                transition-transform hover:scale-[1.02] active:scale-[0.98]
                shadow-[0px_10px_20px_rgba(238,68,35,0.2)]
                mx-auto lg:mx-0 mt-4 sm:mt-6
                w-full sm:w-[252.18px] h-[45px] sm:h-[49px] px-4 sm:px-[20px] gap-3 sm:gap-[15px] rounded-full
              "
            >
              <CalendarIcon />
              <span className="font-montserrat font-bold text-[15px] sm:text-[17px]">
                Book Appointment
              </span>
            </Link>
          </div>
        </div>

        {/* ================= DOCTOR IMAGE ================= */}
        <div
          className="
            relative lg:absolute z-20
            w-[180px] sm:w-[260px] md:w-[320px] lg:w-[426.39px]
            h-[220px] sm:h-[350px] md:h-[420px] lg:h-[569.47px]
            mt-6 sm:mt-10 lg:mt-0
          "
        >
          {/* 👇 desktop fixed position only */}
          <div className="relative w-full h-full lg:[top:22px] lg:[left:853px] lg:absolute">
            <Image
              src="/doctor.png"
              alt="Healthcare Professional"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
