// @flow
import React from 'react';

type IconProps = {
	scale: number,
}

export default ({scale = 1, fill='#FFFFFF', opacity=0.3}) =>
	<svg height={`${67 * scale}px`} width={`${83 * scale}px`} version="1.1" viewBox="0 0 83 67">
		<defs>
			<rect height="46" id="rect-1" width="46" x="0" y="0"/>
		</defs>
		<g id="client-part" fill="none" stroke="none" strokeWidth="1">
			<g id="Desktop-HD.-History" transform="translate(-701.000000, -297.000000)">
				<g id="navigation" transform="translate(552.000000, 292.000000)">
					<g id="history-icon" transform="translate(147.000000, 0.000000)">
						<text id="History" fill="#FFFFFF" fontFamily="OpenSans-Light, Open Sans" fontSize="15">
							<tspan x="2.14868164" y="67">History</tspan>
						</text>
						<g id="Bitmap">
							<rect height="46" width="46" x="0" y="0"/>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>