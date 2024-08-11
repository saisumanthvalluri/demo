import React from "react";
import { IoChevronBack } from "react-icons/io5";

import "./index.css";
import { walletAPT, walletServices } from "../../../Config/constants";

const Wallet = ({ back }) => {
	return (
		<div className="wallet-bg">
			{back && (
				<button onClick={back} className="back-btn">
					<IoChevronBack /> Back
				</button>
			)}
			<div className="top">
				<div className="balance-withdraw">
					<p>Wallet Balance : ₹ 500 </p>
					<button>Withdraw</button>
				</div>
				<img src="/profile/wallet/wallet-bg.svg" alt="wallet-bg" />
				<ul className="wallet-apt">
					{walletAPT.map((item) => (
						<li>
							<item.icon className="icon"></item.icon>
							<span>{item.name}</span>
						</li>
					))}
				</ul>
			</div>
			<span className="sec-title">Services</span>
			<ul className="wallet-services">
				{walletServices.map((item) => (
					<li>
						<div>
							<item.icon className="icon"></item.icon>
						</div>
						<span>{item.name}</span>
					</li>
				))}
			</ul>
			<span className="sec-title">Transactions</span>
			<div className="transactions">
				<span>Coming Soon!</span>
			</div>
		</div>
	);
};

export default Wallet;
