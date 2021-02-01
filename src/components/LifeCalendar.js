import React, { memo, useState } from 'react';
import moment from 'moment';
import HeaderIcon from './HeaderIcon';
import getDates from '../utils/dates';
import Loading from './Loading';
require('../utils/storage');

// lazy load list component
const { lazy, Suspense } = React;
const ListWrapper = lazy(() => import('./ListWrapper'));

function LifeCalendar() {
  let currentMoment = moment().startOf('day');
  const birthday = new Date(1978, 9, 9);
  const yearLater = moment(birthday).add(65, 'year').startOf('day').toDate();
  const data = getDates(moment(birthday), yearLater);
  window.appStorage.save('LIVE_CALENDAR_DATES', {
    dataCaching: data,
    currentDay: currentMoment.format('YYYY-MM-DD'),
  });

  const [open, setOpen] = useState(false);

  const viewData = Object.values(data);

  const togglePopup = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <header className="header">
        <nav className="topbar">
          <div className="emoji">⏰</div>
        </nav>
      </header>
      <div className={open ? 'overlay open' : 'overlay'}>
        <div className="popup">
          <div className="title">
            <h3>What is the LifeCalendar for?</h3>
            <p>
              This is one of my favorite talk on TED that is about the{' '}
              <strong>Procrastination</strong>. I highly recommend you to have a
              look on it.
            </p>
          </div>
          <div className="content">
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/k8YEUiz7uQg?start=782"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="action">
            <button className="is-outlined is-rounded is-cleared" onClick={ togglePopup }>close</button>
          </div>
        </div>
      </div>
      <HeaderIcon top={2} right={2} />
      <Suspense fallback={<Loading />}>
        <ListWrapper days={viewData} />
      </Suspense>
      <div className="container toggle-container">
        <button className="is-secondary is-rounded" onClick={togglePopup}>
          What is LifeCalendar?
        </button>
      </div>
    </div>
  );
}

export default memo(LifeCalendar);
