// Interfaces
export interface SelectedFile {
  /**
   * Holds converted base64 string of selected file
   * @type string
   */
  base64: string;
  /**
   * Selected file size
   * @type number
   */
  size: number;
  /**
   * Selected file type (extension)
   * @type string
   */
  type: string;
  /**
   * Selected file name
   * @type string
   */
  name: string;
}

// Types
export declare type UploadMode = 'file' | 'base64';

export declare type ImageFile =
  | 'image/*'
  | '.svg'
  | '.jpg'
  | '.png'
  | '.webp'
  | '.svgz'
  | '.jpeg'
  | '.bmp';

// Factories
export const createSelectedFile = (
  name: string,
  type: string,
  size: number,
  base64: string
): SelectedFile => ({ name, type, size, base64 });
