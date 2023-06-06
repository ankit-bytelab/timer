import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Play = (props: SvgProps) => (
  <Svg width={26} height={26} viewBox="0 0 96 96" {...props}>
    <Path
      d="M19.5 9.4c-5.3 2.3-5.5 3.8-5.5 38.7 0 35.4.2 36.7 6.1 38.8 2.6.9 3.9.7 7.3-.8 8.3-3.7 56.9-31.2 58.2-32.9 2-2.5 1.7-8.5-.4-10.8-2-2.1-57.2-32.8-60.7-33.8-1.1-.3-3.4.1-5 .8z"
      fill="#8A2BE2"
    />
  </Svg>
);
export default Play;
