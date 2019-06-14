import React, {memo} from 'react';
import moment from 'moment';
import * as d3 from 'd3';
import ListWrapper from './components/ListWrapper';
import HeaderIcon from './components/HeaderIcon';

function App() {
  const now = moment().startOf("day").toDate();
  const birthday = new Date(1978, 1, 9);
  const yearLater = moment(birthday).startOf("day").add(80, "year").toDate();
  const data = d3.timeDays(birthday, yearLater).map((element) => {
      return {
        isPast: moment(element).isBefore(now),
        isCurrent: moment(element).isSame(now),
        date: element,
      };
  });
  console.log(data);

  return (
    <div className="App">
      <HeaderIcon top={2} right={2}/>
      <ListWrapper days={data}></ListWrapper>
    </div>
  );
}

export default memo(App);
