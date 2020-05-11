/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import schedule from 'node-schedule';
import { fcmsend } from './fcm';
import timetableForFirstGraders from '../timetable/first.json';
import timetableForSecondGraders from '../timetable/second.json';

const zoomurl = 'zoommtg://zoom.us/join?action=join&confno=';

interface ISubject {
  name: string;
  url: string;
}

interface IDay {
  day: string;
  subjects: ISubject[];
}

interface IClassroom {
  homeroom?: ISubject;
  timetable?: IDay[];
}

export async function _homeroomCall(isStart: boolean) {
  [timetableForFirstGraders, timetableForSecondGraders].forEach((timetable, timetableIndex: number) => {
    const grade = timetableIndex + 1;

    Object
      .values(timetable)
      .forEach((classroom: IClassroom, index: number) => {
        if (!classroom.homeroom) {
          return;
        }
        const { homeroom: { name, url } } = classroom;
        const topicCode = `${grade}${index + 1}`;
        fcmsend(`${isStart ? '조회' : '종례'} 시작 5분 전입니다!`, name, url, topicCode);
      });
  });
}

async function _classCall(day: number, classNumberIndex: number) {
  [timetableForFirstGraders, timetableForSecondGraders].forEach((timetableList, timetableIndex: number) => {
    const grade = timetableIndex + 1;

    Object.values(timetableList).forEach((classroom: IClassroom, index: number) => {
      if (!classroom.timetable) {
        return;
      }
      const { timetable } = classroom;
      const { subjects } = timetable[day];
      const currentSubject = subjects[classNumberIndex];
      const topicCode = `${grade}${index + 1}`;

      const { name, url } = currentSubject;
      fcmsend(`${classNumberIndex}교시 시작 5분 전입니다!`, name, url, topicCode);
      console.log(`${classNumberIndex}교시 시작 5분 전입니다!`),
    });
  });
}

const homeroomStartCall = () => _homeroomCall(true);
const homeroomEndCall = () => _homeroomCall(false);

const notifiers = [...Array(7)].map((_, index) => (day: number) => _classCall(day - 1, index));

const notifyTimes = [
  { hour: 8, minute: 55 },
  { hour: 9, minute: 55 },
  { hour: 10, minute: 55 },
  { hour: 11, minute: 55 },
  { hour: 13, minute: 45 },
  { hour: 14, minute: 45 },
  { hour: 15, minute: 45 },
];

const classes = notifiers.map((notifier, index) => ({
  notifier,
  ...notifyTimes[index],
}));

export const registerSchedulers = () => {
  const days = [1, 2, 3, 4, 5];
  days.forEach((dayOfWeek: number) => {
    console.log(`\n===== For day ${dayOfWeek} ===`);
    schedule.scheduleJob(
      { hour: 8, minute: 40, dayOfWeek },
      homeroomStartCall,
    );
    console.log('🗓 Registered homeroom start call');

    const isWednesday = dayOfWeek === 3;
    classes.forEach(({ hour, minute, notifier }, classNumberIndex) => {
      const isSeventhClass = classNumberIndex === 6;
      if (isWednesday && isSeventhClass) {
        return;
      }

      schedule.scheduleJob(
        { hour, minute, dayOfWeek },
        () => notifier(dayOfWeek),
      );
    });
    console.log('🗓 Registered each class for weekdays');

    schedule.scheduleJob(
      { hour: isWednesday ? 15 : 16, minute: 45, dayOfWeek },
      homeroomEndCall,
    );
    console.log('🗓 Registered homeroom end call');
  });
  console.log('\n');
};
