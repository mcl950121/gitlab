import React, { Component } from 'react';
import T from 'i18n-react';
import { Link } from 'react-router';
import DrugTrace from '../../images/items_drug_trace.png';
import DrugApp from '../../images/items_drug_app.png';
import PalmPhar from '../../images/items_palm_pharmacy.png';
import GenPraBk from '../../images/general_prac_bk.png';
import GenPraBkTd from '../../images/general_prac_bk_tdcode.png';
import GenPraTd from '../../images/general_prac_tdcode.png';
import SkyPraBk from '../../images/skyline_prac_bk.jpg';
import SkyPraBkTd from '../../images/general_prac_bk_tdcode.png';
import SkyPraTd from '../../images/general_prac_tdcode.png';
import './ItemList.css';

class ItemList extends Component {

  constructor() {
    super();

    const nodeGenPraInit = (
      <div>
        <img src={GenPraBk} alt="general-prac" width="100%" />
        <div className="user-app-desc">
          <h1>社区医生</h1>
          <p>给您提供最专业的医疗服务</p>
          <p className="user-app-link"><Link to="/service/general-practitioner">了解详情 ></Link></p>
        </div>
      </div>
    );

    const nodeSkyPraInit = (
      <div>
        <img src={SkyPraBk} alt="general-prac" width="100%" />
        <div className="user-app-desc">
          <h1>天涯医生</h1>
          <p>二、三甲医院医生在线问诊</p>
          <p className="user-app-link"><Link to="/service/skyline-practitioner">了解详情 ></Link></p>
        </div>
      </div>
    );

    const nodeGenPra = nodeGenPraInit;
    const nodeSkyPra = nodeSkyPraInit;

    this.onMouseEnterGenPra = this.onMouseEnterGenPra.bind(this);
    this.onMouseLeaveGenPra = this.onMouseLeaveGenPra.bind(this);
    this.onMouseEnterSkyPra = this.onMouseEnterSkyPra.bind(this);
    this.onMouseLeaveSkyPra = this.onMouseLeaveSkyPra.bind(this);

    this.state = {
      nodeGenPraInit:             nodeGenPraInit,
      nodeSkyPraInit:             nodeSkyPraInit,
      nodeGenPra:                 nodeGenPra,
      nodeSkyPra:                 nodeSkyPra
    }
  }

  onMouseEnterGenPra(e) {

    const nodeGenPra = (
      <div>
        <img src={GenPraBkTd} alt="general-prac" width="100%" />
        <div className="user-app-desc">
          <img src={GenPraTd} alt="general-tdcode" width="80%" />
          <p className="user-app-link"><Link to="/service/general-practitioner">了解详情 ></Link></p>
        </div>
      </div>
    );

    this.setState({
      nodeGenPra:           nodeGenPra
    });
  }

  onMouseLeaveGenPra(e) {

    this.setState({
      nodeGenPra:           this.state.nodeGenPraInit
    });
  }

  onMouseEnterSkyPra(e) {

    const nodeSkyPra = (
      <div>
        <img src={SkyPraBkTd} alt="skyline-prac" width="100%" />
        <div className="user-app-desc">
          <img src={SkyPraTd} alt="skyline-tdcode" width="80%" />
          <p className="user-app-link"><Link to="/service/skyline-practitioner">了解详情 ></Link></p>
        </div>
      </div>
    );

    this.setState({
      nodeSkyPra:           nodeSkyPra
    });
  }

  onMouseLeaveSkyPra(e) {

    this.setState({
      nodeSkyPra:           this.state.nodeSkyPraInit
    });
  }

  render() {

    T.setTexts({
      'user-entry':                 '用户入口 >',
      'link-to-detail':             '了解详情 >',

      'drug-trace': {
        'name':                     '知药追溯',
        'descLine1':                '药品赋码，一件一码',
        'detailLine1':              '药品的唯一识别身份',
        'detailLine2':              '完全兼容国家药品电子监管码规则',
        'detailLine3':              '追溯流向，了解药品的所有动向'
      },

      'drug-app': {
        'name':                     '知药APP',
        'descLine1':                '公众查询药品信息，专业APP',
        'descLine2':                '扫一扫，安全用药',
        'detailLine1':              '用户更加方便快捷的了解药品信息',
        'detailLine2':              '忘记药品用法用量，扫一扫随时查看',
        'detailLine3':              '忘记之前用药的名称，打开历史记录即可查看',
        'detailLine4':              '扫描药品电子监管码获得药品信息，记录药品'
      },

      'palm-phar': {
        'name':                     '掌上药店',
        'descLine1':                '自由排版，一切随你',
        'descLine2':                '功能添加，看你心情',
        'detailLine1':              '专注于线下药店的你',
        'detailLine2':              '来开启线上新的渠道吧'
      },

    });

    return (
      <div className="user-item-list">
        <article className="user-item-article">
          <section>
            <p className="user-item-list-name">{T.translate('drug-trace.name')}</p>
            <p className="user-item-list-desc user-item-list-desc-last">{T.translate('drug-trace.descLine1')}</p>
            <p className="user-item-list-detail">{T.translate('drug-trace.detailLine1')}</p>
            <p className="user-item-list-detail">{T.translate('drug-trace.detailLine2')}</p>
            <p className="user-item-list-detail user-item-list-detail-last">{T.translate('drug-trace.detailLine3')}</p>
            <div className="user-item-link">
              <p><a href="http://api.doctorfm.com:8880/company/" target="view_window">{T.translate('user-entry')}</a></p>
              <p><Link to="/service/drug-trace">{T.translate('link-to-detail')}</Link></p>
            </div>
          </section>
          <img width="100%" alt="DrugTrace" src={DrugTrace}/>
        </article>

        <article className="user-item-article">
          <section>
            <p className="user-item-list-name">{T.translate('drug-app.name')}</p>
            <p className="user-item-list-desc">{T.translate('drug-app.descLine1')}</p>
            <p className="user-item-list-desc user-item-list-desc-last">{T.translate('drug-app.descLine2')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine1')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine2')}</p>
            <p className="user-item-list-detail">{T.translate('drug-app.detailLine3')}</p>
            <p className="user-item-list-detail user-item-list-detail-last">{T.translate('drug-app.detailLine4')}</p>
            <div className="user-item-link">
              <p><Link to="/service/drug-app">{T.translate('link-to-detail')}</Link></p>
            </div>
          </section>
          <img width="100%" alt="DrugApp" src={DrugApp}/>
        </article>

        <article className="user-item-article">
          <section>
            <p className="user-item-list-name">{T.translate('palm-phar.name')}</p>
            <p className="user-item-list-desc">{T.translate('palm-phar.descLine1')}</p>
            <p className="user-item-list-desc user-item-list-desc-last">{T.translate('palm-phar.descLine2')}</p>
            <p className="user-item-list-detail">{T.translate('palm-phar.detailLine1')}</p>
            <p className="user-item-list-detail user-item-list-detail-last">{T.translate('palm-phar.detailLine2')}</p>
            <div className="user-item-link">
              <p><Link to="/service/palm-pharmacy">{T.translate('link-to-detail')}</Link></p>
            </div>
          </section>
          <img width="100%" alt="PalmPhar" src={PalmPhar}/>
        </article>

        <div className="user-app-download-area">
          <div className="user-app-gen-pra" onMouseEnter={this.onMouseEnterGenPra} onMouseLeave={this.onMouseLeaveGenPra}>
            {this.state.nodeGenPra}

          </div>

          <div className="user-app-sky-pra">
            {this.state.nodeSkyPra}

          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
