import React, { Component } from 'react';
import DivideLine from '../../components/DivideLine/DivideLine';
import SkyPhar1 from '../../images/skyline_prac_1.jpg';
import SkyPhar2 from '../../images/skyline_prac_2.png';
import './SkylinePrac.css';

class SkylinePrac extends Component {

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
          '二、三甲医院医生在线问诊',
          '节省排队挂号和就医等候时间，复诊更加快捷'
        ]
      },

      'img2': {
        'content': [
          '专家看病 不再困难',
          '提供专业的医疗服务，有问题及时问大夫'
        ]
      },

      'img3': {
        'content': [
          '天涯医生 敬请期待...'
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
      <div className="user-skyline-prac">
        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img1.content} />
          </div>
          <img width="100%" alt="skyline-prac-1" src={SkyPhar1}/>
        </section>

        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img2.content} />
          </div>
          <img width="100%" alt="skyline-prac-2" src={SkyPhar2}/>
        </section>

        <section>
          <div className="user-para">
            <DivideLine content={paragraph.img3.content} />
          </div>
        </section>
      </div>
    );
  }
}

export default SkylinePrac;
