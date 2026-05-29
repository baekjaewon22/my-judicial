import { useEffect } from "react";
import type { SiteData } from "../sites/types";
import Header from "../components/judicial/Header";
import Hero from "../components/judicial/Hero";
import Stats from "../components/judicial/Stats";
import Services from "../components/judicial/Services";
import Process from "../components/judicial/Process";
import Points from "../components/judicial/Points";
import Profile from "../components/judicial/Profile";
import Location from "../components/judicial/Location";
import FAQ from "../components/judicial/FAQ";
import CTABanner from "../components/judicial/CTABanner";
import ContactForm from "../components/judicial/ContactForm";
import Footer from "../components/judicial/Footer";
import "./JudicialSite.css";

type Props = { data: SiteData };

export default function JudicialSite({ data }: Props) {
	useEffect(() => {
		const prev = document.title;
		document.title = `${data.office.name} | ${data.office.tagline}`;
		return () => {
			document.title = prev;
		};
	}, [data]);

	return (
		<div className="j-site">
			<Header data={data} />
			<main>
				<Hero data={data} />
				<Stats data={data} />
				<Services data={data} />
				<Process data={data} />
				<Points data={data} />
				<Profile data={data} />
				<Location data={data} />
				<CTABanner data={data} />
				<FAQ data={data} />
				<ContactForm data={data} />
			</main>
			<Footer data={data} />
		</div>
	);
}
