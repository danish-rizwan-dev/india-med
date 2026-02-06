import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const CalendarIcon = () => (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <Image
        src="/calender.png"
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
      <div
        className="absolute pointer-events-none z-0 hidden md:block"
        style={{
          width: "508px",
          height: "723px",
          top: "-70.33px",
          right: "0px",
        }}
      >
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
            w-full max-w-[584px]
            text-center lg:text-left
            gap-[30px] sm:gap-[35px] lg:gap-[45px]
          "
          style={{
            top: "auto",
            left: "auto",
          }}
        >
          {/* 👇 keep exact desktop positioning */}
          <div className="lg:[top:75px] lg:[left:208px] lg:absolute w-full">
            <div className="flex flex-col gap-[20px]">
              <p className="brand-label">India Med Services</p>

              <h1
                className="
                  text-[#444444] font-montserrat font-bold
                  text-[28px] sm:text-[34px] md:text-[40px] lg:text-[47px]
                  leading-tight
                "
              >
                Affordable Medical Treatment in India with World-Class Care
              </h1>

              <p
                className="
                  font-montserrat font-semibold
                  text-[15px] sm:text-[16px] lg:text-[17px]
                  leading-normal text-[#58595B]
                "
              >
                Looking for medical treatment in India? We help you compare treatment costs in India,
                choose top hospitals and get complete visa & patient support.
              </p>
            </div>

            <Link
              href="/appointment"
              className="
                flex items-center justify-center
                bg-[#EE4423] text-white
                transition-transform hover:scale-[1.02] active:scale-[0.98]
                shadow-[0px_10px_20px_rgba(238,68,35,0.2)]
                mx-auto lg:mx-0 mt-6
              "
              style={{
                width: "252.18px",
                height: "49px",
                padding: "0 20px",
                gap: "15px",
                borderRadius: "50px",
              }}
            >
              <CalendarIcon />
              <span className="font-montserrat font-bold text-[17px]">
                Book Appointment
              </span>
            </Link>
          </div>
        </div>

        {/* ================= DOCTOR IMAGE ================= */}
        <div
          className="
            relative lg:absolute z-20
            w-[260px] sm:w-[320px] md:w-[380px] lg:w-[426.39px]
            h-[350px] sm:h-[420px] md:h-[500px] lg:h-[569.47px]
            mt-10 lg:mt-0
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
