import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Process({ data }: Props) {
	return (
		<section className="j-section j-process j-section--dark" id="process">
			<div className="j-container">
				<header className="j-section__head j-section__head--light">
					<p className="j-section__eyebrow">Process</p>
					<h2 className="j-section__title">진행 절차</h2>
					<p className="j-section__sub">
						첫 상담부터 사건 종결까지, 단계별로 직접 안내드립니다.
					</p>
				</header>

				<ol className="j-process__list">
					{data.process.map((p, i) => (
						<li className="j-process__item" key={p.step}>
							{i < data.process.length - 1 ? (
								<span
									className="j-process__connector"
									aria-hidden="true"
								/>
							) : null}
							<div className="j-process__step">{p.step}</div>
							<h3 className="j-process__title">{p.title}</h3>
							<p className="j-process__desc">{p.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
