/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-10-22 23:14:19
 * @LastEditTime: 2022-10-23 11:36:15
 */
interface ImageInsertConfig {
  type?: 'inline' | 'block'
}

interface ImageResizeOption {
  icon?: 'small' | 'medium' | 'large' | 'original',
  label?: string,
  name?: string,
  value?: string,
}

interface ImageStyleOptionDefinition {
  className?: string,
  icon?: string,
  isDefault?: boolean,
  modelElements?: [ 'imageBlock' ] | [ 'imageInline' ] | [ 'imageInline', 'imageBlock' ],
  name?: string,
  title?: string
}

interface ImageStyleConfig {
  options?: ImageStyleOptionDefinition[]
}

interface ImageUploadConfig {
  /** 上传图片的类型，默认值[ 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff' ] */
  types: string[],
}

type ImageToolbarItemName = 'imageStyle:wrapText' | 'imageStyle:breakText' | 'imageStyle:inline' | 'imageStyle:block' | 'imageStyle:side' | 'imageStyle:align-left' | 'imageStyle:align-right' | 'imageStyle:align-block-left' | 'imageStyle:align-block-right' |'imageTextAlternative' | 'toggleImageCaption'
| 'resizeImage:25'| 'resizeImage:50' | 'resizeImage:75' | 'resizeImage:original'
| '|';

export interface ImageConfig {
  insert?: ImageInsertConfig,
  resizeOptions?: ImageResizeOption[],
  toolbar?: ImageToolbarItemName[],
  resizeUnit?: 'px' | '%',
  styles?: ImageStyleConfig,
  upload?: ImageUploadConfig,
}
