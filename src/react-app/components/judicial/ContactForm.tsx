import { useState } from "react";
import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

const CATEGORIES = [
	"부동산 등기",
	"법인 등기",
	"상속 · 유언 · 증여",
	"개인회생 · 파산",
	"부동산 경매",
	"가사비송 · 가족관계",
	"기타",
];

export default function ContactForm({ data }: Props) {
	const [submitted, setSubmitted] = useState(false);

	return (
		<section className="j-section j-contact" id="contact">
			<div className="j-container j-contact__inner">
				<div className="j-contact__intro">
					<p className="j-section__eyebrow">Contact</p>
					<h2 className="j-section__title">상담 신청</h2>
					<p className="j-contact__desc">
						아래 양식을 남겨주시면 박건률 법무사가 직접 연락드립니다.
						<br />
						급하신 사안은 휴대전화로 바로 연락 주셔도 됩니다.
					</p>
					<ul className="j-contact__lines">
						<li>
							<span>휴대전화</span>
							<a href={`tel:${data.contact.mobile}`}>{data.contact.mobile}</a>
						</li>
						<li>
							<span>사무실</span>
							<a href={`tel:${data.contact.landline}`}>
								{data.contact.landline}
							</a>
						</li>
						<li>
							<span>운영시간</span>
							<span>{data.contact.hours}</span>
						</li>
					</ul>
				</div>

				<form
					className="j-contact__form"
					onSubmit={(e) => {
						e.preventDefault();
						setSubmitted(true);
					}}
				>
					{submitted ? (
						<div className="j-contact__done">
							<h3>상담 신청이 접수되었습니다.</h3>
							<p>
								빠른 시일 내에 박건률 법무사가 직접 연락드리겠습니다.
								<br />
								(현재는 데모 양식입니다. 실제 발송은 추후 연동 예정)
							</p>
						</div>
					) : (
						<>
							<div className="j-field">
								<label htmlFor="name">성함</label>
								<input id="name" name="name" type="text" required />
							</div>
							<div className="j-field">
								<label htmlFor="phone">연락처</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									placeholder="010-0000-0000"
									required
								/>
							</div>
							<div className="j-field">
								<label htmlFor="category">상담 분야</label>
								<select id="category" name="category" required defaultValue="">
									<option value="" disabled>
										상담받고 싶은 분야를 선택해 주세요
									</option>
									{CATEGORIES.map((c) => (
										<option key={c} value={c}>
											{c}
										</option>
									))}
								</select>
							</div>
							<div className="j-field">
								<label htmlFor="message">상담 내용</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="사건의 개요와 궁금하신 점을 자유롭게 적어주세요."
									required
								/>
							</div>
							<label className="j-field__agree">
								<input type="checkbox" required />
								<span>
									개인정보 수집·이용에 동의합니다. (상담 회신 목적, 보관 6개월)
								</span>
							</label>
							<button type="submit" className="j-btn j-btn--navy j-btn--lg">
								상담 신청하기
							</button>
						</>
					)}
				</form>
			</div>
		</section>
	);
}
