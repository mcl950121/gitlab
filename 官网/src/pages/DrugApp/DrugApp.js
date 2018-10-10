import React, { Component } from 'react';
import T from 'i18n-react';
import DivideLine from '../../components/DivideLine/DivideLine';
import DrugApp1 from '../../images/drug_app_1.jpg';
import DrugApp2 from '../../images/drug_app_2.png';
import DrugApp3 from '../../images/drug_app_3.png';
import DrugApp4 from '../../images/drug_app_4.png';
import DrugApp5 from '../../images/drug_app_5.png';
import './DrugApp.css';

class DrugApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paragraph: null
    };
  }

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const paragraph = {
      'img1': {
        'content': [
          '安全用药，从“知药”开始',
          '扫描药品监管码，了解药品信息，辨别药品真伪，记录用药'
        ]
      },

      'img2': {
        'content': [
          '买到药品，扫一扫',
          '知药帮你记录用药'
        ]
      },

      'img3': {
        'content': [
          '拿到药品，扫一扫',
          '知药帮你辨别真伪'
        ]
      },

      'img4': {
        'content': [
          '收到药品，扫一扫',
          '知药帮你了解药品信息'
        ]
      },

      'img5': {
        'content': [
          '知药APP',
          '你的药品管家，记录用药每一天'
        ]
      }
    }

    this.setState({
      paragraph: paragraph
    })
  }

  render() {

    T.setTexts({
      'online-soon':                '即将上线'
    });

    const paragraph = this.state.paragraph;

    return (
      <div className="user-drug-app">
        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img1.content} />
          </div>
          <img width="100%" alt="drug-app-1" src={DrugApp1}/>
        </section>

        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img2.content} />
          </div>
          <img width="100%" alt="drug-app-2" src={DrugApp2}/>
        </section>

        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img3.content} />
          </div>
          <img width="100%" alt="drug-app-3" src={DrugApp3}/>
        </section>

        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img4.content} />
          </div>
          <img width="100%" alt="drug-app-4" src={DrugApp4}/>
        </section>

        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img5.content} />
          </div>
          <img width={203} alt="drug-app-5" src={DrugApp5}/>
          <p>{T.translate('online-soon')}</p>
        </section>
      </div>
    );
  }
}

export default DrugApp;
