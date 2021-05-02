import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 9.293a.998.998 0 01.776-.29.47.47 0 01.28.06c.13.048.253.125.358.23L16 14.586l5.293-5.293a1 1 0 011.414 1.414L17.414 16l5.293 5.293c.107.106.184.23.232.363a.463.463 0 01.059.276.997.997 0 01-1.066 1.066.466.466 0 01-.28-.06.996.996 0 01-.36-.23L16 17.413l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 16l-5.293-5.293a.996.996 0 01-.232-.363.464.464 0 01-.059-.276.998.998 0 01.29-.775z"
        fill="#FFF"
      />
    </Svg>
  )
}

export default SvgComponent
