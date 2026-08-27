import type { Metadata } from "next";

// @ts-ignore: CSS side-effect import declaration is handled by Next.js
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import { profile } from "@/lib/profile";

export const metadata: Metadata = {
	metadataBase: new URL(profile.website),

	title: {
		default: "Fredrick Mandela | Senior Data & Full-Stack Engineer",
		template: "%s | Fredrick Mandela",
	},

	description:
		"Fredrick Mandela is a senior data and full-stack engineer based in Nairobi, Kenya, building reliable data platforms, backend systems, analytics products, and production-ready applications.",

	keywords: [
		"Fredrick Mandela",
		"Senior Data Engineer",
		"Full-Stack Engineer",
		"Backend Engineer",
		"Data Platform Engineer",
		"Analytics Engineer",
		"Software Engineer",
		"Data Engineering",
		"Full-Stack Development",
		"Backend Systems",
		"Data Platforms",
		"Financial Data Engineering",
		"Unit Trusts",
		"Web Scraping",
		"Snowflake",
		"Airflow",
		"dbt",
		"Python",
		"SQL",
		"Node.js",
		"React",
		"C#",
		".NET",
		"Docker",
		"Nairobi",
		"Kenya",
	],

	authors: [{ name: profile.name }],
	creator: profile.name,

	openGraph: {
		title: "Fredrick Mandela | Senior Data & Full-Stack Engineer",
		description:
			"Fredrick Mandela builds reliable data platforms, backend systems, analytics products, and full-stack applications.",
		url: profile.website,
		siteName: "Fredrick Mandela Portfolio",
		locale: "en_KE",
		type: "website",
	},

	twitter: {
		card: "summary_large_image",
		title: "Fredrick Mandela | Senior Data & Full-Stack Engineer",
		description:
			"Senior data and full-stack engineer building reliable data platforms, backend systems, analytics products, and full-stack applications.",
	},

	alternates: {
		canonical: "/",
	},

	robots: {
		index: true,
		follow: true,
	},

	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen antialiased">
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
