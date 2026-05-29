import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function CTABanner({ data }: Props) {
	return (
		<section className="j-ctabanner">
			<div className="j-container j-ctabanner__inner">
				<div>
					<p className="j-ctabanner__eyebrow">지금 바로 상담하세요</p>
					<h2 className="j-ctabanner__title">
						법원경력 21년, 박건률 법무사가 직접 상담드립니다.
					</h2>
				</div>
				<div className="j-ctabanner__actions">
					<a className="j-btn j-btn--gold j-btn--lg" href="#contact">
						상담 신청하기
					</a>
					<a
						className="j-btn j-btn--outline-light j-btn--lg"
						href={`tel:${data.contact.mobile}`}
					>
						{data.contact.mobile}
					</a>
				</div>
			</div>
		</section>
	);
}
