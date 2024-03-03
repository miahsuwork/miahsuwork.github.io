import { PageTitle } from '@/components/PageTitle';
import Tabs from '@/components/Tabs';
import { WorkTypeEnum } from '@/enums/common';
import { WorkType } from '@/models/workType';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import GraphicProject from './components/GraphicProject';
import WebProject from './components/WebProject';

export default function Works() {
  const workRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<WorkType[]>([
    {
      id: WorkTypeEnum.WEB,
      name: 'Front-end Development / UIUX',
      isActive: true,
      desc: '網站開發，部分專案包含UI/UX設計一起獨立完成',
    },
    {
      id: WorkTypeEnum.GRAPHIC,
      name: 'Graphic Design',
      isActive: false,
      desc: '資訊圖表、Banner、企業識別設計',
    },
  ]);

  const [activeType, setActiveType] = useState<WorkTypeEnum | null>(null);

  const { contextSafe } = useGSAP({ scope: workRef });
  const onShowDesc = contextSafe(() => {
    gsap.fromTo('.works__desc', { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  const changeActive = (id: number) => {
    if (id === activeType) return;
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      })
    );
    onShowDesc();
    setActiveType(id);
  };

  useEffect(() => {
    list.forEach((item) => {
      if (item.isActive) {
        setActiveType(item.id);
      }
    });
  }, [list]);

  return (
    <div className='relative' ref={workRef}>
      <div className='layout'>
        <PageTitle title='Works' />
        <div>
          <Tabs
            list={list}
            toggleActive={(id) => {
              changeActive(id);
            }}
          />
        </div>
        <div className='flex flex-wrap lg:justify-end lg:absolute lg:right-0 w-full'>
          <div className='works__header'>
            <div>
              <div className='works__decorate'>
                <div className='works__decorate-line my-[15px] w-full h-[1px]'></div>
              </div>
            </div>
            <div className='works__desc'>
              <span>
                {list.map((item) =>
                  item.isActive ? <div key={item.id}>{item.desc}</div> : null
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='works__list'>
        {activeType === WorkTypeEnum.WEB && <WebProject />}
        {activeType === WorkTypeEnum.GRAPHIC && <GraphicProject />}
      </div>
    </div>
  );
}
