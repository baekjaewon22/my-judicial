import { useState } from "react";
import type { SiteData } from "../../sites/types";

type Props = { data: SiteData };

export default function FAQ({ data }: Props) {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<section className="j-section j-faq" id="faq">
			<div className="j-container">
				<header className="j-section__head">
					<p className="j-section__eyebrow">FAQ</p>
					<h2 className="j-section__title">자주 묻는 질문</h2>
				</header>

				<ul className="j-faq__list">
					{data.faq.map((f, i) => {
						const isOpen = open === i;
						return (
							<li
								key={f.q}
								className={`j-faq__item${isOpen ? " is-open" : ""}`}
							>
								<button
									type="button"
									className="j-faq__q"
									aria-expanded={isOpen}
									onClick={() => setOpen(isOpen ? null : i)}
								>
									<span className="j-faq__q-mark">Q</span>
									<span className="j-faq__q-text">{f.q}</span>
									<span className="j-faq__q-icon" aria-hidden="true" />
								</button>
								{isOpen ? (
									<div className="j-faq__a">
										<span className="j-faq__a-mark">A</span>
										<p>{f.a}</p>
									</div>
								) : null}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
