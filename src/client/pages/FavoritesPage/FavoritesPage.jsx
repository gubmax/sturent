import React, { Fragment } from 'react'

import Page from '../../layouts/Page/Page'
import TabsHeader from '../../components/Tabs/TabsHeader'
import TabTitle from '../../components/Tabs/TabTitle'
import Tabs from '../../components/Tabs/Tabs'
import Msg from '../../components/Msg/Msg'

export default () => (
  <Page
    title="Избранное"
    header={(
      <TabsHeader>
        <TabTitle text="Поиск соседей" />
        <TabTitle text="Подселение" />
      </TabsHeader>
    )}
    content={(
      <Fragment>
        <Msg text={['Выполните вход на сайт, чтобы ваши избранные объявления сохранились и были доступны через продолжительное время или при работе на другом устройстве.']} />
        <Tabs>
          <div>
            <span className="masonry__msg block_with-padding">Нет ни одного объявления</span>
          </div>
          <div>
            <span className="masonry__msg block_with-padding">0</span>
          </div>
        </Tabs>
      </Fragment>
    )}
  />
)
