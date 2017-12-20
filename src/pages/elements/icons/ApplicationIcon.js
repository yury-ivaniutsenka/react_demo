// @flow
import React from 'react';

type IconProps = {
	scale: number,
}

export default ({scale = 1, fill='#FFFFFF', opacity=0.3}) =>
	<svg height={65*scale} width={81*scale} version="1.1" viewBox="0 0 81 65">
		<defs/>
		<g id="client-part" fill="none" opacity={opacity} stroke="none" strokeWidth="1">
			<g id="Desktop-HD.-History" transform="translate(-552.000000, -297.000000)">
				<g id="navigation" transform="translate(552.000000, 292.000000)">
					<g id="application-icon" transform="translate(0.000000, 5.000000)">
						<text id="Applications" fill={fill} fontFamily="OpenSans-Light, Open Sans" fontSize="15">
							<tspan x="0.123535156" y="61">Applications</tspan>
						</text>
						<g id="applications-icon-copy" transform="translate(16.000000, 0.000000)">
							<rect height="16" id="Rectangle-3-Copy-2" width="16" fill={fill} fillOpacity="0.5" opacity="0.75" x="27" y="22"/>
							<rect height="25" id="Rectangle-3-Copy" width="25" fill="#ACBBD6" x="14" y="10"/>
							<rect height="30" id="Rectangle-3" width="30" fill={fill} x="0" y="0"/>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
