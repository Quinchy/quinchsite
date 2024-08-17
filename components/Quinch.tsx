'use client'

import React, { useCallback } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import profilePic from '../public/images/quinch_dev_profile_1000_bg_flip.png';
import bankingSystem from '../public/images/banking_system.png';
import appointmentSystem from '../public/images/appointment-system.png';
import peerToPeerDeliverySystem from '../public/images/peer_to_peer_delivery_system.png';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { GlareCard } from '@/components/ui/glare-card';

function Quinch() {
  const scrollToProjects = useCallback(() => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const GitHubIcon = () => (
    <svg className='opacity-90' width="20" height="20" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.8329 47.687C20.8329 47.3285 20.754 46.9743 20.6018 46.6497C20.4496 46.325 20.2279 46.0378 19.9524 45.8084C19.6768 45.579 19.3542 45.413 19.0074 45.3222C18.6605 45.2313 18.2979 45.2179 17.9453 45.2828C14.7449 45.8702 10.7042 45.9585 9.62981 42.9408C8.693 40.6036 7.14123 38.5635 5.13902 37.0367C4.99617 36.959 4.86002 36.8695 4.73197 36.7693C4.55674 36.307 4.2455 35.9088 3.8393 35.6271C3.43311 35.3453 2.95105 35.1933 2.45672 35.1912H2.44479C1.79839 35.1909 1.17823 35.4468 0.720042 35.9027C0.261854 36.3587 0.00296343 36.9776 3.42778e-05 37.624C-0.0095247 39.6175 1.98273 40.8948 2.79096 41.3269C3.74403 42.2845 4.50999 43.4116 5.0495 44.6503C5.94002 47.1523 8.52801 50.9484 15.9673 50.459C15.9698 50.5449 15.9721 50.6261 15.9733 50.7001L15.984 51.3543C15.984 52.0027 16.2416 52.6245 16.7001 53.083C17.1585 53.5415 17.7804 53.799 18.4288 53.799C19.0772 53.799 19.699 53.5415 20.1575 53.083C20.6159 52.6245 20.8735 52.0027 20.8735 51.3543L20.8616 50.576C20.8497 50.1127 20.8329 49.4418 20.8329 47.687ZM46.9111 10.7077C46.9887 10.4021 47.0651 10.0631 47.132 9.68109C47.5273 6.95663 47.1826 4.17597 46.134 1.63052C46.0017 1.29868 45.7984 0.999794 45.5383 0.754819C45.2783 0.509845 44.9678 0.32471 44.6287 0.212395C43.7584 -0.0812687 40.545 -0.659037 34.3997 3.26833C29.2915 2.06624 23.9739 2.06624 18.8657 3.26833C12.7455 -0.601512 9.54865 -0.0763792 8.68677 0.200562C8.33929 0.308328 8.02032 0.492482 7.75324 0.739527C7.48617 0.986572 7.27775 1.29025 7.14328 1.6283C6.07322 4.22262 5.73227 7.05999 6.15726 9.83396C6.21696 10.1467 6.28141 10.4356 6.34827 10.7006C4.32297 13.3982 3.2442 16.6887 3.2792 20.0618C3.2726 20.8144 3.30727 21.5668 3.38306 22.3155C4.1996 33.5676 11.5339 36.9459 16.6441 38.1062C16.5379 38.4118 16.4412 38.7388 16.3553 39.085C16.2021 39.7141 16.3046 40.3782 16.6403 40.9317C16.9761 41.4853 17.5176 41.8831 18.1462 42.038C18.7748 42.1928 19.4392 42.0921 19.9937 41.7578C20.5481 41.4236 20.9474 40.8831 21.1039 40.2549C21.2595 39.4403 21.6582 38.692 22.2475 38.1086C22.6039 37.7966 22.8619 37.3878 22.9901 36.9319C23.1184 36.476 23.1114 35.9926 22.97 35.5406C22.8286 35.0886 22.5589 34.6874 22.1937 34.3859C21.8285 34.0844 21.3835 33.8955 20.9129 33.8422C12.4685 32.8777 8.80256 29.4373 8.25107 21.8667C8.18998 21.2671 8.16248 20.6645 8.16871 20.0618C8.12948 17.6578 8.92372 15.3143 10.4165 13.4295C10.5665 13.233 10.7262 13.0441 10.8952 12.8636C11.1945 12.5287 11.3957 12.1178 11.4768 11.676C11.5579 11.2342 11.5157 10.7786 11.3548 10.3592C11.1898 9.91801 11.0629 9.46353 10.9752 9.00074C10.776 7.68477 10.8413 6.34229 11.1673 5.05188C13.2922 5.652 15.2919 6.62885 17.0714 7.9359C17.3657 8.13191 17.6987 8.26235 18.0478 8.31837C18.3969 8.3744 18.754 8.3547 19.0948 8.26061C24.0359 6.91967 29.2452 6.92051 34.1859 8.26306C34.5285 8.35704 34.8875 8.37561 35.2381 8.3175C35.5886 8.25939 35.9224 8.12597 36.2164 7.92644C37.9876 6.61395 39.9789 5.62837 42.0967 5.01614C42.4213 6.27556 42.4939 7.58669 42.3104 8.87425C42.2218 9.38162 42.0835 9.87904 41.8973 10.3593C41.7364 10.7786 41.6942 11.2342 41.7753 11.676C41.8564 12.1178 42.0576 12.5288 42.3569 12.8637C42.5456 13.0762 42.7342 13.3054 42.9037 13.5202C44.3859 15.3731 45.1667 17.6897 45.1086 20.0618C45.113 20.6965 45.0823 21.3309 45.0166 21.9622C44.4783 29.4325 40.798 32.8753 32.3142 33.8422C31.8435 33.8958 31.3985 34.085 31.0333 34.3868C30.6681 34.6887 30.3985 35.0901 30.2573 35.5423C30.116 35.9945 30.1092 36.478 30.2377 36.934C30.3661 37.3901 30.6243 37.7989 30.9808 38.1109C31.5887 38.71 31.9882 39.4882 32.1208 40.3313C32.286 40.9857 32.3619 41.6595 32.3464 42.3343V48.0404C32.3225 49.6232 32.3225 50.8098 32.3225 51.3541C32.3225 52.0025 32.5801 52.6243 33.0386 53.0828C33.497 53.5413 34.1189 53.7989 34.7673 53.7989C35.4157 53.7989 36.0375 53.5413 36.496 53.0828C36.9544 52.6243 37.212 52.0025 37.212 51.3541C37.212 50.8241 37.212 49.6614 37.2359 48.0786V42.3343C37.2556 41.2533 37.1283 40.1747 36.8575 39.128C36.7801 38.7844 36.6852 38.4449 36.5734 38.111C40.2925 37.4931 43.6716 35.5756 46.1094 32.6998C48.5472 29.8239 49.8854 26.1763 49.8858 22.4063C49.9664 21.6275 50.0038 20.8448 49.9981 20.0618C50.0523 16.685 48.9646 13.3889 46.9111 10.7077Z" fill="#62A79F"/>
    </svg>
  );
  const LinkedInIcon = () => (
    <svg className='cursor-pointer opacity-90' width="20" height="20" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.1563 17.4272C35.0657 17.4263 33.0075 17.9434 31.1655 18.9323C30.9974 18.4896 30.6987 18.1085 30.3088 17.8397C29.919 17.5708 29.4566 17.4269 28.9831 17.4272H19.6423C19.3356 17.427 19.0318 17.4873 18.7484 17.6046C18.465 17.7218 18.2075 17.8939 17.9906 18.1107C17.7738 18.3276 17.6017 18.5851 17.4845 18.8685C17.3672 19.1519 17.3069 19.4557 17.3071 19.7624V47.7849C17.3069 48.0916 17.3672 48.3953 17.4844 48.6787C17.6017 48.9621 17.7737 49.2196 17.9906 49.4365C18.2075 49.6534 18.465 49.8254 18.7484 49.9427C19.0318 50.06 19.3355 50.1203 19.6423 50.1201H28.9831C29.2898 50.1203 29.5936 50.06 29.877 49.9427C30.1604 49.8254 30.4179 49.6534 30.6347 49.4365C30.8516 49.2196 31.0236 48.9621 31.1409 48.6787C31.2582 48.3953 31.3185 48.0916 31.3183 47.7849V34.9412C31.3183 34.3219 31.5643 33.7279 32.0023 33.29C32.4402 32.8521 33.0342 32.606 33.6535 32.606C34.2729 32.606 34.8668 32.8521 35.3048 33.29C35.7427 33.7279 35.9887 34.3219 35.9887 34.9412V47.7849C35.9886 48.0916 36.0488 48.3953 36.1661 48.6787C36.2834 48.9621 36.4554 49.2196 36.6723 49.4365C36.8892 49.6534 37.1467 49.8254 37.4301 49.9427C37.7135 50.06 38.0172 50.1203 38.3239 50.1201H47.6648C47.9715 50.1203 48.2752 50.06 48.5586 49.9427C48.842 49.8254 49.0995 49.6534 49.3164 49.4365C49.5333 49.2196 49.7053 48.9621 49.8226 48.6787C49.9399 48.3953 50.0002 48.0916 50 47.7849V30.2708C49.9958 26.8658 48.6412 23.6014 46.2335 21.1936C43.8258 18.7859 40.5614 17.4314 37.1563 17.4272ZM45.3296 45.4497H40.6592V34.9412C40.6592 33.0832 39.9211 31.3013 38.6073 29.9875C37.2934 28.6737 35.5115 27.9356 33.6535 27.9356C31.7955 27.9356 30.0136 28.6737 28.6998 29.9875C27.386 31.3013 26.6479 33.0832 26.6479 34.9412V45.4497H21.9775V22.0976H26.6479V23.7395C26.6482 24.2234 26.7987 24.6952 27.0786 25.0899C27.3586 25.4845 27.7541 25.7825 28.2107 25.9427C28.6673 26.1029 29.1623 26.1174 29.6275 25.9842C30.0926 25.851 30.5049 25.5766 30.8075 25.199C31.8555 23.868 33.2929 22.8975 34.9192 22.423C36.5454 21.9485 38.2792 21.9937 39.8786 22.5523C41.4779 23.1108 42.8628 24.1549 43.8401 25.5386C44.8173 26.9224 45.3381 28.5768 45.3296 30.2708V45.4497ZM12.6366 17.4272H3.29579C2.98908 17.427 2.68534 17.4873 2.40194 17.6046C2.11854 17.7218 1.86104 17.8939 1.64416 18.1107C1.42728 18.3276 1.25528 18.5851 1.13798 18.8685C1.02069 19.1519 0.960409 19.4557 0.960584 19.7624V47.7849C0.960406 48.0916 1.02069 48.3953 1.13798 48.6787C1.25527 48.9621 1.42727 49.2196 1.64415 49.4365C1.86103 49.6534 2.11854 49.8254 2.40194 49.9427C2.68534 50.06 2.98908 50.1203 3.29579 50.1201H12.6366C12.9433 50.1203 13.2471 50.06 13.5305 49.9427C13.8139 49.8254 14.0714 49.6534 14.2883 49.4365C14.5052 49.2196 14.6772 48.9621 14.7944 48.6787C14.9117 48.3953 14.972 48.0916 14.9718 47.7849V19.7624C14.972 19.4557 14.9117 19.1519 14.7944 18.8685C14.6771 18.5851 14.5051 18.3276 14.2883 18.1107C14.0714 17.8939 13.8139 17.7218 13.5305 17.6046C13.2471 17.4873 12.9433 17.427 12.6366 17.4272ZM10.3014 45.4497H5.631V22.0976H10.3014V45.4497ZM8.00042 0.0134893C6.97845 -0.0476853 5.9547 0.099652 4.99145 0.446541C4.0282 0.793431 3.14557 1.33262 2.39725 2.03133C1.64892 2.73003 1.05053 3.57365 0.638461 4.51087C0.226397 5.44809 0.00927252 6.45934 0.000290557 7.48311C-0.0086914 8.50688 0.190657 9.52178 0.586214 10.4661C0.98177 11.4104 1.56527 12.2644 2.30122 12.9761C3.03718 13.6878 3.91021 14.2424 4.86722 14.6062C5.82424 14.9699 6.84524 15.1352 7.86814 15.0919H7.93427C8.95895 15.1528 9.98528 15.0041 10.9506 14.6549C11.9158 14.3057 12.7998 13.7634 13.5483 13.061C14.2969 12.3587 14.8945 11.5111 15.3044 10.57C15.7143 9.62891 15.9281 8.61413 15.9326 7.58765C15.9371 6.56117 15.7322 5.54455 15.3306 4.59992C14.9289 3.65528 14.3388 2.80246 13.5964 2.09357C12.8541 1.38468 11.9749 0.834606 11.0127 0.476963C10.0506 0.11932 9.0256 -0.0383836 8.00042 0.0134893ZM7.93429 10.4215H7.86814C7.4643 10.4706 7.05465 10.4327 6.66665 10.3104C6.27865 10.1882 5.92128 9.98438 5.61849 9.7127C5.31571 9.44102 5.07452 9.10774 4.91109 8.73521C4.74766 8.36268 4.66578 7.95951 4.67093 7.55274C4.67093 5.81044 5.97764 4.68389 8.00042 4.68389C8.40838 4.6295 8.82326 4.66317 9.2171 4.78263C9.61095 4.90209 9.97463 5.10455 10.2836 5.3764C10.5927 5.64824 10.8398 5.98315 11.0085 6.35856C11.1772 6.73398 11.2634 7.14118 11.2615 7.55274C11.2615 9.29502 9.95479 10.4215 7.93429 10.4215Z" fill="#62A79F"/>
    </svg>
  );
  const birthDate = new Date(2002, 7, 25); // Months are 0-indexed in JavaScript (7 is August)
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // Calculate age
  let age = currentYear - birthDate.getFullYear();
  // If current date is before birthday this year, subtract one from age
  const isBirthdayPassed = currentDate >= new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
  if (!isBirthdayPassed) {
    age--;
  }
  const AboutMe = React.memo(() => (
    <div id='about-section' className='scroll-mt-40 flex flex-col items-center gap-5'>
      <p className='text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] tracking-[-0.05em] font-bold text-[--color-highlight] self-center ease-in-out duration-300'>about:me</p>
      <p className='text-center self-center text-[--color-main-light] text-base '>
      Hello! My name is <span className='text-[--color-highlight]'>Cyril James De Guzman</span>. 
      I'm a {age}-year-old student from Bataan Peninsula State University - Main Campus, as well as a self-taught <span className='text-[--color-highlight]'>Software Developer from Bataan, Philippines</span>. 
      <br />
      <br />
      I am focused on software development, throughout web, desktop, and mobile apps. 
      <br />
      <br />
      I love exploring new technology and passionately learning new things to keep improving and producing up-to-date, quality software with captivating visuals. 
      Outside of coding and tech, my hobbies and interests include gaming, digital art, anime/manga, photography, and animation.
      </p>
    </div>
  ));
  return (
    <div className='flex flex-col items-center justify-center mt-[8rem] gap-64 overflow-hidden max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48'>
      {/* 1. Heading */}
      <div className='flex flex-col items-center gap-5 md:items-start'>
        <div className='flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16 lg:gap-32 xl:gap-44 ease-in-out duration-300'>
          <div className='flex flex-col items-center md:items-start'>
            {/* Devname and Links Section */}
            <div className='flex gap-3 md:gap-5 content-center'>
              {/* Devname */}
              <p className='text-[3rem] md:text-[4.5rem] text-[--color-highlight] leading-none font-semibold tracking-[-0.08em] cursor-default'>quinch</p>
              {/* Links */}
              <div className='inline-flex flex-row items-center gap-0 md:gap-3 mt-2'>
                <Link href="https://github.com/QuinchY" target='_blank' passHref>
                  <div className='cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500'>
                    <GitHubIcon />
                  </div>
                </Link>
                <Link href="https://linkedin.com/in/cyril-james-de-guzman" target='_blank' passHref>
                  <div className='cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500'>
                    <LinkedInIcon />
                  </div>
                </Link>
              </div>
            </div>
            {/* Short Text Section */}
            <p className='mt-7 ml-2 text-[1.1rem] min-[320px]:text-[1rem] md:text-[1.40rem] text-[--color-main-light] opacity-90 tracking-tighter cursor-default'>A Glorious Software Developer.</p>
          </div>
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={200}
            height={200}
            placeholder='empty'
            quality={100}
            priority
          />
        </div>
        {/* Go to Projects Button */}
        <motion.button
          onClick={scrollToProjects}
          className='relative mt-3 cursor-pointer border border-[--color-main-light-opacity2] rounded-xl flex text-[1.35rem] font-semibold pl-14 pr-7 py-4 ease-in-out duration-500 group'
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            className='bg-[--color-highlight] h-full rounded-s-xl absolute top-0 left-0 -z-10'
            variants={{
              rest: { width: "10%", borderTopRightRadius: "0px", borderBottomRightRadius: "0px" },
              hover: { width: "100%", borderTopRightRadius: "0.75rem", borderBottomRightRadius: "0.75rem" }
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.span
            className='relative flex items-center sm:text-[1.25rem] min-[320px]:text-[1.1rem]'
            variants={{
              rest: { color: 'var(--color-highlight)' },
              hover: { color: 'var(--color-background)' }
            }}
            transition={{ duration: 0.5 }}
          >
            View my Projects
            <motion.div
              className='ml-2'
              variants={{
                rest: { rotate: -90 },
                hover: { rotate: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <FaArrowDown />
            </motion.div>
          </motion.span>
        </motion.button>
      </div>
      {/* 2. About Me Content */}
      <AboutMe />
      {/* 4. Projects content */}
      <div id='projects-section'  className='scroll-mt-40 flex flex-col w-full gap-5'>
        <p className='text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] tracking-[-0.05em] font-bold text-[--color-highlight] self-center ease-in-out duration-300'>code:projects</p>
        <div className=" mb-40 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
          <Link href="https://github.com/Quinchy/Pasabuy" target="_blank" passHref>
            <div className="cursor-pointer">
              <GlareCard className="flex flex-col items-center justify-center gap-10 px-5 w-80">
                <Image
                  src={peerToPeerDeliverySystem}
                  alt="Peer-to-Peer Delivery System"
                  width={300}
                  height={300}
                  placeholder="empty"
                  quality={100}
                  loading="lazy"
                  className="rounded-[0.75rem]"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[1.25rem] font-bold text-[--color-highlight]">➡ PasaBuy</p>
                  <p className="text-base text-[--color-main-light] ml-3">
                    A Peer-to-Peer Mobile Delivery App built using Android Studio.
                  </p>
                </div>
              </GlareCard>
            </div>
          </Link>
          <Link href="https://github.com/Quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System" target="_blank" passHref>
            <div className="cursor-pointer">
              <GlareCard className="flex flex-col items-center justify-center gap-10 px-5 w-80">
                <Image
                  src={appointmentSystem}
                  alt="Appointment System"
                  width={300}
                  height={300}
                  placeholder="empty"
                  quality={100}
                  loading="lazy"
                  className="rounded-[0.75rem]"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[1.25rem] font-bold text-[--color-highlight]">➡ DMJH Clinic Website</p>
                  <p className="text-base text-[--color-main-light] ml-3">
                    A User and Admin Website for managing appointment built using PHP Laravel.
                  </p>
                </div>
              </GlareCard>
            </div>
          </Link>
          <Link href="https://github.com/Quinchy/BankingSystem" target="_blank" passHref>
            <div className="cursor-pointer">
              <GlareCard className="flex flex-col items-center justify-center gap-10 px-5 w-80">
                <Image
                  src={bankingSystem}
                  alt="Banking System"
                  width={300}
                  height={300}
                  placeholder="empty"
                  quality={100}
                  loading="lazy"
                  className="rounded-[0.75rem]"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[1.25rem] font-bold text-[--color-highlight]">➡ OnlyFunds</p>
                  <p className="text-base text-[--color-main-light] ml-3">
                    A Mock-up Desktop Banking System built using C# Windows Form.
                  </p>
                </div>
              </GlareCard>
            </div>
          </Link>
        </div>
      </div>
      {/* 5. Footer */}
      <footer className='w-full'> 
        <div className='flex flex-row items-center justify-center gap-[2rem] sm:gap-[5rem] md:gap-[8rem] lg:gap-[16rem] mb-10 pt-10 text-[--color-main-light] border-t border-[--color-main-light-opacity2]'>
          {/* Links */}
          <div className='flex flex-row items-center gap-0 md:gap-3 mt-2'>
            <Link href="https://github.com/QuinchY" target='_blank' passHref>
              <div className='cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500'>
                <GitHubIcon />
              </div>
            </Link>
            <Link href="https://linkedin.com/in/cyril-james-de-guzman" target='_blank' passHref>
              <div className='cursor-pointer rounded-lg p-3 hover:bg-[--color-main-light-opacity] hover:brightness-125 ease-in-out duration-500'>
                <LinkedInIcon />
              </div>
            </Link>
          </div>
          {/* Copyright */}
          <div className='flex flex-col items-end'>
            <p className='text-[0.65rem] min-[520px]:text-[0.75rem] sm:text-[0.85rem] text-right ease-in-out duration-300'>© 2024 Cyril James De Guzman. All Rights Reserved.</p>
            <p className='text-[0.65rem] min-[520px]:text-[0.75rem] sm:text-[0.85rem] text-right ease-in-out duration-300'>Made using Next JS, with Aceternity UI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Quinch