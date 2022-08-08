interface FileLike {
  name?: string;
  size?: number;
  lastModified?: any;
  type?: string;
}
declare const updateFileList: (newfile: FileLike, fileList: FileLike[]) => FileLike[] | null;
declare const removeFileItem: (file: FileLike, fileList: FileLike[]) => FileLike[] | null;
export { updateFileList, removeFileItem };
