import { PageTitle } from '@/components/PageTitle';
import { RectBackground } from '@/components/RectBackground';
import WORKED_LIST from '@/constants/worked';
import { WorkedInfo } from '@/models/worked';
import { formatDate } from '@/utils/helpers/common';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import AboutSection from './components/AboutSection';

const getWorkYears = (date: string) => {
  return new Date().getFullYear() - new Date(date).getFullYear();
};

export default function About() {
  return (
    <div className='layout'>
      <RectBackground className='fixed top-0 left-0 -z-10 overflow-hidden' />
      <PageTitle title='About' />

      <AboutSection title='Mia Hsu' num={1} className='pt-[140px]'>
        <div className='flex flex-col-reverse md:flex-row'>
          <div className='md:w-[40vw] md:ml-16 ml-0'>
            <div className='mb-5'>
              <ul className='list'>
                <li className='list__item list__item--yellow'>
                  {getWorkYears('2020')} years+ Frontend Developer
                </li>
                <li className='list__item list__item--yellow'>
                  2 years Web Designer
                </li>
              </ul>
            </div>
            <div className='font-light leading-[1.8] text-justify'>
              <div className='mb-1'>嗨！我是 Mia</div>
              <div className='mb-1'>
                我是一位擁有豐富經驗的前端工程師，具 UI/UX
                設計經驗可從使用者體驗與程式開發兩種面向規劃程式架構，致力打造符合使用者需求且具可靠性、可用性和可維護性的應用程式。
              </div>
              <div className='mb-1'>
                主要從事產業為銀行、保險、財金等科技領域，前端三大框架皆有實際經驗能夠獨立開發與解決問題，樂於嘗試分享新技術與工具，將所學運用於工作中提升工作的效率與品質。
              </div>
            </div>
          </div>
          <div className='flex-1 pl-0 md:pl-16 mb-10 md:mb-0'>
            <div className='flex justify-center'>
              <div className='rounded-lg overflow-hidden '>
                <Image
                  className='block w-full h-auto'
                  src='/images/aboutImg.jpg'
                  alt=''
                  width='0'
                  height='0'
                  sizes='100vw'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </AboutSection>

      <AboutSection
        title="Where I've Worked"
        num={2}
        className='md:ml-[120px] lg:ml-[240px]'
      >
        <div className='md:flex md:ml-16'>
          <Tab.Group>
            <Tab.List className='flex md:flex-col mr-10'>
              {WORKED_LIST.map((work, idx) => (
                <Tab
                  className={({ selected }) => `
                      md:mb-0 md:m-2 
                      mb-5 mr-2 px-2 outline-none hover:text-sky-600
                      ${
                        selected
                          ? 'md:border-l md:border-b-0 border-b border-sky-600  text-sky-600'
                          : ''
                      }`}
                  key={idx}
                >
                  {work.company}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='mt-2'>
              {WORKED_LIST.map((item: WorkedInfo) => (
                <Tab.Panel key={item.company}>
                  <div className='mb-4 min-h-14'>
                    <div className='font-medium text-xl'>
                      {item.jobTitle}
                      <a
                        className='text-sky-600 font-light ml-2 text-sm'
                        href={item.companyUrl}
                        target='_blank'
                      >
                        @ {item.company}
                      </a>
                    </div>
                    <div className='text-xs mt-1'>
                      {formatDate(item.startDate)} - {formatDate(item.endDate)}
                    </div>
                  </div>
                  <ul>
                    {item.jobDesc.map((post) => (
                      <li
                        key={post}
                        className='list__item font-light list__item--outline list__item--colorful text-sm'
                      >
                        <div>{post}</div>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </AboutSection>

      {/* <div className='section ml-[60px]'>
        <div className='section__title'>
          <span className='section__title-num'>03</span>
          <span className='section__title-text'>Skills I have</span>
        </div>
      </div> */}

      <div className='section columns-2 gap-10 justify-center'>
        <Link
          href='https://www.cakeresume.com/s--LwU5PNF3o_Q8fHXszw1tCg--/miahsuwork'
          target='_blank'
          className='btn btn'
        >
          Download Resume
        </Link>
        <Link href='/works' className='btn btn--outline'>
          Look My Project
        </Link>
      </div>
    </div>
  );
}
