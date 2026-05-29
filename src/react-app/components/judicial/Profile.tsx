import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function Profile({ data }: Props) {
	return (
		<section className="j-section j-profile" id="profile">
			<div className="j-container j-profile__inner">
				<aside className="j-profile__card">
					<div className="j-profile__portrait">
						<picture>
							<source srcSet="/prof.webp" type="image/webp" />
							<img
								src="/prof.png"
								alt={`${data.profile.title} ${data.profile.name}`}
							/>
						</picture>
					</div>
					<div className="j-profile__name">{data.profile.name}</div>
					<div className="j-profile__title">{data.profile.title}</div>
					<ul className="j-profile__cert">
						{data.profile.certifications.map((c) => (
							<li key={c}>{c}</li>
						))}
					</ul>
				</aside>

				<div className="j-profile__body">
					<p className="j-section__eyebrow">Profile</p>
					<h2 className="j-section__title">법원경력 21년, 박건률 법무사</h2>
					<p className="j-profile__summary">{data.profile.summary}</p>

					<div className="j-profile__cols">
						<div className="j-profile__col">
							<h3>학력</h3>
							<ul>
								{data.profile.education.map((e) => (
									<li key={e}>{e}</li>
								))}
							</ul>
						</div>
						<div className="j-profile__col">
							<h3>법원 실무</h3>
							<ul>
								{data.profile.courts.map((c) => (
									<li key={c}>{c}</li>
								))}
							</ul>
						</div>
						<div className="j-profile__col">
							<h3>업무 경력</h3>
							<ul>
								{data.profile.experience.map((x) => (
									<li key={x}>{x}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
