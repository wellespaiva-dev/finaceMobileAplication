import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgCreditCard(props) {
  return (
    <Svg
      height={512}
      viewBox="0 0 74 74"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M67 61H7a5.006 5.006 0 01-5-5V43h2v13a3 3 0 003 3h60a3 3 0 003-3V18a3 3 0 00-3-3H7a3 3 0 00-3 3v21H2V18a5.006 5.006 0 015-5h60a5.006 5.006 0 015 5v38a5.006 5.006 0 01-5 5z" />
      <Path d="M62 22h9v2h-9zM3 22h55v2H3zM3 31h68v2H3zM8 54h21v2H8zM8 49h11v2H8z" />
    </Svg>
  )
}

export default SvgCreditCard
