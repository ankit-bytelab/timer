import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Pause = (props: SvgProps) => (
  <Svg width={26} height={26} viewBox="0 0 90 90" {...props}>
    <Path
      d="M20 14c-1.9 1.9-2 3.3-2 31s.1 29.1 2 31c1.5 1.5 3.3 2 7 2s5.5-.5 7-2c1.9-1.9 2-3.3 2-31s-.1-29.1-2-31c-1.5-1.5-3.3-2-7-2s-5.5.5-7 2zM56 14c-1.9 1.9-2 3.3-2 31s.1 29.1 2 31c1.5 1.5 3.3 2 7 2s5.5-.5 7-2c1.9-1.9 2-3.3 2-31s-.1-29.1-2-31c-1.5-1.5-3.3-2-7-2s-5.5.5-7 2z"
      fill="#8A2BE2"
    />
  </Svg>
);
export default Pause;
