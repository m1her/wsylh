import React from "react";

export const AboutUs = () => {
  return (
    <div className="md:px-14 px-10 py-12 bg-white">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="md:text-4xl text-3xl font-semibold">من نحن</div>
        <div className="md:w-1/2 text-center md:text-xl text-lg text-gray-400">
          نحن فريق من المحترفين المتحمسين الذين جمعوا بين الخبرة في التعليم
          والتكنولوجيا لنقدم لكم حلاً مبتكرًا يلبي احتياجات المعلمين في العصر
          الحديث
        </div>
        <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 mt-4">
          <div className="flex flex-col gap-4 items-center justify-center text-center relative">
            <div className="shadow-[0_0_70px_70px_rgba(60,80,151,0.2)] absolute top-[20%] start-1/3 z-10"></div>
            <div className="md:text-3xl text-2xl font-semibold z-20">
              ما نقدمه
            </div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800 z-20">
              في "إعداد الاختبارات"، نساعدك على إعداد وتصحيح الاختبارات الورقية
              بسهولة وفعالية، بفضل منصتنا المتكاملة والتصحيح الآلي. هدفنا هو
              توفير وقتك وجهدك للتركيز على الأهم: تعليم الطلاب.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center relative">
            <div className="shadow-[0_0_70px_70px_rgba(255,107,107,0.2)] absolute top-[20%] end-1/3 z-10"></div>
            <div className="md:text-3xl text-2xl font-semibold">رؤيتنا</div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800">
              نطمح لأن نكون الشريك الأمثل لكل معلم ومؤسسة تعليمية تسعى لتحسين
              عملية التقييم. نهدف إلى تمكين المعلمين من إعداد اختبارات تتسم
              بالدقة والفعالية، مع تقديم تجربة مستخدم سلسة ومتكاملة.
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center relative">
            <div className="shadow-[0_0_70px_70px_rgba(88,184,254,0.2)] absolute bottom-[20%] start-1/3 z-10"></div>
            <div className="md:text-3xl text-2xl font-semibold">قيمنا</div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800">
              <p>
                <span className="font-semibold text-[#263776]">البساطة:</span>{" "}
                أدوات سهلة تتيح إعداد وتصحيح الاختبارات بسرعة وكفاءة.
              </p>
              <p>
                <span className="font-semibold text-[#263776]">الابتكار:</span>{" "}
                حلول متجددة لجعل التقييم أكثر فعالية.
              </p>
              <p>
                <span className="font-semibold text-[#263776]">الجودة:</span>{" "}
                منتج عالي الجودة يلبي احتياجات المعلمين بدقة.
              </p>
              <p>
                <span className="font-semibold text-[#263776]">الدعم:</span> دعم
                مستمر، سواء كنت مبتدئًا أو معلمًا متمرسًا.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center relative">
            <div className="shadow-[0_0_70px_70px_rgba(60,80,151,0.2)] absolute bottom-[20%] end-1/3 z-10"></div>
            <div className="md:text-3xl text-2xl font-semibold">رسالتنا</div>
            <div className="lg:w-9/12 text-center md:text-lg text-base text-gray-800">
              نحن هنا لمساعدة المعلمين في استثمار وقتهم وجهودهم عبر أدوات بسيطة
              تتيح إعداد وتصحيح الاختبارات بلمسة زر. نؤمن بأن التكنولوجيا تعزز
              جودة التعليم مع الحفاظ على قيمه التقليدية.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
