import React, { Component } from 'react';
import DivideLine from '../../components/DivideLine/DivideLine';
import BackLink from '../../components/BackLink/BackLink';
import './JobDetail.css';

class JobDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobDetail: null
    };
  }

  componentWillMount() {

    var
      jobId,
      setJobDetail;

    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // get the job id
    jobId = this.props.params.id;

    // all job details
    const jobs = [
      {
        'job-id':               1,

        'title':                'Android工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、根据产品需求文档，开发移动平台的应用软件',
            '2、负责对原有产品进行维护和升级'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、掌握扎实的计算机科学理论知识',
            '2、熟悉Java编程语言',
            '3、熟悉Android SDK开发环境及API调用',
            '4、熟悉Java网络编程',
            '5、具备良好的英文资料阅读能力',
            '6、具备良好的沟通能力和团队合作精神'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               2,

        'title':                'IOS工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、根据产品需求文档，开发移动平台的应用软件',
            '2、负责对原有产品进行维护和升级'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、掌握扎实的计算机科学理论知识',
            '2、熟悉C/C++和Objective-C等编程语言',
            '3、熟悉iOS SDK开发环境及API调用',
            '4、熟悉网络编程',
            '5、具备良好的英文资料阅读能力',
            '6、具备良好的沟通能力和团队合作精神'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               3,

        'title':                'JAVA后端工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、参与产品服务器后端产品开发与维护',
            '2、参与项目规划及具体实施方案的制定',
            '3、参与系统的架构分析和设计',
            '4、根据开发进度和任务分配完成相应模块的设计、开发及Bug修正等任务',
            '5、负责公众号后台以及APP软件后台维护和更新',
            '6、可独立负责项目的Web前端开发和维护（加分项）'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、熟练掌握Java基础、Java数据结构及常用设计模式，理解面向对象的编程思想',
            '2、熟练使用Spring、springMVC、MyBatis、Hibernate等常用开发框架，熟悉Rest/Webservice，对设计模式有深入理解',
            '3、熟悉Linux常用命令，能独立在上面进行开发，测试和部署',
            '4、掌握大型数据库如Mysql/Oracle/SQLServe等的开发，能熟练运用sql语言，sql优化等',
            '5、了解jquery、javascript、html5、css等前台技术',
            '6、具备丰富的大中型项目的研发经验，有系统需求分析、设计经验者、团队管理经验优先',
            '7、较好的文字能力，能阅读和编写技术文档',
            '8、具备良好的沟通能力、团队协作能力及高度的责任心'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               4,

        'title':                'IT运维工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、负责公司内部电脑、打印机、电话等IT设备硬件维护及技术支持',
            '2、负责公司内部服务器的维护管理',
            '3、负责公司相关项目的服务器的托管、部署和维护',
            '4、在项目实施过程中整理相关资料文档，协助完成项目验收',
            '5、协助或负责完成客户培训，并提供现场技术支持',
            '6、参与服务器的系统监控、资源管理、自动化等运维系统的建设'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、有一定计算机软硬件基础',
            '2、熟悉Windows客户端和Ubuntu Server的安装和维护',
            '3、熟悉MySQL的应用和备份',
            '4、有责任心，有较强的学习能力'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               5,

        'title':                'IT测试工程师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、充分理解需求，根据需求规格说明书以及软件设计说明书编写高质量的测试用例',
            '2、能够结合测试用例进行手工（黑盒/灰盒）测试以及自动化测试',
            '3、完整地记录测试结果，根据测试结果，给出测试分析报告',
            '4、能够提升手机客户端/服务器测试的质量和效率'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、掌握流行的测试理论，熟悉各种测试方法和测试技巧，能够使用工具进行性能测试和安全性测试',
            '2、善于团队合作，工作积极主动，执行能力强，工作细致并具有责任心和耐心',
            '3、很强的学习能力和技术钻研能力，良好的沟通能力',
            '4、善于团队合作，工作积极主动，执行能力强，能通过学习解决工作中的测试技术难题',
            '5、至少熟练使用一种bug管理工具',
            '6、能够熟悉使用Loadrunner等性能测试工具者优先',
            '7、最好是有IT测试工作经验，熟悉手机应用测试优先'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               6,

        'title':                '产品经理',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、核心工作为根据产品策略负责移动端产品、管理系统的需求分析、市场调研、用户调研、需求实现和交互设计',
            '2、关注业内动态，研究运营数据和用户反馈，制订产品优化方案，以提升用户体验',
            '3、与多部门协同，推进产品迭代、项目管理、敏捷规划，负责产品验收，确保产品开发落地',
            '4、整理相应的技术文件，参与产品交互界面讨论和制定',
            '5、跟踪产品发布后的使用情况并及时反馈，收集产品改进需求意见'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、对新鲜事物敏感，热爱并关注移动互联网的新事物和用户行为变化',
            '2、具备良好的原型制作、需求文档PRD撰写能力，熟练操作office、Axure等软件',
            '3、熟悉交互设计各种方法，能够快速提供高质量的产品原型、流程图、线框图等清晰表达设计方案',
            '4、有互联网医疗健康领域相关经验者优先',
            '5、良好的产品文档撰写能力，理解技术语言，能有效地与开发人员沟通',
            '6、具备良好的团队协作意识，沟通协调能力、逻辑分析能力和学习能力，能及时响应和处理产品或用户反馈的问题'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               7,

        'title':                '产品助理',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、协助进行产品需求分析，完成原型设计，撰写产品需求文档',
            '2、关注业内动态，协助进行竞品分析，改善用户体验',
            '3、跟踪产品开发进度，明确开发人员交付的内容',
            '4、整理相应的技术文件，参与产品交互界面讨论和制定',
            '5、跟踪产品发布后的使用情况并及时反馈，收集产品改进需求意见',
            '6、配合协助公司其他项目进行'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、关注用户体验，对新鲜事物敏感，对新型产品有自己的见解',
            '2、能够熟练使用office工具、Axure等原型设计软件，能编写规范、详细文档',
            '3、有互联网医疗健康领域相关经验者优先',
            '4、具备良好的团队协作意识，沟通协调能力、逻辑分析能力和学习能力'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },

      {
        'job-id':               8,

        'title':                'UI设计师',

        'duty': {
          'name':               '岗位职责：',

          'content': [
            '1、负责手机客户端、网站产品的UI设计工作，注重表现力和设计细节',
            '2、为界面、图标、动画等提供高质量和创造性的设计方案',
            '3、熟练运用各种设计方法进行快速设计和迭代',
            '4、关注细致入微的用户体验，对产品进行持续优化，使用户操作更趋于人性化'
          ]
        },

        'requirement': {
          'name':                '职位要求：',

          'content': [
            '1、具备丰富的设计理论知识，对设计趋势有敏锐的洞察力和领悟能力',
            '2、具备iOS、Android平台产品的设计经验和快速学习能力',
            '3、具备良好的审美能力、深厚的美术功底，有较强的平面设计和网页设计能力',
            '4、良好的合作态度及团队精神，并富有工作激情、创造力和高度责任感',
            '5、请随简历附上代表作品或相关链接'
          ]
        },

        'delivery': {
          'name':                 '投递方式',

          'content':              '详细个人介绍与简历投递至',

          'email':                'mdfmsys@yeah.net'
        }
      },
    ];

    setJobDetail = jobs[Number(jobId) - 1];

    this.setState({
      jobDetail: setJobDetail
    })

  }

  render() {

    const jobDetail = this.state.jobDetail;

    return (
      <div className="user-job-detail">
        <BackLink backLink="/recruit/job-lists" />

        <div className="user-job-detail-content">
          <h3>{jobDetail.title}</h3>

          <section className="user-job-detail-duty">
            <h4>{jobDetail.duty.name}</h4>
            <DivideLine content={jobDetail.duty.content} />
          </section>

          <section className="user-job-detail-requirement">
            <h4>{jobDetail.requirement.name}</h4>
            <DivideLine content={jobDetail.requirement.content} />
          </section>

          <section className="user-job-detail-delivery">
            <h4>{jobDetail.delivery.name}</h4>
            <DivideLine content={jobDetail.delivery.content} />
            <p className="user-job-detail-delivery-email">{jobDetail.delivery.email}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default JobDetail;
