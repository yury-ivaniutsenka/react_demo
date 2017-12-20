import React from 'react';
import Block from "../../Block";


export default ({count, scale = 1}) =>
	<Block width={`${40 * scale}px`} height={`${40 * scale}px`} justify="center" align="center">
		<svg height={`${29 * scale}px`} width={`${36 * scale}px`} version="1.1" viewBox="0 0 36 29">
			<defs/>
			<g id="client-part" fill="none" stroke="none" strokeWidth="1">
				<g id="IPhone.-History" transform="translate(-319.000000, -14.000000)">
					<g id="mobile-notification" transform="translate(319.000000, 14.000000)">
						<g id="notification-icon" fill="#F5A623" transform="translate(0.000000, 4.000000)">
							<g id="notification">
								<path id="Shape"
									  d="M11.6538029,25 C13.3695885,25 14.845841,24.0233321 15.5384039,22.611465 L7.76920195,22.611465 C8.45916124,24.0182716 9.93541375,25 11.6538029,25 Z"/>
								<path id="Shape"
									  d="M22.0866909,18.9344926 L22.0763009,18.9344926 C21.0217088,18.6442893 20.2476486,17.7049471 20.2476486,16.5823185 C20.2476486,16.564499 20.2528436,16.5466795 20.2528436,16.5314056 L20.2476486,16.5314056 L20.2476486,9.91782512 L20.2320635,9.91782512 C20.0866025,5.75315318 16.966984,2.33944592 12.8862841,1.64193973 L12.8862841,1.50447501 C12.8862841,0.674595395 12.197942,0 11.3511513,0 C10.5043606,0 9.81601847,0.674595395 9.81601847,1.50447501 L9.81601847,1.64193973 C5.73791606,2.33944592 2.61570008,5.75315318 2.4702391,9.91782512 L2.454654,9.91782512 L2.454654,16.52886 L2.44686145,16.52886 C2.44945896,16.5746816 2.45984903,16.6179575 2.45984903,16.6663247 C2.45984903,17.6947645 1.83124981,18.5806482 0.927313732,18.9726773 C0.397420171,19.1075964 0,19.5759947 0,20.1360361 C0,20.7979033 0.550673701,21.3375796 1.22602824,21.3375796 L22.0814959,21.3375796 C22.7568504,21.3375796 23.3075241,20.7979033 23.3075241,20.1360361 C23.3153167,19.4741689 22.764643,18.9344926 22.0866909,18.9344926 Z"/>
							</g>
						</g>
						{
							count > 0 &&
							<g id="counter" transform="translate(22.000000, 0.000000)">
								<circle id="Oval-2" cx="7" cy="7" fill="#F5A623" r="7"/>
								<text id="3" fill="#FFFFFF" fontFamily="OpenSans-Bold, Open Sans" fontSize="10.5">
									<tspan x="4.3532959" y="11">{count}</tspan>
								</text>
							</g>
						}
					</g>
				</g>
			</g>
		</svg>
	</Block>