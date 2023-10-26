"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
      <Image
        src="/images/codingImage.jpg"
        alt="Coding Image"
        width={400}
        height={400}
      />
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">
          I am a full stack software engineer with a lot of habilities for
          programming stufff and I need to later change all of this so it
          apperars good. My job is to make peoples lives easier by creating web
          and mobile applications that are easy to use and understand. I am a
          full stack software engineer with a lot of habilities for programming
          stufff and I need to later change all of this so it apperars good.
        </p>
        <div className="flex flex-row mt-8">
          <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
            Skills
          </span>
          <span>Education</span>
          <span>Experience</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
