/**
 * @author: ntwari egide
 * @description: score table re usable component
 */

export const ScoreTableComponent = () => {
    const dataSource = [{"_id":"61745eb2408da8af0c7f27ff","score":100,"level":3,"speed":"3X","playedAt":"2021-10-23T19:12:50.248Z","__v":0},{"_id":"61746238b87705a0a22b08c4","score":120,"level":2,"speed":"3X","playedAt":"2021-10-23T19:27:52.956Z","__v":0},{"_id":"617463c2d36ac1913a129b23","score":20,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:26.401Z","__v":0},{"_id":"617463c6d36ac1913a129b25","score":30,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:30.054Z","__v":0},{"_id":"617463cbd36ac1913a129b27","score":60,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:35.106Z","__v":0},{"_id":"617463d2d36ac1913a129b29","score":20,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:42.832Z","__v":0},{"_id":"617463d6d36ac1913a129b2b","score":80,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:46.401Z","__v":0},{"_id":"617463dad36ac1913a129b2d","score":40,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:50.909Z","__v":0},{"_id":"617463e0d36ac1913a129b2f","score":160,"level":2,"speed":"3X","playedAt":"2021-10-23T19:34:56.596Z","__v":0},{"_id":"617463edd36ac1913a129b31","score":160,"level":2,"speed":"2X","playedAt":"2021-10-23T19:35:09.241Z","__v":0},{"_id":"617463f2d36ac1913a129b33","score":180,"level":2,"speed":"2X","playedAt":"2021-10-23T19:35:14.517Z","__v":0},{"_id":"617463fad36ac1913a129b35","score":380,"level":2,"speed":"2X","playedAt":"2021-10-23T19:35:22.883Z","__v":0},{"_id":"61757fb3af4b763213dbbe14","score":15,"level":2,"speed":"2X","playedAt":"2021-10-24T15:45:55.522Z","__v":0},{"_id":"61757fb4af4b763213dbbe16","score":15,"level":2,"speed":"2X","playedAt":"2021-10-24T15:45:56.264Z","__v":0}]
      
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
        },
      ];
      
    return  <Table dataSource={dataSource} columns={columns} />;
}