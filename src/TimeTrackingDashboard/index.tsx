import React, { useEffect, useState } from 'react';
import Profile from './components/profile';
import Tabs from './components/tabs';
import ActivityGrid from './components/activity_grid';

import { MockProfile, TIME_FRAME } from './consts';
import { ActivityProps } from './components/activity';
import Footer from '../common/components/footer';
import data from './data.json';

import './index.scss';
import rootStyle from './_export.modules.scss';

function TimeTrackingDashbaord() {
  const [timeframe, setTimeframe] = useState<TIME_FRAME>(TIME_FRAME.MONTHLY);
  const [avtivityData, setActivityData] = useState<ActivityProps[]>([]);

  useEffect(() => {
    setActivityData(data.map(({ title, timeframes: tfData }, index) => (
      {
        activity: index,
        title,
        data: tfData,
      }
    )));
  }, []);

  return (
    <>
      <div
        id="TimeTrackingDashboard"
        className="py-10 mx-auto p-4 flex flex-col lg:flex-row justify-center items-center"
      >
        <style>{`body {background-color: ${rootStyle.BGPrimary}; color: ${rootStyle.TextPrimary}`}</style>
        <div className="Card-group min-w-0">
          <Profile {...MockProfile} />
          <Tabs timeframe={timeframe} setTimeframe={setTimeframe} />
        </div>
        <div className="min-w-0"><ActivityGrid activities={avtivityData} timeframe={timeframe} /></div>
      </div>
      <Footer />
    </>
  );
}

export default TimeTrackingDashbaord;