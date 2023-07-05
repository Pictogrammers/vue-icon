declare module '@jamescoyle/vue-icon' {
  import { DefineComponent } from 'vue';

  interface SvgIconProps {
    type?: string;
    path: string;
    size?: string | number;
    viewbox?: string;
    flip?: 'horizontal' | 'vertical' | 'both' | 'none';
    rotate?: number;
  }

  const SvgIcon: DefineComponent<SvgIconProps>;
  export default SvgIcon;
}
