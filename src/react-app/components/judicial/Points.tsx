import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Points({ data }: Props) {
	return (
		<section className="j-section j-points" id="points">
			<div className="j-container">
				<header className="j-section__head">
					<p className="j-section__eyebrow">Why us</p>
					<h2 className="j-section__title">박건률 법무사를 선택해야 하는 이유</h2>
				</header>

				<div className="j-points__grid">
					{data.points.map((p, i) => (
						<article className="j-point-card" key={p.label}>
							<div
								className="j-point-card__watermark"
								aria-hidden="true"
							>
								{String(i + 1).padStart(2, "0")}
							</div>
							<div className="j-point-card__label">{p.label}</div>
							<h3 className="j-point-card__title">{p.title}</h3>
							<p className="j-point-card__desc">{p.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
