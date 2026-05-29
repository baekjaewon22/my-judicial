import "./PlatformHome.css";

export default function NotFound() {
	return (
		<main className="platform-home">
			<div className="platform-home__inner">
				<div className="platform-home__mark">404</div>
				<h1 className="platform-home__title">페이지를 찾을 수 없습니다.</h1>
				<p className="platform-home__desc">
					요청하신 주소가 존재하지 않거나 이동되었습니다.
				</p>
				<ul className="platform-home__list">
					<li>
						<a href="/">메인으로 돌아가기</a>
					</li>
				</ul>
			</div>
		</main>
	);
}
