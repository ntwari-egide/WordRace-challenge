/**
 * @author: ntwari egide
 * @description: score table re usable component
 */

import {Table } from "antd";

export const ScoreTableComponent = ({dataSource}) => {

      const columns = [
        {
          title: 'Score',
          dataIndex: 'score',
          key: 'score',
        },
        {
          title: 'Level',
          dataIndex: 'level',
          key: 'level',
        },
        {
          title: 'Speed',
          dataIndex: 'speed',
          key: 'speed',
        },
        {
            title: 'Played At',
            dataIndex: 'playedAt',
            key: 'playedAt',
            render: text => <p>{dateparser(text)}</p>
        },
      ];

    const dateparser = (datepassed) => {
        let date = new Date(datepassed);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return year+'-' + month + '-'+dt + ' '+date.getHours()+ ':'+ date.getMinutes()+':'+date.getSeconds()
    }
      
    return  <Table dataSource={dataSource} columns={columns} />;
}