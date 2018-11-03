import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../../containers/AsyncLink'

import s from './HomePage.css'
import w from '../../styles/Wrapper.css'
import b from '../../styles/Button.css'
import i from '../../styles/Icon.css'
import sb from '../../styles/SocialBtns.css'
import f from '../../styles/Form.css'

function HomePage() {
    return (
        <section className={s.page}>
            <div className={s.header}>
                <div className={`${w.wrapper} ${s.headerWrapper}`}>

                    <div className={s.sectionBlock_left}>
                        <h1 className={s.mission}>Помогаем искать соседей для совместной аренды</h1>
                        <p className={s.text}>У нас большой выбор объявлений по поиску соседей. Вы можете найти соседа или соседку, чтобы вместе снять комнату, арендовать квартиру или другое жилое помещение. Надеемся, что здесь вы найдете для себя подходящий вариант.</p>
                    </div>

                    <form className={`${s.form} ${f.form}`} id="add-ad" method="GET" action="/">
                        <div className={f.form__field}>
                            <label htmlFor="rent" className={f.field__label}>Хочу арендовать</label>
                            <input type="text" className={`${f.field} ${f.field_text}`} id="rent" />
                        </div>
                        <div className={f.form__field}>
                            <label htmlFor="rooms" className={f.field__label}>Количество комнат</label>
                            <input type="text" className={`${f.field} ${f.field_text}`} id="rooms" />
                        </div>
                        <div className={f.form__field}>
                            <label htmlFor="pay_from" className={f.field__label}>Арендная плата, руб.</label>
                            <div className={f.field__fieldWithColumns}>
                                <input type="text" className={`${f.field} ${f.field_text} ${f.field_firstColumn}`} id="pay_from" placeholder="от" />
                                <span>–</span>
                                <input type="text" className={`${f.field} ${f.field_text} ${f.field_secondaryColumn}`} id="pay_to" placeholder="до" />
                            </div>
                        </div>
                        <div className={b.btnsGroup}>
                            <Link to="/neighbors" className={`${b.btn} ${b.btn_primary}`}>Показать</Link>
                        </div>
                    </form>

                </div>
            </div>

            <div className={w.wrapper}>
                <h2 className={s.title}>Что мы предлагаем:</h2>

                <div className={s.section}>
                    <div className={s.sectionBlock_left}>
                        <h3 className={s.title}>Удобный просмотр</h3>
                        <p>На сайте вы найдёте обьявления по поиску соседей для совместной аренды жилых помещений. Информация в обьявлении, как правило, с фотографиями и контактной информацией хозяина.</p>
                    </div>

                    <div className={s.sectionBlock}>
                        <div className={s.dummy}>
                            <span className={s.dummy__avatar} />

                            <div className={s.dummy__info}>
                                <span className={s.dummy__name} />
                                <span className={s.dummy__date} />
                            </div>

                            <div className={s.dummy__rightContainer}>
                                <i className={s.dummy__btn}>
                                    <svg className={`${i.srIcon} ${i.srIcon_secondary}`} viewBox="0 0 24 24">
                                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                                    </svg>
                                </i>
                                <i className={s.dummy__btn}>
                                    <svg className={`${i.srIcon} ${i.srIcon_secondary}`} viewBox="0 0 24 24">
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </i>
                            </div>
                        </div>

                        <div className={s.imgDummy}>
                            <i>
                                <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_accent}`}>
                                    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                                </svg>
                            </i>
                        </div>

                        <div className={s.infoWrapper}>
                            <div className={s.info_post}>
                                <span className={s.infoTitle} />
                                <span className={s.infoText} />
                            </div>
                            <div className={s.info_post}>
                                <span className={s.infoTitle} />
                                <span className={s.infoText} />
                            </div>
                            <div className={s.info_post}>
                                <span className={s.infoTitle} />
                                <span className={s.infoText} />
                            </div>
                            <span className={s.textLine} />
                            <span className={s.textLine} />
                        </div>
                    </div>
                </div>

                <div className={s.section}>
                    <div className={s.sectionBlock_right}>
                        <h3 className={s.title}>Быстрая регистрация</h3>
                        <p>Объявления можно подавать бесплатно, а регистрация происходит в один клик с помощью кнопок социальных сетей или стандартным способом - заполнив форму.</p>
                    </div>
                    <div className={s.sectionBlock}>
                        <p className={s.form__text_center}>Войдите через социальные сети</p>
                        <div className={sb.socialBlock}>
                            <a href="/auth/vk" title="Вконтакте" className={`${b.btn_withIcon} ${sb.socialBtn} ${sb.socialBtn_vk}`}>
                                <i className={i.icon}>
                                    <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_light}`}>
                                        <path d="m0.082828,5.354315c-0.163359,-0.996839 4.655725,-0.379655 4.655725,-0.379655c0,0 2.797519,7.025341 3.900191,7.025341c1.102672,0 0.571756,-5.957299 0.571756,-5.957299c0,0 -1.36813,-0.356014 -1.36813,-0.901902c0,-0.545888 1.36813,-0.925636 1.36813,-0.925636c0,0 3.540627,0 4.02271,0c0.482083,0 0.673934,0.783231 0.673935,1.305384c0,0.522154 0,6.384516 0,6.384516l1.102672,0c0,0 0.981556,-1.577636 1.756027,-3.180391c0.774471,-1.602755 1.715267,-3.750013 1.715267,-3.750013l4.676145,0c0,0 0.857634,0.023549 0.755534,0.735669c-0.138897,0.968781 -3.249906,5.569356 -3.900191,7.144012c-0.490076,1.186713 2.058765,2.792936 3.144656,4.509509c0.704759,1.114079 0.755534,2.420987 0.755534,2.420987l-5.554119,0l-2.777179,-3.227952c0,0 -0.571676,-0.23725 -1.020992,0.094937c-0.449316,0.332187 -0.469657,0.996839 -0.469657,0.996839l0,2.136176l-4.349427,0c0,0 -3.328435,-1.139244 -6.146374,-6.123439c-2.817939,-4.984194 -3.348855,-7.310245 -3.512214,-8.307084z" />
                                    </svg>
                                </i>
                            </a>
                            <a href="/auth/facebook" title="Facebook" className={`${b.btn_withIcon} ${sb.socialBtn} ${sb.socialBtn_facebook}`}>
                                <i className={i.icon}>
                                    <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_light}`}>
                                        <path d="m17.584148,7.840448l-3.735876,0l0,-2.450187c0,-0.920164 0.609859,-1.13469 1.039399,-1.13469c0.428563,0 2.63637,0 2.63637,0l0,-4.045203l-3.630812,-0.014171c-4.030543,0 -4.947775,3.017043 -4.947775,4.947775l0,2.696476l-2.330952,0l0,4.168348l2.330952,0c0,5.349461 0,11.795007 0,11.795007l4.902818,0c0,0 0,-6.509073 0,-11.795007l3.30829,0l0.427586,-4.168348z" />
                                    </svg>
                                </i>
                            </a>
                            <a href="/auth/google" title="Google+" className={`${b.btn_withIcon} ${sb.socialBtn} ${sb.socialBtn_google}`}>
                                <i className={i.icon}>
                                    <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_light}`}>
                                        <path d="m8.109334,19.979622c-4.480065,0 -8.124668,-3.5792 -8.124668,-7.979094c0,-4.399895 3.644602,-7.980149 8.124668,-7.980149c1.958908,0 3.852413,0.695164 5.329242,1.956798l-2.066505,2.332334c-0.90403,-0.77217 -2.063341,-1.198341 -3.263791,-1.198341c-2.744792,0 -4.977968,2.193091 -4.977968,4.888303c0,2.695212 2.233176,4.888303 4.977968,4.888303c2.321786,0 3.841864,-1.112896 4.335547,-3.108724l-4.297572,0l0,-3.090791l7.619381,0l0,1.545396c0.001055,4.631968 -3.076023,7.745967 -7.656302,7.745967z" />
                                        <polygon points="24.076580047607422,10.731418240815401 21.6633358001709,10.731418240815401 21.6633358001709,8.31925355270505 19.73404312133789,8.31925355270505 19.73404312133789,10.731418240815401 17.32187271118164,10.731418240815401 17.32187271118164,12.660717595368624 19.73404312133789,12.660717595368624 19.73404312133789,15.072879422456026 21.6633358001709,15.072879422456026 21.6633358001709,12.660717595368624 24.076580047607422,12.660717595368624" />
                                    </svg>
                                </i>
                            </a>
                        </div>
                        <p className={s.form__text_center}>Или зарегистрируйтесь на сайте</p>
                        <a className={`${b.btn} ${b.btn_primary} ${b.btn_wide}`} href="register">Регистрация</a>
                    </div>
                </div>

                <div className={s.section}>
                    <div className={s.sectionBlock_left}>
                        <h3 className={s.title}>Интерактивная карта</h3>
                        <p>Интерактивная карта, на которой можно найти все наши обьявление в интересуещем вас месте.</p>
                    </div>
                    <a href="/map" className={s.map} />
                </div>

                <div className={s.section}>
                    <div className={s.sectionBlock_right}>
                        <h3 className={s.title}>Избранное</h3>
                        <p>Сохранение понравившихся объявлений в "избранное", чтобы они были доступны через продолжительное время или при работе на другом устройстве.</p>
                    </div>
                    <div className={s.sectionBlock}>
                        <div className={s.dummy}>
                            <span className={s.dummy__avatar} />

                            <div className={s.dummy__info}>
                                <span className={s.dummy__name} />
                                <span className={s.dummy__date} />
                            </div>

                            <div className={s.dummy__rightContainer}>
                                <i className={`${s.dummy__btn} ${s.inFavorites}`}>
                                    <svg className={`${i.srIcon} ${i.srIcon_light}`} viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </i>
                                <i className={s.dummy__btn}>
                                    <svg className={`${i.srIcon} ${i.srIcon_secondary}`} viewBox="0 0 24 24">
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </i>
                            </div>
                        </div>

                        <div className={s.imgDummy}>
                            <i>
                                <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_accent}`}>
                                    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                                </svg>
                            </i>
                        </div>

                        <div className={s.infoWrapper}>
                            <div className={s.info_post}>
                                <span className={s.infoTitle} />
                                <span className={s.infoText} />
                            </div>
                            <div className={s.info_post}>
                                <span className={s.infoTitle} />
                                <span className={s.infoText} />
                            </div>
                            <div className={s.info_post}>
                                <span className={s.infoTitle} />
                                <span className={s.infoText} />
                            </div>
                            <span className={s.textLine} />
                            <span className={s.textLine} />
                        </div>
                    </div>
                </div>

                <div className={s.section}>
                    <div className={s.sectionBlock_left}>
                        <h3 className={s.title}>Адаптивный дизайн</h3>
                        <p>Удобный и понятный дизайн на смартфоне, планшете, ноутбуке или домашнем компьютере, что позволяет пользоваться нашим сервисом где вам угодно.</p>
                    </div>
                    <img className={s.img} src="/images/devices.png" />
                </div>

                <div className={s.section}>
                    <div className={s.sectionBlock_right}>
                        <h3 className={s.title}>Сайт как приложение</h3>
                        <p>Добавьте сайт на главный экран мобильного устройства в виде приложения. Оно быстро загружается, не требует установки и занимает минимум места (около 200КБ).</p>
                    </div>
                    <img className={s.img} src="/images/app-on-device.png" />
                </div>

            </div>
        </section>
    )
}

export default withStyles(s, w, b, i, sb, f)(HomePage)
