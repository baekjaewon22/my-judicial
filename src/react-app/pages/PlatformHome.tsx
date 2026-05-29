import "./PlatformHome.css";

export default function PlatformHome() {
	return (
		<main className="platform-home">
			<div className="platform-home__inner">
				<div className="platform-home__mark">JUDICIAL</div>
				<h1 className="platform-home__title">법무사 플랫폼 준비 중</h1>
				<p className="platform-home__desc">
					여러 법무사 사무소의 사이트를 함께 운영하는 플랫폼이
					<br />
					조만간 이곳에서 시작됩니다.
				</p>
				<p className="platform-home__hint">
					현재 개별 사이트는 아래 경로에서 확인할 수 있습니다.
				</p>
				<ul className="platform-home__list">
					<li>
						<a href="/judicial1">/judicial1 — 박건률 법무사 사무소</a>
					</li>
				</ul>
			</div>
		</main>
	);
}
