"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
export type AboutValue = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type AboutSection = {
  type: "about";
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: AboutValue[];
};

const CourseDetails = ({ about }: { about: AboutSection }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold leading-[30px] text-black mb-4">
        {about.name}
      </h2>

      <div className="mb-16 rounded-md border border-gray-300 p-6 divide-y divide-gray-200">
        {about.values.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id} className="py-4">
              <button
                onClick={() => toggleIndex(index)}
                className="flex w-full items-center justify-between text-left text-base font-medium text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <div
                  className="mr-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isOpen && (
                <div
                  className="mt-3 text-sm text-gray-700 leading-6"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetails;
