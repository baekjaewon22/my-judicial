import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Hero({ data }: Props) {
	return (
		<section className="j-hero" id="top">
			<div className="j-hero__bg" aria-hidden="true" />
			<div className="j-container j-hero__inner">
				<div className="j-hero__content">
					<p className="j-hero__eyebrow">
						<span className="j-hero__eyebrow-dot" aria-hidden="true" />
						{data.hero.eyebrow}
					</p>
					<h1 className="j-hero__headline">
						{data.hero.headline.split("\n").map((line, i) => (
							<span key={i}>
								{line}
								<br />
							</span>
						))}
					</h1>
					<p className="j-hero__sub">{data.hero.sub}</p>
					<div className="j-hero__cta">
						<a className="j-btn j-btn--gold j-btn--lg" href="#contact">
							무료 상담 신청하기
						</a>
						<a
							className="j-btn j-btn--ghost j-btn--lg"
							href={`tel:${data.contact.mobile}`}
						>
							<svg
								viewBox="0 0 24 24"
								width="16"
								height="16"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
							>
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
							{data.contact.mobile}
						</a>
					</div>
					<div className="j-hero__meta">
						<span>{data.office.name}</span>
						<span aria-hidden="true">·</span>
						<span>{data.contact.hours}</span>
					</div>
				</div>

				<div className="j-hero__visual" aria-hidden="true">
					<div className="j-hero__seal">
						<div className="j-hero__seal-mark">
							<span>建律</span>
						</div>
						<div className="j-hero__seal-divider" />
						<div className="j-hero__seal-name">박건률 법무사 사무소</div>
						<div className="j-hero__seal-sub">
							대표 법무사 박건률 · 법원경력 21년
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
