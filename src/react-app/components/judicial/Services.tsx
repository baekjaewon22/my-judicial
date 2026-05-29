import type { SiteData } from "../../sites/types";
import ServiceIcon from "./ServiceIcon";

type Props = { data: SiteData };

export default function Services({ data }: Props) {
	return (
		<section className="j-section j-services" id="services">
			<div className="j-container">
				<header className="j-section__head">
					<p className="j-section__eyebrow">Services</p>
					<h2 className="j-section__title">주요 업무 영역</h2>
					<p className="j-section__sub">
						등기 · 민사 · 경매 · 회생 · 가사비송까지, 법원경력 21년의
						실무경험을 바탕으로 의뢰인의 사건을 직접 살핍니다.
					</p>
				</header>

				<div className="j-services__grid">
					{data.services.map((s, idx) => (
						<article className="j-service-card" key={s.title}>
							<div className="j-service-card__head">
								<div className="j-service-card__icon">
									<ServiceIcon name={s.icon} />
								</div>
								<div className="j-service-card__num">
									{String(idx + 1).padStart(2, "0")}
								</div>
							</div>
							<h3 className="j-service-card__title">{s.title}</h3>
							<p className="j-service-card__desc">{s.description}</p>
							<ul className="j-service-card__list">
								{s.items.map((it) => (
									<li key={it}>{it}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
