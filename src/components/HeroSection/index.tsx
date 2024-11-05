import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="w-full h-fit relative md:px-14 px-10">
      <Image
        src={"/wave.svg"}
        alt={"Waves"}
        fill
        className="object-cover object-right-bottom -z-10"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 w-full h-full gap-x-8 gap-y-24 md:py-20 py-16">
        <div className="w-full h-full flex flex-col gap-y-4 justify-center">
          <div className="font-bold md:text-5xl text-4xl">
            إعداد الاختبارات بسهولة وإحترافية
          </div>
          <div className="font-medium md:md:text-xl text-lg mt-2 flex items-start gap-x-2">
            <Image
              src={"/icons/check.svg"}
              alt={"check"}
              width={17}
              height={15}
              className="mt-1.5"
            />
            واجهة سهلة: يختار المعلم المادة، المرحلة الدراسية، ونوع الأسئلة
            (اختياري، صح وخطأ، مقالي )
          </div>
          <div className="font-medium md:text-xl text-lg flex items-start gap-x-2">
            <Image
              src={"/icons/check.svg"}
              alt={"check"}
              width={17}
              height={15}
              className="mt-1.5"
            />
            إعداد الأسئلة: يحدد المعلم مستوى الأسئلة والدروس، ويستطيع توليد
            أسئلة عشوائية أو إعداد مفاتيح الإجابات يدويًا .
          </div>
          <div className="font-medium md:text-xl text-lg flex items-start gap-x-2">
            <Image
              src={"/icons/check.svg"}
              alt={"check"}
              width={17}
              height={15}
              className="mt-1.5"
            />
            تخصيص الترويسة: يختار المعلم كليشة الاختبار سواء كان شهريًا أو
            نهائيًا ويخصصها حسب الحاجة .
          </div>
          <div className="font-medium md:text-xl text-lg flex items-start gap-x-2">
            <Image
              src={"/icons/check.svg"}
              alt={"check"}
              width={17}
              height={15}
              className="mt-1.5"
            />
            تعديل وطباعة: يمكن للمعلم تعديل الأسئلة، ثم طباعة نموذج الأسئلة
            ونموذج الإجابات .
          </div>
          <div className="w-full flex gap-10 items-center lg:justify-end lg:pe-20 md:justify-start justify-center">
            <button className="px-12 md:py-4 py-3 whitespace-nowrap text-primary bg-white rounded-full md:text-xl text-lg font-bold shadow-[0_0_10px_5px_rgba(88,184,254,0.4)] hover:bg-primary hover:text-white border-2 border-primary hover:border-white transition-all duration-200 ease-linear">
              ابدأ الآن
            </button>
            <Link
              className="flex gap-x-2 items-center text-white font-semibold md:text-lg text-base group hover:text-white"
              href={"#"}
            >
              تعرف على الخدمة
              <div className="relative md:w-6 md:h-6 w-5 h-5">
                <Image
                  src={"/icons/double-left.svg"}
                  alt={"check"}
                  width={25}
                  height={25}
                  className="md:mt-0.5 mt-[1px] absolute top-0 start-0 group-hover:start-2 transition-all duration-300"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center relative">
          <Image
            src={"/teachIllustrations.svg"}
            alt={"Illustration"}
            width={400}
            height={400}
          />
          <div className="w-32 h-32 aspect-square bg-secondary rounded-full absolute top-0 right-0 flex items-center justify-center">
            <Image
              src={"/icons/clock.svg"}
              alt={"clock"}
              width={40}
              height={40}
            />
          </div>
          <div className="w-20 h-20 aspect-square bg-secondary rounded-full absolute -top-10 left-0 flex items-center justify-center">
            <Image
              src={"/icons/degree-hat.svg"}
              alt={"degree-hat"}
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
