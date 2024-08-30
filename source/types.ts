interface ImageType {
  src?: string;
  alt?: string;
}
interface ButtonType {
  title?: string;
  textcolor?: string;
  bgcolor?: string;
  link?: string;
}
interface Text extends ButtonType {
  color?: string;
}
interface Logo 
{
  logo?:ImageType
}
export type { Text, ImageType, ButtonType,Logo };
