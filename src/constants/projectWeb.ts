import { WebTagEnum } from '@/enums/common';
import cbdc from '/public/images/works/webs/cbdc.png';
import ecover from '/public/images/works/webs/ecover.png';
import harvest from '/public/images/works/webs/harvest.png';
import near from '/public/images/works/webs/near.png';
import pmd from '/public/images/works/webs/pmd.png';
import richart from '/public/images/works/webs/richart.png';
import scb from '/public/images/works/webs/scb.png';
import seminar1 from '/public/images/works/webs/seminar1.png';
import seminar2 from '/public/images/works/webs/seminar2.png';
import seminar3 from '/public/images/works/webs/seminar3.png';
import seminar4 from '/public/images/works/webs/seminar4.png';
import tnAd from '/public/images/works/webs/tn_ad.png';
import tnMember from '/public/images/works/webs/tn_member.jpg';

const WEB_LIST = [
  {
    endTime: new Date().toISOString().slice(0, 7).replace(/-/g, ''),
    isShowLanding: true,
    slideDesc:
      '全方位網路銀行 隨時隨地轉帳、繳費、投資、換匯以及即時交易資訊等服務。',
    src: scb,
    startTime: '202206',
    tags: [WebTagEnum.HYBRID, WebTagEnum.VUE],
    title: '渣打行動銀行',
    url: 'https://ebank.standardchartered.com.tw/scb/public/login?lang=tw',
  },
  {
    endTime: '202105',
    isShowLanding: true,
    slideDesc: '提供便利安全的線上交易服務',
    src: richart,
    startTime: '202103',
    tags: [WebTagEnum.RWD, WebTagEnum.JQUERY],
    title: 'RichChart 會員中心',
    url: 'https://richart.tw/TSDIB_RichartWeb/RC00/RC000000',
  },
  {
    endTime: '202304',
    isShowLanding: true,
    slideDesc: '線上快速投保、保費試算包含車險、旅平險、住火險等服務',
    src: ecover,
    startTime: '202212',
    tags: [WebTagEnum.ANGULAR],
    title: 'eCover 網路投保',
    url: 'https://www.ecover.com.tw/',
  },
  {
    endTime: '202205',
    isShowLanding: false,
    slideDesc: '開發 CBDC 監控監理功能模組相關系統項目',
    src: cbdc,
    startTime: '202105',
    tags: [WebTagEnum.ANGULAR],
    title: 'CBDC 監控監理後台',
    url: 'https://www.cbc.gov.tw/tw/dl-177989-65adf5960c2b4e26902bd881570e68c8.html',
  },
  {
    endTime: '202101',
    isShowLanding: true,
    slideDesc:
      '360 度瞭解個人的績效，客製化題目、進度查詢、圖表化等讓您的績效評估更加完整。',
    src: pmd,
    startTime: '202005',
    tags: [WebTagEnum.RWD, WebTagEnum.JQUERY, WebTagEnum.VUE],
    title: '全方位績效評估系統',
  },
  {
    endTime: '202301',
    isShowLanding: true,
    slideDesc: '使用 WordPress 獨立開發，包含網站上線部署、SEO 優化等服務',
    src: harvest,
    startTime: '202210',
    tags: [WebTagEnum.WORDPRESS, WebTagEnum.RWD],
    title: '耘和牙醫診所',
    url: 'https://harvest-dental-clinic.com/',
  },
  {
    endTime: '202011',
    isShowLanding: true,
    slideDesc: '具複雜的選單系統並依據無障礙網頁規劃開發',
    src: near,
    startTime: '202005',
    tags: [WebTagEnum.JQUERY, WebTagEnum.RWD],
    title: '檔案機關目錄查詢',
    url: 'https://near.archives.gov.tw/home',
  },
  {
    endTime: '201912',
    isShowLanding: false,
    slideDesc: '與後端 PHP 合作，UIUX 規劃、切版製作獨立完成',
    src: tnMember,
    startTime: '201909',
    tags: [WebTagEnum.JQUERY, WebTagEnum.RWD],
    title: 'TechNews - 會員中心',
    url: 'https://member.technews.tw/login',
  },
  {
    endTime: '201805',
    isShowLanding: false,
    slideDesc: '廣告幻燈片效果 + 主視覺背景切換效果',
    src: tnAd,
    startTime: '201804',
    tags: [WebTagEnum.JQUERY, WebTagEnum.RWD],
    title: 'TechNews - 廣告版位宣傳',
    url: 'https://miahsuwork.github.io/advertising/index.html#services',
  },
];

const SEMINAR_LIST = [
  {
    src: seminar1,
    url: 'https://webinar.trendforce.com/automobile2019-ch/index.html',
  },
  {
    src: seminar2,
    url: 'https://seminar.trendforce.com/Automationforum/2019/TW/index/',
  },
  {
    src: seminar3,
    url: 'https://webinar.trendforce.com/smartphone_trend_2019_webinar-ch/index.html',
  },
  {
    src: seminar4,
    url: 'https://seminar.trendforce.com/Compuforum/2018/TW/index/',
  },
];

export { SEMINAR_LIST, WEB_LIST };
