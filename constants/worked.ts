import { WorkedInfo } from '@/models/worked';

const WORKED_LIST: WorkedInfo[] = [
  {
    company: 'TPISoftware',
    companyUrl: 'https://www.tpisoftware.com/',
    endDate: new Date().toISOString().slice(0, 7).replace(/-/g, ''),
    jobDesc: [
      '網站、行動裝置、 MobileWeb 前端程式撰寫（Angular、Vue）',
      '協助維護 Hybrid app 網銀專案',
      '與 BackEnd 討論 API 規格並進行串接、UT 測試',
      '協助評估前端功能實作可行性，產出系統分析文件、系統操作手冊',
      '協助 UI/UX 在介面設計過程中，評估元件共用性、實作可行性及維護性',
      '建立前端模板(Angular, React, 切版)並定義規範統一產出品質',
    ],
    jobTitle: 'Sr. Engineer',
    startDate: '202003',
  },
  {
    company: 'TrendForce',
    companyUrl: 'https://www.tpisoftware.com/',
    endDate: '202002',
    jobDesc: [
      '與後端(PHP)協作開發與維護系統',
      '一頁式研討會 RWD 網站建置',
      '需求訪談制定網站功能架構與及 UI/UX 設計與切版',
      '協助 E2E 測試',
      '企業識別、Banner、資訊圖表...等平面設計',
    ],
    jobTitle: 'Web Designer',
    startDate: '201802',
  },
];

export default WORKED_LIST;
