/**
 * 將 yyyymm 轉成 yyyy/mm 並且若為現在的時間則顯示為現在
 */
export const formatDate = (date: string) => {
  const currentMonth = new Date().toISOString().slice(0, 7).replace(/-/g, '');
  if (date === currentMonth) {
    return 'Present';
  }
  return `${date.slice(0, 4)}/${date.slice(4)}`;
};
