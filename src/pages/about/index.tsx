import AboutSection from '@/components/AboutSection';
import { PageTitle } from '@/components/PageTitle';
import { RectBackground } from '@/components/RectBackground';
import WORKED_LIST from '@/constants/worked';
import { WorkedInfo } from '@/models/worked';
import { formatDate } from '@/utils/helpers/common';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const getWorkYears = (date: string) => {
  return new Date().getFullYear() - new Date(date).getFullYear();
};

export default function About() {
  return (
    <div className='layout'>
      <RectBackground className='rect-bg--fixed' />
      <PageTitle title='About' />

      <AboutSection title='Mia Hsu' num={1}>
        <div className='about-hero'>
          <div className='about-hero__bio'>
            <div className='about-hero__bio-list'>
              <ul className='list'>
                <li className='list__item list__item--yellow'>
                  {getWorkYears('2020')} years+ Frontend Developer
                </li>
                <li className='list__item list__item--yellow'>
                  2 years Web Designer
                </li>
              </ul>
            </div>
            <div className='about-hero__bio-text'>
              <div>嗨！我是 Mia</div>
              <div>
                我是一位擁有豐富經驗的前端工程師，具 UI/UX
                設計經驗可從使用者體驗與程式開發兩種面向規劃程式架構，致力打造符合使用者需求且具可靠性、可用性和可維護性的應用程式。
              </div>
              <div>
                主要從事產業為銀行、保險、財金等科技領域，前端三大框架皆有實際經驗能夠獨立開發與解決問題，樂於嘗試分享新技術與工具，將所學運用於工作中提升工作的效率與品質。
              </div>
            </div>
          </div>
          <div className='about-hero__portrait'>
            <div className='about-hero__portrait-inner'>
              <div className='about-hero__portrait-frame'>
                <Image
                  className='about-hero__portrait-img'
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
        className='about-section--worked'
      >
        <div className='worked__body'>
          <Tab.Group>
            <Tab.List className='worked__tab-list'>
              {WORKED_LIST.map((work, idx) => (
                <Tab
                  className={({ selected }) =>
                    clsx('worked__tab', selected && 'worked__tab--active')
                  }
                  key={idx}
                >
                  {work.company}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='worked__panels'>
              {WORKED_LIST.map((item: WorkedInfo) => (
                <Tab.Panel key={item.company}>
                  <div className='worked__panel-header'>
                    <div className='worked__panel-title'>
                      {item.jobTitle}
                      <a
                        className='worked__panel-company-link'
                        href={item.companyUrl}
                        target='_blank'
                      >
                        @ {item.company}
                      </a>
                    </div>
                    <div className='worked__panel-date'>
                      {formatDate(item.startDate)} - {formatDate(item.endDate)}
                    </div>
                  </div>
                  <ul>
                    {item.jobDesc.map((post) => (
                      <li
                        key={post}
                        className='list__item list__item--outline list__item--colorful list__item--small'
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

      <div className='section section--cta'>
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
