/**
 * @description 生成文件下载
 * @param {Blob} fileBlob File对象
 * @param {string?} fileName 下载文件的默认下载名称
 */
const generateFileDownload = (fileBlob, fileName) => {
  if (!fileBlob) return;
  const href = URL.createObjectURL(fileBlob);
  const a = document.createElement('a');
  a.href = href;
  a.download = fileName || fileBlob?.name || '文件';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(href);
};

export default generateFileDownload;
