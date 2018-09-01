import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Page from '../../layouts/Page/Page.jsx'

import s from './NotFoundPage.css';

function HomePage() {
	return (
		<Page title='Whoops!'
			content={
				<div className={s.block}>
					<p className={s.code}>404</p>
					<p className={s.title}>Страница не найдена</p>
				</div>
			} />
	)
}

export default withStyles(s)(HomePage)
