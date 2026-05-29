import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

const NAV = [
	{ href: "#services", label: "업무 영역" },
	{ href: "#process", label: "진행 절차" },
	{ href: "#points", label: "차별점" },
	{ href: "#profile", label: "법무사 소개" },
	{ href: "#faq", label: "자주 묻는 질문" },
	{ href: "#contact", label: "상담 신청" },
];

export default function Header({ data }: Props) {
	return (
		<header className="j-header">
			<div className="j-header__inner j-container">
				<a className="j-header__brand" href="#top">
					<span className="j-header__brand-mark" aria-hidden="true">
						<span>建律</span>
					</span>
					<span className="j-header__brand-name">{data.office.name}</span>
				</a>

				<nav className="j-header__nav" aria-label="주요 메뉴">
					<ul>
						{NAV.map((n) => (
							<li key={n.href}>
								<a href={n.href}>{n.label}</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="j-header__cta">
					<a className="j-header__tel" href={`tel:${data.contact.mobile}`}>
						<span className="j-header__tel-label">상담전화</span>
						<span className="j-header__tel-number">{data.contact.mobile}</span>
					</a>
					<a className="j-btn j-btn--gold j-header__btn" href="#contact">
						상담 신청
					</a>
				</div>
			</div>
		</header>
	);
}
