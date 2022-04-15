interface FileType {
  type?: string;
  url?: string;
  thumbUrl?: string;
  name?: string;
  size?: number;
}
declare const isImage: (file: FileType) => boolean;
export default isImage;
