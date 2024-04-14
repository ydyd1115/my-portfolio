export interface Portfolio = {
  id: number;
  title: string;
  outline: string;
  detail: string;
  period: string;
  url?: string;
  top_img?: {
    url: string;
    height: number;
    width: number;
  };
  img_others?: {
    url: string;
    height: number;
    width: number;
  }[];
};