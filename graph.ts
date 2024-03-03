import { GraphicEnum } from '@/enums/common';
import { StaticImageData } from 'next/image';

export interface SubGraphic {
  src: StaticImageData;
}

export interface Graphic {
  /**
   * 日期(yyyyMM)
   */
  date: string;
  desc?: string;
  src: StaticImageData;
  subGraphs?: SubGraphic[];
  tags: GraphicEnum[];
  title: string;
  url?: string;
}
