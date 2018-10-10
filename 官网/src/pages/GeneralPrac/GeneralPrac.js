import React, { Component } from 'react';
import DivideLine from '../../components/DivideLine/DivideLine';
import GeneralPrac1 from '../../images/general_prac_1.jpg';
import GeneralPrac2 from '../../images/general_prac_2.png';
import GeneralPrac3 from '../../images/general_prac_3.png';
import GeneralPrac4 from '../../images/general_prac_4.png';
import GeneralPrac5 from '../../images/general_prac_5.png';
import './GeneralPrac.css';

class GeneralPrac extends Component {

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
          '简单方便的在线问诊',
          '节省医院排队时间，有问题及时问大夫',
          '了解医生的工作时间，方便线下诊疗，降低得慢性疾病的概率'
        ]
      },

      'img2': {
        'content': [
          '更好的了解药品',
          '扫一扫电子监管码',
          '记录用药，了解药品产地'
        ]
      },

      'img3': {
        'content': [
          '专业的医疗服务',
          '专家坐诊，值得信赖的明星医生',
          '提供更加专业的医疗服务'
        ]
      },

      'img4': {
        'content': [
          '“购”健康”',
          '商城购买各种健康产品',
          '更多超值商品陆续上线'
        ]
      },

      'img5': {
        'content': [
          '社区医生',
          '致力于提供社区医疗云服务与分级诊疗整体方案',
          '扫描二维码下载社区医生APP'
        ]
      }
    }

    this.setState({
      paragraph: paragraph
    })
  }

  render() {
    const paragraph = this.state.paragraph;

    return (
      <div className="general-prac">
        <section className="general-prac-section1">
          <div>
            <DivideLine content={paragraph.img1.content}/>
          </div>
          <img width="100%" alt="general-prac-1" src={GeneralPrac1}/>
        </section>

        <section className="general-prac-section2">
          <div>
            <DivideLine content={paragraph.img2.content}/>
          </div>
          <img width="100%" alt="general-prac-2" src={GeneralPrac2}/>
        </section>

        <section className="general-prac-section3">
          <div>
            <DivideLine content={paragraph.img3.content}/>
          </div>
          <img width="100%" alt="general-prac-3" src={GeneralPrac3}/>
        </section>

        <section className="general-prac-section4">
          <div>
            <DivideLine content={paragraph.img4.content}/>
          </div>
          <img width="100%" alt="general-prac-4" src={GeneralPrac4}/>
        </section>

        <section className="general-prac-section5">
          <div>
            <DivideLine content={paragraph.img5.content}/>
          </div>
          <img width="100%" alt="general-prac-5" src={GeneralPrac5}/>
        </section>
      </div>
    );
  }
}

export default GeneralPrac;
