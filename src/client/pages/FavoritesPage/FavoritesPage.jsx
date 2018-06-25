import React, { Fragment } from 'react'

import Page from '../../layouts/Page/Page.jsx'
import TabsHeader from '../../components/Tabs/TabsHeader.jsx'
import TabTitle from '../../components/Tabs/TabTitle.jsx'
import Msg from '../../components/Msg/Msg.jsx'

export default () => {
	return (
		<Page title='Избранное'
			header = {
				<TabsHeader>
					<TabTitle text="Поиск соседей" />
					<TabTitle text="Подселение" />
				</TabsHeader>
			}
			content={
				<Fragment>
					<Msg text={['Выполните вход на сайт, чтобы ваши избранные объявления сохранились и были доступны через продолжительное время или при работе на другом устройстве.']} />
					<span className="masonry__msg block_with-padding">Нет ни одного объявления</span>
				</Fragment>
			} />
	)
}
