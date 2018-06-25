import React from 'react'
import axios from 'axios'

import Page from '../../layouts/Page/Page.jsx'
import Textarea from '../../components/Textarea/Textarea.jsx'
//import Form from '../components/Form.jsx'

export default class AddFormPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			address: '',
			whom: '',
			rooms: '',
			pay: '',
			pledge: '',
			tenants: '',
			text: '',
			tags: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		let value = {}
		value[e.target.id] = e.target.value
		this.setState(value)
	}

	onUpdateTextarea = (val) => {
		this.setState({
			text: val
		})
	};

	handleSubmit(e) {
		e.preventDefault()

		console.log(this.state)

		axios({
      method: 'POST',
      url: '/api/add/form',
      data: this.state
    })
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
	}

	render() {
		return (
			<Page title='Добавление объявления'
				content={
					<div>
						<div className="block steps">

							<div className="steps__step">
								<span className="steps__step-num">
									<span>1</span>
								</span>
								<span className="steps__step-text">Авторизуйтесь на сайте</span>
							</div>

							<div className="steps__step">
								<span className="steps__step-num steps__step-num_is-active">
									<span>2</span>
								</span>
								<span className="steps__step-text">Заполните форму</span>
							</div>

							<div className="steps__step">
								<span className="steps__step-num">
									<span>3</span>
								</span>
								<span className="steps__step-text">Загрузите фотографии</span>
							</div>

						</div>

						<div className="page__columns">
							<div className="page__column">
								<div className="msg-info">
									<i className="msg-info__icon">
										<svg viewBox="0 0 24 24" className="sr-icon sr-icon_accent">
											<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
										</svg>
									</i>
									<p>Если вы ещё не зарегистированы, можете сделать это за пару кликов с помощью кнопок социальных сетей или стандартным способом - заполнив <a className="form-text_link" href="/register">форму</a>.</p>
								</div>
							</div>

							<div className="page__column">
								<form className="block form" method="POST" action="/api/add/form" onSubmit={this.handleSubmit}>
									<span className="form__title">Форма для размещения объявления</span>
									<div className="form__field">
										<label htmlFor="address" className="field__label">Адрес</label>
										<input type="text" className="field field_text" id="address" name="address" value={this.state.address} onChange={this.handleChange} />
									</div>
									<div className="form__field">
										<label htmlFor="whom" className="field__label">Ищу</label>
										<input type="text" className="field field_text" id="whom" name="whom[]" value={this.state.whom} onChange={this.handleChange} />
									</div>
									<div className="form__field">
										<label htmlFor="rooms" className="field__label">Хочу арендовать</label>
										<input type="text" className="field field_text" id="rooms" name="rooms" value={this.state.rooms} onChange={this.handleChange} />
									</div>
									<div className="form__field">
										<label htmlFor="pay" className="field__label">Арендная плата</label>
										<input className="field field_textarea" id="pay" name="pay" value={this.state.pay} onChange={this.handleChange} />
									</div>
									<div className="form__field">
										<label htmlFor="pledge" className="field__label">Залог</label>
										<input className="field field_textarea" id="pledge" name="pledge" value={this.state.pledge} onChange={this.handleChange} />
									</div>
									<div className="form__field">
										<label htmlFor="tenants" className="field__label">Всего жильцов</label>
										<input className="field field_textarea" id="tenants" name="tenants" value={this.state.tenants} onChange={this.handleChange} />
									</div>
									<div className="form__field">
										<label htmlFor="text" className="field__label">Текст</label>
										<Textarea className="field field_textarea" id="text" name="text" onUpdateTextarea={this.onUpdateTextarea.bind(this)} />
									</div>
									<div className="form__field">
										<label htmlFor="tags" className="field__label">Особенности</label>
										<input className="field field_textarea" id="tags" name="tags[]" value={this.state.tags} onChange={this.handleChange} />
									</div>

									<div className="btns-group">
										<button type="submit" className="btn btn_primary">Отправить</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				} />
		)
	}
}
