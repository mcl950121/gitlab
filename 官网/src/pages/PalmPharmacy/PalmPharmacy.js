import React, { Component } from 'react';
import ItemImage from '../../components/ItemImage/ItemImage';
import PalmPhar1 from '../../images/palm_phar_1.jpg';
import PalmPhar2 from '../../images/palm_phar_2.jpg';
import PalmPhar3 from '../../images/palm_phar_3.png';
import './PalmPharmacy.css';

class PalmPharmacy extends Component {

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
          '线上药店定制专家，打造属于您的专属药店'
        ]
      },

      'img2': {
        'content': [
          '渠道不单单是线下，线上资源更加广阔'
        ]
      },

      'img3': {
        'content': [
          '为连锁药店提供更专业的移动端战略解决方案'
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
      <div>
        <ItemImage img={PalmPhar1} content={paragraph.img1.content} />
        <ItemImage img={PalmPhar2} content={paragraph.img2.content} />
        <ItemImage img={PalmPhar3} content={paragraph.img3.content} />
      </div>
    );
  }
}

export default PalmPharmacy;
