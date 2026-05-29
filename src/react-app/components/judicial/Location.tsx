import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Location({ data }: Props) {
	const query = encodeURIComponent(data.contact.address);
	const naverUrl = `https://map.naver.com/v5/search/${query}`;
	const kakaoUrl = `https://map.kakao.com/?q=${query}`;

	return (
		<section className="j-section j-location" id="location">
			<div className="j-container j-location__inner">
				<div className="j-location__info">
					<p className="j-section__eyebrow">Location</p>
					<h2 className="j-section__title">사무소 안내</h2>
					<dl className="j-location__list">
						<div>
							<dt>사무소</dt>
							<dd>{data.office.name}</dd>
						</div>
						<div>
							<dt>주소</dt>
							<dd>{data.contact.address}</dd>
						</div>
						{data.contact.transit ? (
							<div>
								<dt>교통편</dt>
								<dd>{data.contact.transit}</dd>
							</div>
						) : null}
						<div>
							<dt>휴대전화</dt>
							<dd>
								<a href={`tel:${data.contact.mobile}`}>{data.contact.mobile}</a>
							</dd>
						</div>
						<div>
							<dt>사무실</dt>
							<dd>
								<a href={`tel:${data.contact.landline}`}>
									{data.contact.landline}
								</a>
							</dd>
						</div>
						<div>
							<dt>운영시간</dt>
							<dd>{data.contact.hours}</dd>
						</div>
					</dl>
				</div>

				<div className="j-location__map">
					<div className="j-location__map-card">
						<div className="j-location__map-pin" aria-hidden="true">
							<svg
								viewBox="0 0 24 24"
								width="40"
								height="40"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</div>
						<div className="j-location__map-addr">
							{data.contact.address}
						</div>
						{data.contact.transit ? (
							<div className="j-location__map-transit">
								{data.contact.transit}
							</div>
						) : null}
						<div className="j-location__map-actions">
							<a
								className="j-btn j-btn--navy"
								href={naverUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								네이버 지도에서 보기
							</a>
							<a
								className="j-btn j-btn--gold"
								href={kakaoUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								카카오맵에서 보기
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
