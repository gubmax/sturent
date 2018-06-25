import React from 'react';

import Page from '../../layouts/Page/Page.jsx'
import Textarea from '../../components/Textarea/Textarea.jsx'

export default () => {
	return (
		<Page title='Обратная связь'
			content={
				<div>
					<div className="msg-info">
						<i className="msg-info__icon">
							<svg viewBox="0 0 24 24" className="sr-icon sr-icon_accent">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
							</svg>
						</i>
						<p>Если у вас есть пожелания, предложения или вопросы, напишите нам c помощью данной формы.</p>
					</div>
					<form className="block form" id="add-ad" method="GET" action="/">
						<span className="form__title">Форма для связи</span>
						<div className="form__field">
							<label htmlFor="name" className="field__label">Имя</label>
							<input type="text" className="field field_text" id="name"/>
						</div>
						<div className="form__field">
							<label htmlFor="email" className="field__label">Местоположение</label>
							<input type="email" className="field field_text" id="email" placeholder="example@domain.net"/>
						</div>
						<div className="form__field">
							<label htmlFor="theme" className="field__label">Тема обращения</label>
							<input type="text" className="field field_text" id="theme"/>
						</div>
						<div className="form__field">
							<label htmlFor="text" className="field__label">Текст</label>
							<Textarea className="field field_textarea" id="text" />
						</div>
						<div className="btns-group">
							<span className="btn btn_primary">Отправить</span>
						</div>
					</form>

				</div>
			} />
	)
}
