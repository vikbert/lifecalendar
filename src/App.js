import React, {memo} from 'react';
import moment from 'moment';

import HeaderIcon from './components/HeaderIcon';
import getDates from './utils/dates';
import Loading from "./components/Loading";
require('./utils/storage');

const { lazy, Suspense } = React;
const ListWrapper = lazy(() => import('./components/ListWrapper'));

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
            <Suspense fallback={<Loading/>}>
                <ListWrapper days={viewData} />
            </Suspense>
        </div>
    );
}

export default memo(App);
