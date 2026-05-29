import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Stats({ data }: Props) {
	return (
		<section className="j-stats">
			<div className="j-container j-stats__inner">
				{data.stats.map((s) => (
					<div className="j-stats__item" key={s.label}>
						<div className="j-stats__value">
							<span>{s.value}</span>
							{s.suffix ? (
								<span className="j-stats__suffix">{s.suffix}</span>
							) : null}
						</div>
						<div className="j-stats__label">{s.label}</div>
					</div>
				))}
			</div>
		</section>
	);
}
