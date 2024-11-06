"use client";
import React, { useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { questions } from "./questionsData";

export const FAQ = () => {
  const [OpenedId, setOpenedId] = useState(0);
  return (
    <section id="QUESTIONS_SECTION" className="md:px-14 px-10 py-12 bg-white">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="md:text-4xl text-3xl font-semibold">أسئلة شائعة</div>
        <div className="md:w-1/2 text-center md:text-xl text-lg text-gray-400">
          هنا ستجد إجابات عن الأسئلة الأكثر شيوعًا التي يطرحها المعلمون حول
          خدماتنا إذا كانت لديك استفسارات إضافية، فلا تتردد في التواصل معنا
        </div>
        <div className="w-32 md:h-1 h-0.5 rounded-full bg-secondary"></div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
          <div className="flex flex-col items-start w-full md:gap-4 gap-2">
            {questions.slice(0, questions.length / 2).map((item, idx) => (
              <QuestionCard
                key={idx}
                id={idx + 1}
                question={item.question}
                answer={item.answer}
                isOpen={OpenedId === idx + 1}
                setOpen={setOpenedId}
              />
            ))}
          </div>
          <div className="flex flex-col items-start w-full md:gap-4 gap-2">
            {questions.slice(questions.length / 2).map((item, idx) => (
              <QuestionCard
                key={idx}
                id={idx + questions.length / 2 + 1}
                question={item.question}
                answer={item.answer}
                isOpen={OpenedId === idx + questions.length / 2 + 1}
                setOpen={setOpenedId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
