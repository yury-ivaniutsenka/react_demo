import React from 'react';
import Block from "../../Block";

export default ({count, scale = 1}) =>
	<Block width={`${40 * scale}px`} height={`${40 * scale}px`} justify="center" align="center">
		<svg height={`${24 * scale}px`} width={`${20 * scale}px`} version="1.1" viewBox="0 0 20 24">
			<defs/>
			<g id="client-part" fill="none" stroke="none" strokeWidth="1">
				<g id="IPhone.-History" fill="#F5A623" transform="translate(-279.000000, -19.000000)">
					<g id="mobile-user" transform="translate(279.000000, 19.000000)">
						<path id="Shape"
							  d="M20,18.9477551 L19.919708,19.0457143 C17.2749392,22.2391837 13.7518248,24 10,24 C6.24817518,24 2.72506083,22.2391837 0.0802919708,19.0457143 L0,18.9477551 L0.0194647202,18.8228571 C0.530413625,15.4677551 2.27250608,12.7738776 4.92214112,11.2334694 L5.10948905,11.1232653 L5.26034063,11.282449 C6.51094891,12.604898 8.1946472,13.3322449 10,13.3322449 C11.8053528,13.3322449 13.4890511,12.604898 14.7396594,11.282449 L14.8905109,11.1232653 L15.0778589,11.2334694 C17.7274939,12.7738776 19.4695864,15.4677551 19.9805353,18.8228571 L20,18.9477551 Z M10,11.9853061 C13.2822384,11.9853061 15.9537713,9.29632653 15.9537713,5.99265306 C15.9537713,2.68897959 13.2822384,0 10,0 C6.71776156,0 4.04622871,2.68897959 4.04622871,5.99265306 C4.04622871,9.29632653 6.71776156,11.9853061 10,11.9853061 Z"/>
					</g>
				</g>
			</g>
		</svg>
	</Block>