import React, {memo} from 'react';
import moment from 'moment';
import ListWrapper from './components/ListWrapper';
import HeaderIcon from './components/HeaderIcon';
import getDates from './utils/dates';

require('./utils/storage');

function App() {
    let currentMoment = moment().startOf("day");
    const birthday = new Date(1978, 9, 9);
    const yearLater = moment(birthday).add(65, "year").startOf("day").toDate();
    const data = getDates(moment(birthday), yearLater);
    window.appStorage.save({
        dataCaching: data,
        currentDay: currentMoment.format('YYYY-MM-DD'),
    });

    const viewData = Object.values(data);

    return (
        <div className="App">
            <HeaderIcon top={2} right={2}/>
            <ListWrapper days={viewData} />
        </div>
    );
}

export default memo(App);
