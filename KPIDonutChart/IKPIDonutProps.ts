import {IKPIDonutCenterBlockProps} from './IKPIDonutCenterBlockProps';

export interface IKPIDonutProps {
  data: any;
  size: number;
  innerSize: number;   
  colors: string[];
  showLabels?: boolean;
  borderWidth?: number;
  legendEnabled?: boolean;
  centerBlockData?: IKPIDonutCenterBlockProps;
}

  