import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import TabsHeader from '../Tabs/TabsHeader'
import TabTitle from '../Tabs/TabTitle'

import s from './Auth.css'
import b from '../../styles/Button.css'
import i from '../../styles/Icon.css'
import f from '../../styles/Form.css'
import sb from '../../styles/SocialBtns.css'

class Auth extends Component {
  render() {
    const { withoutHeader, className } = this.props

    return (
      <div className={s.container + (className ? ` ${className}` : '')}>
        { !withoutHeader
          ? (
            <div className={s.header}>
              <i className={s.closeBtn} onClick={this.props.onClick}>
                <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_secondary}`}>
                  <path d="M16.62,2.99L16.62,2.99c-0.49-0.49-1.28-0.49-1.77,0l-8.31,8.31c-0.39,0.39-0.39,1.02,0,1.41l8.31,8.31   c0.49,0.49,1.28,0.49,1.77,0h0c0.49-0.49,0.49-1.28,0-1.77L9.38,12l7.25-7.25C17.11,4.27,17.11,3.47,16.62,2.99z" />
                </svg>
              </i>
              <span className={s.title}>Авторизация</span>
            </div>
          )
          : null
        }
        <div className={s.tabs}>
          <TabsHeader>
            <TabTitle text="Вход" />
            <TabTitle text="Регистрация" />
          </TabsHeader>
        </div>
        <div className={s.body}>
          <p className={f.form__text_center}>Войти через социальные сети</p>
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
          <p className={f.form__text_center}>Или через E-mail</p>
          <div className={f.form__field}>
            <label htmlFor="auth-email" className={f.field__label}>E-mail</label>
            <input type="email" className={`${f.field} ${f.field_text}`} id="auth-email" placeholder="example@domain.net" required />
          </div>
          <div className={f.form__field}>
            <label htmlFor="auth-password" className={f.field__label}>Пароль</label>
            <input type="password" className={`${f.field} ${f.field_text}`} id="auth-password" />
          </div>
        </div>
        <div className={`${b.btnsGroup} ${s.footer}`}>
          <span className={f.form__text}>
Забыли
            <a href="/password/reset" className={f.form__text_link}>пароль</a>
?
          </span>
          <span className={`${b.btn} ${b.btn_primary}`}>Войти</span>
        </div>
      </div>
    )
  }
}

export default withStyles(s, b, i, f, sb)(Auth)
