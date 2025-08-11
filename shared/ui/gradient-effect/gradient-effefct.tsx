import st from './gradient-effefct.module.scss';
type CssProps = React.CSSProperties & { [key: string]: string | number };

type GradientEffefctProps =
    | {
          inset: boolean;
          top?: never;
          left?: never;
          right?: never;
          bottom?: never;
          width?: never;
          height?: never;
          colorPosition?: [number, number];
          deg?: number;
          blur?: number;
      }
    | {
          inset?: never;
          top?: string;
          left?: string;
          right?: string;
          bottom?: string;
          width?: string;
          height?: string;
          colorPosition?: [number, number];
          deg?: number;
          blur?: number;
      };

export default function GradientEffefct({
    inset,
    top,
    left,
    right,
    bottom,
    width,
    height,
    colorPosition = [0, 100],
    deg = 90,
    blur = 60,
}: GradientEffefctProps) {
    const gradientString = `linear-gradient(${deg}deg, #b98756e6 ${colorPosition[0]}%, rgba(83, 61, 39, 0) ${colorPosition[1]}%)`;
    const styles: CssProps = {
        '--gradient': gradientString,
        '--blur': `${blur}px`,
        '--width': width ?? 'auto',
        '--height': height ?? 'auto',
    };
    if (inset) {
        ['--top', '--left', '--right', '--bottom'].forEach((key) => {
            styles[key] = '0px';
        });
    } else {
        styles['--top'] = top ?? 'auto';
        styles['--left'] = left ?? 'auto';
        styles['--right'] = right ?? 'auto';
        styles['--bottom'] = bottom ?? 'auto';
    }
    return <div className={st.gradient} style={styles} />;
}
