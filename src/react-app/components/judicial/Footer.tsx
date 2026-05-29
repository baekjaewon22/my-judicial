import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Footer({ data }: Props) {
	return (
		<footer className="j-footer">
			<div className="j-container j-footer__inner">
				<div className="j-footer__brand">
					<div className="j-footer__brand-name">{data.office.name}</div>
					<p className="j-footer__brand-sub">
						{data.profile.title} {data.profile.name} · 법원경력 21년
					</p>
				</div>

				<div className="j-footer__info">
					<dl>
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
							<dd>{data.contact.mobile}</dd>
						</div>
						<div>
							<dt>사무실</dt>
							<dd>{data.contact.landline}</dd>
						</div>
						<div>
							<dt>운영시간</dt>
							<dd>{data.contact.hours}</dd>
						</div>
					</dl>
				</div>

				<div className="j-footer__legal">
					<p>
						본 사이트의 내용은 일반적 정보 제공을 위한 것이며, 개별 사안에 대한
						법률 자문을 대체하지 않습니다. 정확한 판단은 반드시 상담을 통해
						확인해 주세요.
					</p>
					<p className="j-footer__copy">
						© {new Date().getFullYear()} {data.office.name}. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
