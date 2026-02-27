interface Referral {
	code: string;
	bonus: string;
	title: string;
	description: string;
	usersCount: number;
}

interface Step {
	number: number;
	title: string;
	description: string;
}

export interface SiteConfig {
	referral: Referral;
	steps: Step[];
}

/**
 * Configure Your Referral Code and Bonus Details Here
 */

const referralCode = "AM397158";
const referralBonus = "₱150";

export const siteData: SiteConfig = {
	referral: {
		code: referralCode,
		bonus: referralBonus,
		title: `MariBank Referral Code: ${referralBonus} Bonus`,
		description: `Get ${referralBonus} free bonus with MariBank referral code ${referralCode}`,
		usersCount: 193, // update as of 2/27/26
	},
	steps: [
		{
			number: 1,
			title: "Download MariBank App",
			description:
				"Download the official MariBank app from Google Play Store or Apple App Store on your smartphone",
		},
		{
			number: 2,
			title: "Sign Up & Enter Code",
			description: `Create your new MariBank account and enter the referral code ${referralCode} during registration to unlock your ${referralBonus} bonus`,
		},
		{
			number: 3,
			title: "Deposit ₱1,000 & Get Bonus",
			description: `Make your first ₱1,000 deposit from any e-wallet, bank, or existing MariBank account and keep it for 3 consecutive days to instantly receive your ${referralBonus} bonus`,
		},
	],
};
