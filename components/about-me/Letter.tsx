import React from 'react';
import Image from 'next/image';
import AquaWolfPFP from '@/public/images/svg/aquawolf-pfp.svg';

export default function Letter() {
  return (
    <div className="relative px-5 lg:px-0">
      <h2 className="text-transparent">About Me</h2>
      <div className="relative">
        {/* Letter Bottom */}
        <div className="absolute left-0 top-0 z-10 h-full w-full -rotate-1 rounded-lg bg-letter-middle lg:-rotate-2"></div>
        {/* Letter Middle */}
        <div className="absolute left-1 top-1 z-20 h-[98%] w-[98%] -rotate-1 rounded-lg bg-letter-bottom lg:left-3 lg:top-10 lg:h-[95%] lg:w-[98%] lg:rotate-3"></div>
        {/* Letter Top */}
        <div className="relative z-30 -rotate-1 rounded-lg bg-letter-top shadow-letter-top lg:rotate-2 lg:rounded-xl">
          <article className="space-y-4 p-4 text-base text-white/80 lg:space-y-5 lg:p-5 lg:px-24 lg:py-14 lg:text-2xl">
            <p>Hi, I’m Asmare, a Fourth-year Software Engineering student with a passion for technology and innovation.</p>
            <p>
              Growing up in a low-tech environment, I didn’t have many opportunities to explore technology early on, but I always felt drawn to it. During secondary school, I developed a strong interest in computers and technology, which motivated me to learn more despite the challenges.
            </p>
            <p>
              After joining university, I spent my freshman year focusing on general studies. However, once I transitioned into Software Engineering, I discovered my true passion. I committed myself fully to learning, dedicating countless hours to mastering new skills, solving problems, and exploring the world of software development.
            </p>
            <p>
              Over the past two years, I’ve worked on freelance projects, contracts, and side projects, gaining valuable hands-on experience. My journey hasn’t been without challenges, but I’ve always been a hard worker, resilient in the face of obstacles, and deeply passionate about building meaningful software solutions.
            </p>
            <p>
              My love for creating applications, websites, and exploring DevOps has only grown stronger. My mission is to contribute to the world by building software that is not just functional but also exceptional and user-centered. I’m driven to add value and make an impact through innovation and thoughtful design.
            </p>
            <p>
              Whether it’s collaborating on impactful projects, solving complex problems, or pushing the boundaries of technology, I’m always eager to learn, grow, and contribute.
            </p>
            <div className="relative flex flex-col items-center gap-2">
              <div className="self-start">
                Wholeness & Balanced Vibrations 🙏
              </div>
            </div>
            <div className="mb-10 font-handwriting text-4xl lg:text-6xl">
              <div className="text-white">Asmare</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Image src={AquaWolfPFP} alt="AquaWolf PFP" />
              </div>
              <div className="lg:ml-4">
                <div className="text-xl font-semibold text-white lg:text-2xl">
                  Asmare Admasu
                </div>
                <div className="text-[12px] lg:text-lg">
                  Full-Stack Software Engineer
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
