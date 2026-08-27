import type { MetadataRoute } from "next";
import { profile } from "@/lib/profile";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = [
		"",
		"/experience",
		"/case-studies",
		"/case-studies/analytics-enablement",
		"/case-studies/backend-api-projects",
		"/case-studies/data-platform-modernization",
		"/case-studies/data-quality-observability",
		"/case-studies/kenya-data-migration",
		"/projects",
		"/skills",
		"/resume",
		"/contact",
	];

	return routes.map((route) => ({
		url: `${profile.website}${route}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: route === "" ? 1 : 0.7,
	}));
}
