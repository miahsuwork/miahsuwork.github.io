/**
 * 環境資訊
 */
export interface IEnvironment {
  /** 使用的 API 中台位置 */
  apiUrl: string;

  /** API 等待逾期時間 ms */
  apiTimeout: number;
}
