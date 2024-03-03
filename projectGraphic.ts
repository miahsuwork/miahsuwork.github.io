// graphic
import { GraphicEnum } from '@/enums/common';
import { Graphic } from '@/models/Graph';
import informationAI from '/public/images/works/graphics/201803_AI_01.jpeg';
import informationAI02 from '/public/images/works/graphics/201803_AI_02.jpeg';
import informationAI03 from '/public/images/works/graphics/201803_AI_03.jpeg';
import informationAI04 from '/public/images/works/graphics/201803_AI_04.jpeg';
import informationAI05 from '/public/images/works/graphics/201803_AI_05.jpeg';
import information5G from '/public/images/works/graphics/201805_5G_01.jpeg';
import information5G02 from '/public/images/works/graphics/201805_5G_02.jpeg';
import information5G03 from '/public/images/works/graphics/201805_5G_03.jpeg';
import energyTrendDM from '/public/images/works/graphics/201806_EnergyTrend_DM.jpg';
import triRollUpBanner from '/public/images/works/graphics/201806_TRI_rollUpBanner.jpg';
import triBook from '/public/images/works/graphics/201901_TRI_book.jpg';
import stockFilter from '/public/images/works/graphics/201902_stockFilter.png';
import energyTrendBook from '/public/images/works/graphics/201903_EnergyTrend_SNEC2019.jpg';
import informationHPC from '/public/images/works/graphics/201905_HPC_01.jpeg';
import informationHPC02 from '/public/images/works/graphics/201905_HPC_02.jpeg';
import informationHPC03 from '/public/images/works/graphics/201905_HPC_03.jpeg';
import informationHPC04 from '/public/images/works/graphics/201905_HPC_04.jpeg';
import informationHPC05 from '/public/images/works/graphics/201905_HPC_05.jpeg';
import tfCis01 from '/public/images/works/graphics/201908_trendForce_CIS01.jpg';
import tfCis02 from '/public/images/works/graphics/201908_trendForce_CIS02.jpg';
import tfCis03 from '/public/images/works/graphics/201908_trendForce_CIS03.jpg';
import tfCis04 from '/public/images/works/graphics/201908_trendForce_CIS04.jpg';
import tnHotNews from '/public/images/works/graphics/201910_techNews_hotNews.png';
import tnBanner01 from '/public/images/works/graphics/202001_techNews_banner01.jpg';
import tnBanner02 from '/public/images/works/graphics/202001_techNews_banner02.jpg';
import wordCampBanner01 from '/public/images/works/graphics/202008_wordCamp_banner01.jpg';
import wordCampBanner02 from '/public/images/works/graphics/202008_wordCamp_banner02.jpg';
import wordCampBanner03 from '/public/images/works/graphics/202008_wordCamp_banner03.jpg';
import apCis01 from '/public/images/works/graphics/202204_a&p_CIS01.png';
import apCis02 from '/public/images/works/graphics/202204_a&p_CIS02.png';
import apCis03 from '/public/images/works/graphics/202204_a&p_CIS03.png';
import apCis04 from '/public/images/works/graphics/202204_a&p_CIS04.png';
import apCis05 from '/public/images/works/graphics/202204_a&p_CIS05.png';

export const GRAPHIC_LIST: Graphic[] = [
  {
    src: apCis01,
    subGraphs: [
      {
        src: apCis02,
      },
      {
        src: apCis03,
      },
      {
        src: apCis04,
      },
      {
        src: apCis05,
      },
    ],
    title: '商家識別設計',
    date: '202204',
    tags: [GraphicEnum.CIS],
  },
  {
    date: '202001',
    src: tnBanner02,
    tags: [GraphicEnum.BANNER],
    title: 'TechNews - 電子報宣傳',
  },
  {
    date: '202001',
    src: tnBanner01,
    tags: [GraphicEnum.BANNER],
    title: 'TechNews - 會員宣傳',
  },
  {
    date: '2019010',
    src: tnHotNews,
    tags: [GraphicEnum.BANNER],
    title: 'TechNews - 熱門話題單頁',
  },
  {
    date: '2019009',
    src: wordCampBanner03,
    tags: [GraphicEnum.BANNER],
    title: 'WordCamp2019 - 開賣宣傳',
  },
  {
    date: '201907',
    src: wordCampBanner02,
    tags: [GraphicEnum.BANNER],
    title: 'WordCamp2019 - 閃電講宣傳',
  },
  {
    date: '201906',
    src: wordCampBanner01,
    tags: [GraphicEnum.BANNER],
    title: 'WordCamp2019 - 旅遊指南',
  },
  {
    date: '201908',
    subGraphs: [
      {
        src: tfCis02,
      },
      {
        src: tfCis03,
      },
      {
        src: tfCis04,
      },
    ],
    src: tfCis01,
    tags: [GraphicEnum.CIS],
    title: 'TrendForce - 企業識別',
  },
  {
    date: '201905',
    subGraphs: [
      {
        src: informationHPC02,
      },
      {
        src: informationHPC03,
      },
      {
        src: informationHPC04,
      },
      {
        src: informationHPC05,
      },
    ],
    src: informationHPC,
    tags: [GraphicEnum.INFOGRAPHIC],
    title: '高效能運算',
    url: 'https://technews.tw/2019/05/22/about-hpc/',
  },
  {
    date: '201903',
    src: energyTrendBook,
    tags: [GraphicEnum.DM],
    title: 'EnergyTrend 雜誌設計',
  },
  {
    date: '201902',
    src: stockFilter,
    tags: [GraphicEnum.WEB],
    title: '股市圖表查詢系統',
  },
  {
    date: '201901',
    src: triBook,
    tags: [GraphicEnum.DM],
    title: 'TRI 專題報告書設計',
  },
  {
    date: '201806',
    desc: '根據資料設計出 icon',
    src: energyTrendDM,
    tags: [GraphicEnum.DM],
    title: 'EnergyTrend 廣告 DM',
  },
  {
    date: '201806',
    src: triRollUpBanner,
    tags: [GraphicEnum.POP],
    title: 'TRI 易拉展設計',
  },
  {
    date: '201805',
    desc: '在有限的時間內快速完成此資訊圖表製作',
    subGraphs: [
      {
        src: information5G02,
      },
      {
        src: information5G03,
      },
    ],
    src: information5G,
    tags: [GraphicEnum.INFOGRAPHIC],
    title: '5G AI 掀科技變革',
    url: 'https://technews.tw/2018/05/31/5g-ai-infographic/',
  },
  {
    date: '201803',
    desc: '與行銷及專案經理配合討論構想架構',
    subGraphs: [
      {
        src: informationAI02,
      },
      {
        src: informationAI03,
      },
      {
        src: informationAI04,
      },
      {
        src: informationAI05,
      },
    ],
    src: informationAI,
    tags: [GraphicEnum.INFOGRAPHIC],
    title: '3D 感測',
    url: 'https://technews.tw/2018/03/16/3d-sensing-infographic/',
  },
];

export default GRAPHIC_LIST;
