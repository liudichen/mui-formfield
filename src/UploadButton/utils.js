const updateFileList = (newfile, fileList) => {
  const newFileList = Array.isArray(newfile) ? newfile : (newfile ? [ newfile ] : []);
  if (!newFileList.length) return null;
  const nextFileList = [ ...fileList ];
  for (let i = 0; i < newFileList.length; i++) {
    const file = newFileList[i];
    const fileIndex = nextFileList.findIndex((item) => isSameFile(item, file));
    if (fileIndex === -1) {
      nextFileList.push(file);
    } else {
      nextFileList[fileIndex] = file;
    }
  }
  return nextFileList;
};

/**
 * @description 移除特定文件，返回移除该文件后的新的文件列表
 * @param {File} file 待移除文件
 * @param {File[]} fileList 当前文件列表
 * @return {File[] | null} 新的文件列表,如果没有变化的返回null
 */
const removeFileItem = (file, fileList) => {
  const newFileList = fileList.filter((item) => !isSameFile(item, file));
  if (newFileList.length === fileList.length) {
    return null;
  }
  return newFileList;
};

export {
  updateFileList,
  removeFileItem,
};