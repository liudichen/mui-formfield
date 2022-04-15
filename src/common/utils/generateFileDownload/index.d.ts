interface fileType extends Blob {
  name?: string;
}
declare const generateFileDownload: (fileBlob: fileType, fileName?: string | undefined) => void;
export default generateFileDownload;
