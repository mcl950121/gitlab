import React, { Component } from 'react';
import { Link } from 'react-router';
import T from 'i18n-react';
import { Table } from 'react-bootstrap';
import BackLink from '../../components/BackLink/BackLink';
import './JobList.css';

class JobList extends Component {

  componentWillMount() {
    // 滚动条回到顶部
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {

    var
      listJobs,
      jobDetail,
      totalJobs;

    // job lists data
    const jobs = [
      {
        'id':                 1,
        'title':              'Android工程师',
        'category':           '开发',
        'place':              '天津'
      },

      {
        'id':                 2,
        'title':              'IOS工程师',
        'category':           '开发',
        'place':              '天津'
      },

      {
        'id':                 3,
        'title':              'JAVA后端工程师',
        'category':           '开发',
        'place':              '天津'
      },

      {
        'id':                 4,
        'title':              'IT运维工程师',
        'category':           '运维',
        'place':              '天津'
      },

      {
        'id':                 5,
        'title':              'IT测试工程师',
        'category':           '测试',
        'place':              '天津'
      },

      {
        'id':                 6,
        'title':              '产品经理',
        'category':           '产品',
        'place':              '天津'
      },

      {
        'id':                 7,
        'title':              '产品助理',
        'category':           '产品',
        'place':              '天津'
      },

      {
        'id':                 8,
        'title':              'UI设计师',
        'category':           '设计',
        'place':              '天津'
      }
    ];

    listJobs = jobs.map((jobs) => {
      jobDetail = '/recruit/job-lists/' + jobs.id;

      return (
        <tr key={jobs.id}>
          <td>
            <Link to={jobDetail}>{jobs.title}</Link>
          </td>
          <td>{jobs.category}</td>
          <td>{jobs.place}</td>
        </tr>
      );
    });

    totalJobs = (function () {
      return jobs.length;
    }());

    T.setTexts({
      'total-jobs':               '个正在招聘的职位',

      'job': {
        'title':                  '工作名称',
        'category':               '工作类别',
        'place':                  '工作地点'
      }
    });

    return (
      <div className="user-job">
        <BackLink backLink="/recruit" />

        <p className="user-total-jobs">{totalJobs}{T.translate('total-jobs')}</p>

        <Table responsive className="user-job-table">
          <thead>
            <tr>
              <th>{T.translate('job.title')}</th>
              <th>{T.translate('job.category')}</th>
              <th>{T.translate('job.place')}</th>
            </tr>
          </thead>
          <tbody>
            {listJobs}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default JobList;
