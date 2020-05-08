/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import schedule from 'node-schedule';
import fcmsend from './fcm.ts';
import timetable_1 from '../timetable/first.json';
import timetable_2 from '../timetable/second.json';

const timetable1:any = timetable_1;
const timetable2:any = timetable_2;

const timestamp11 = timetable1[1][0].timetable;
const timestamp12 = timetable1[2][0].timetable;
const timestamp13 = timetable1[3][0].timetable;
const timestamp14 = timetable1[4][0].timetable;
const timestamp15 = timetable1[5][0].timetable;
const timestamp16 = timetable1[6][0].timetable;
const timestamp21 = timetable2[1][0].timetable;
const timestamp22 = timetable2[2][0].timetable;
const timestamp23 = timetable2[3][0].timetable;
const timestamp24 = timetable2[4][0].timetable;
const timestamp25 = timetable2[5][0].timetable;
const timestamp26 = timetable2[6][0].timetable;

async function homeroomcall(day:number) {
  const hrname11:string = timetable1[1][0]['homeroom-name'];
  const hrurl11 = timetable1[1][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname11, hrurl11, 11);
  const hrname12 = timetable1[2][0]['homeroom-name'];
  const hrurl12 = timetable1[2][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname12, hrurl12, 12);
  const hrname13 = timetable1[3][0]['homeroom-name'];
  const hrurl13 = timetable1[3][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname13, hrurl13, 13);
  const hrname14 = timetable1[4][0]['homeroom-name'];
  const hrurl14 = timetable1[4][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname14, hrurl14, 14);
  const hrname15 = timetable1[5][0]['homeroom-name'];
  const hrurl15 = timetable1[5][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname15, hrurl15, 15);
  const hrname16 = timetable1[6][0]['homeroom-name'];
  const hrurl16 = timetable1[6][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname16, hrurl16, 16);
  const hrname21 = timetable2[1][0]['homeroom-name'];
  const hrurl21 = timetable2[1][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname21, hrurl21, 21);
  const hrname22 = timetable2[2][0]['homeroom-name'];
  const hrurl22 = timetable2[2][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname22, hrurl22, 22);
  const hrname23 = timetable2[3][0]['homeroom-name'];
  const hrurl23 = timetable2[3][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname23, hrurl23, 23);
  const hrname24 = timetable2[4][0]['homeroom-name'];
  const hrurl24 = timetable2[4][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname24, hrurl24, 24);
  const hrname25 = timetable2[5][0]['homeroom-name'];
  const hrurl25 = timetable2[5][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname25, hrurl25, 25);
  const hrname26 = timetable2[6][0]['homeroom-name'];
  const hrurl26 = timetable2[6][0]['homeroom-url'];
  fcmsend('조회 시작 5분전 입니다!', hrname26, hrurl26, 26);
}

async function firstclasscall(day:number) {
  const firstclass11 = timestamp11[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass11.name, firstclass11.url, 11);
  const firstclass12 = timestamp12[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass12.name, firstclass12.url, 12);
  const firstclass13 = timestamp13[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass13.name, firstclass13.url, 13);
  const firstclass14 = timestamp14[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass14.name, firstclass14.url, 14);
  const firstclass15 = timestamp15[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass15.name, firstclass15.url, 15);
  const firstclass16 = timestamp16[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass16.name, firstclass16.url, 16);
  const firstclass21 = timestamp21[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass21.name, firstclass21.url, 21);
  const firstclass22 = timestamp22[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass22.name, firstclass22.url, 22);
  const firstclass23 = timestamp23[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass23.name, firstclass23.url, 23);
  const firstclass24 = timestamp24[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass24.name, firstclass24.url, 24);
  const firstclass25 = timestamp25[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass25.name, firstclass25.url, 25);
  const firstclass26 = timestamp26[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', firstclass26.name, firstclass26.url, 26);
}
async function secondclasscall(day:number) {
  const secondclass11 = timestamp11[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass11.name, secondclass11.url, 11);
  const secondclass12 = timestamp12[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass12.name, secondclass12.url, 12);
  const secondclass13 = timestamp13[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass13.name, secondclass13.url, 13);
  const secondclass14 = timestamp14[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass14.name, secondclass14.url, 14);
  const secondclass15 = timestamp15[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass15.name, secondclass15.url, 15);
  const secondclass16 = timestamp16[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass16.name, secondclass16.url, 16);
  const secondclass21 = timestamp21[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass21.name, secondclass21.url, 21);
  const secondclass22 = timestamp22[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass22.name, secondclass22.url, 22);
  const secondclass23 = timestamp23[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass23.name, secondclass23.url, 23);
  const secondclass24 = timestamp24[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass24.name, secondclass24.url, 24);
  const secondclass25 = timestamp25[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass25.name, secondclass25.url, 25);
  const secondclass26 = timestamp26[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', secondclass26.name, secondclass26.url, 26);
}
async function thirdclasscall(day:number) {
  const thirdclass11 = timestamp11[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass11.name, thirdclass11.url, 11);
  const thirdclass12 = timestamp12[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass12.name, thirdclass12.url, 12);
  const thirdclass13 = timestamp13[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass13.name, thirdclass13.url, 13);
  const thirdclass14 = timestamp14[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass14.name, thirdclass14.url, 14);
  const thirdclass15 = timestamp15[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass15.name, thirdclass15.url, 15);
  const thirdclass16 = timestamp16[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass16.name, thirdclass16.url, 16);
  const thirdclass21 = timestamp21[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass21.name, thirdclass21.url, 21);
  const thirdclass22 = timestamp22[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass22.name, thirdclass22.url, 22);
  const thirdclass23 = timestamp23[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass23.name, thirdclass23.url, 23);
  const thirdclass24 = timestamp24[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass24.name, thirdclass24.url, 24);
  const thirdclass25 = timestamp25[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass25.name, thirdclass25.url, 25);
  const thirdclass26 = timestamp26[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', thirdclass26.name, thirdclass26.url, 26);
}
async function fourthclasscall(day:number) {
  const fourthclass11 = timestamp11[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass11.name, fourthclass11.url, 11);
  const fourthclass12 = timestamp12[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass12.name, fourthclass12.url, 12);
  const fourthclass13 = timestamp13[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass13.name, fourthclass13.url, 13);
  const fourthclass14 = timestamp14[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass14.name, fourthclass14.url, 14);
  const fourthclass15 = timestamp15[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass15.name, fourthclass15.url, 15);
  const fourthclass16 = timestamp16[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass16.name, fourthclass16.url, 16);
  const fourthclass21 = timestamp21[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass21.name, fourthclass21.url, 21);
  const fourthclass22 = timestamp22[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass22.name, fourthclass22.url, 22);
  const fourthclass23 = timestamp23[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass23.name, fourthclass23.url, 23);
  const fourthclass24 = timestamp24[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass24.name, fourthclass24.url, 24);
  const fourthclass25 = timestamp25[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass25.name, fourthclass25.url, 25);
  const fourthclass26 = timestamp26[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', fourthclass26.name, fourthclass26.url, 26);
}
async function fifthclasscall(day:number) {
  const fifthclass11 = timestamp11[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass11.name, fifthclass11.url, 11);
  const fifthclass12 = timestamp12[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass12.name, fifthclass12.url, 12);
  const fifthclass13 = timestamp13[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass13.name, fifthclass13.url, 13);
  const fifthclass14 = timestamp14[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass14.name, fifthclass14.url, 14);
  const fifthclass15 = timestamp15[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass15.name, fifthclass15.url, 15);
  const fifthclass16 = timestamp16[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass16.name, fifthclass16.url, 16);
  const fifthclass21 = timestamp21[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass21.name, fifthclass21.url, 21);
  const fifthclass22 = timestamp22[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass22.name, fifthclass22.url, 22);
  const fifthclass23 = timestamp23[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass23.name, fifthclass23.url, 23);
  const fifthclass24 = timestamp24[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass24.name, fifthclass24.url, 24);
  const fifthclass25 = timestamp25[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass25.name, fifthclass25.url, 25);
  const fifthclass26 = timestamp26[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', fifthclass26.name, fifthclass26.url, 26);
}
async function sixthclasscall(day:number) {
  const sixthclass11 = timestamp11[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass11.name, sixthclass11.url, 11);
  const sixthclass12 = timestamp12[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass12.name, sixthclass12.url, 12);
  const sixthclass13 = timestamp13[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass13.name, sixthclass13.url, 13);
  const sixthclass14 = timestamp14[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass14.name, sixthclass14.url, 14);
  const sixthclass15 = timestamp15[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass15.name, sixthclass15.url, 15);
  const sixthclass16 = timestamp16[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass16.name, sixthclass16.url, 16);
  const sixthclass21 = timestamp21[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass21.name, sixthclass21.url, 21);
  const sixthclass22 = timestamp22[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass22.name, sixthclass22.url, 22);
  const sixthclass23 = timestamp23[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass23.name, sixthclass23.url, 23);
  const sixthclass24 = timestamp24[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass24.name, sixthclass24.url, 24);
  const sixthclass25 = timestamp25[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass25.name, sixthclass25.url, 25);
  const sixthclass26 = timestamp26[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', sixthclass26.name, sixthclass26.url, 26);
}
async function seventhclasscall(day:number) {
  const seventhclass11 = timestamp11[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass11.name, seventhclass11.url, 11);
  const seventhclass12 = timestamp12[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass12.name, seventhclass12.url, 12);
  const seventhclass13 = timestamp13[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass13.name, seventhclass13.url, 13);
  const seventhclass14 = timestamp14[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass14.name, seventhclass14.url, 14);
  const seventhclass15 = timestamp15[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass15.name, seventhclass15.url, 15);
  const seventhclass16 = timestamp16[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass16.name, seventhclass16.url, 16);
  const seventhclass21 = timestamp21[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass21.name, seventhclass21.url, 21);
  const seventhclass22 = timestamp22[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass22.name, seventhclass22.url, 22);
  const seventhclass23 = timestamp23[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass23.name, seventhclass23.url, 23);
  const seventhclass24 = timestamp24[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass24.name, seventhclass24.url, 24);
  const seventhclass25 = timestamp25[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass25.name, seventhclass25.url, 25);
  const seventhclass26 = timestamp26[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', seventhclass26.name, seventhclass26.url, 26);
}
async function homeroomendcall(day:number) {
  const hrname11 = timetable1[1][0]['homeroom-name'];
  const hrurl11 = timetable1[1][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname11, hrurl11, 11);
  const hrname12 = timetable1[2][0]['homeroom-name'];
  const hrurl12 = timetable1[2][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다'!, hrname12, hrurl12, 12);
  const hrname13 = timetable1[3][0]['homeroom-name'];
  const hrurl13 = timetable1[3][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname13, hrurl13, 13);
  const hrname14 = timetable1[4][0]['homeroom-name'];
  const hrurl14 = timetable1[4][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname14, hrurl14, 14);
  const hrname15 = timetable1[5][0]['homeroom-name'];
  const hrurl15 = timetable1[5][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname15, hrurl15, 15);
  const hrname16 = timetable1[6][0]['homeroom-name'];
  const hrurl16 = timetable1[6][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname16, hrurl16, 16);
  const hrname21 = timetable2[1][0]['homeroom-name'];
  const hrurl21 = timetable2[1][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname21, hrurl21, 21);
  const hrname22 = timetable2[2][0]['homeroom-name'];
  const hrurl22 = timetable2[2][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname22, hrurl22, 22);
  const hrname23 = timetable2[3][0]['homeroom-name'];
  const hrurl23 = timetable2[3][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname23, hrurl23, 23);
  const hrname24 = timetable2[4][0]['homeroom-name'];
  const hrurl24 = timetable2[4][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname24, hrurl24, 24);
  const hrname25 = timetable2[5][0]['homeroom-name'];
  const hrurl25 = timetable2[5][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname25, hrurl25, 25);
  const hrname26 = timetable2[6][0]['homeroom-name'];
  const hrurl26 = timetable2[6][0]['homeroom-url'];
  fcmsend('종례 시작 5분전 입니다!', hrname26, hrurl26, 26);
}

const homeroomstart1 = schedule.scheduleJob({ hour: 8, minute: 40, dayOfWeek: 1 }, () => {
  homeroomcall(1);
});
const homeroomstart2 = schedule.scheduleJob({ hour: 8, minute: 40, dayOfWeek: 2 }, () => {
  homeroomcall(2);
});
const homeroomstart3 = schedule.scheduleJob({ hour: 8, minute: 40, dayOfWeek: 3 }, () => {
  homeroomcall(3);
});
const homeroomstart4 = schedule.scheduleJob({ hour: 8, minute: 40, dayOfWeek: 4 }, () => {
  homeroomcall(4);
});
const homeroomstart5 = schedule.scheduleJob({ hour: 8, minute: 40, dayOfWeek: 5 }, () => {
  homeroomcall(5);
});

const firstclass1 = schedule.scheduleJob({ hour: 8, minute: 55, dayOfWeek: 1 }, () => {
  firstclasscall(1);
});
const firstclass2 = schedule.scheduleJob({ hour: 8, minute: 55, dayOfWeek: 2 }, () => {
  firstclasscall(2);
});
const firstclass3 = schedule.scheduleJob({ hour: 8, minute: 55, dayOfWeek: 3 }, () => {
  firstclasscall(3);
});
const firstclass4 = schedule.scheduleJob({ hour: 8, minute: 55, dayOfWeek: 4 }, () => {
  firstclasscall(4);
});
const firstclass5 = schedule.scheduleJob({ hour: 8, minute: 55, dayOfWeek: 5 }, () => {
  firstclasscall(5);
});


const secondclass1 = schedule.scheduleJob({ hour: 9, minute: 55, dayOfWeek: 1 }, () => {
  secondclasscall(1);
});
const secondclass2 = schedule.scheduleJob({ hour: 9, minute: 55, dayOfWeek: 2 }, () => {
  secondclasscall(2);
});
const secondclass3 = schedule.scheduleJob({ hour: 9, minute: 55, dayOfWeek: 3 }, () => {
  secondclasscall(3);
});
const secondclass4 = schedule.scheduleJob({ hour: 9, minute: 55, dayOfWeek: 4 }, () => {
  secondclasscall(4);
});
const secondclass5 = schedule.scheduleJob({ hour: 9, minute: 55, dayOfWeek: 5 }, () => {
  secondclasscall(5);
});

const thirdclass1 = schedule.scheduleJob({ hour: 10, minute: 55, dayOfWeek: 1 }, () => {
  thirdclasscall(1);
});
const thirdclass2 = schedule.scheduleJob({ hour: 10, minute: 55, dayOfWeek: 2 }, () => {
  thirdclasscall(2);
});
const thirdclass3 = schedule.scheduleJob({ hour: 10, minute: 55, dayOfWeek: 3 }, () => {
  thirdclasscall(3);
});
const thirdclass4 = schedule.scheduleJob({ hour: 10, minute: 55, dayOfWeek: 4 }, () => {
  thirdclasscall(4);
});
const thirdclass5 = schedule.scheduleJob({ hour: 10, minute: 55, dayOfWeek: 5 }, () => {
  thirdclasscall(5);
});

const fourthclass1 = schedule.scheduleJob({ hour: 11, minute: 55, dayOfWeek: 1 }, () => {
  fourthclasscall(1);
});
const fourthclass2 = schedule.scheduleJob({ hour: 11, minute: 55, dayOfWeek: 2 }, () => {
  fourthclasscall(2);
});
const fourthclass3 = schedule.scheduleJob({ hour: 11, minute: 55, dayOfWeek: 3 }, () => {
  fourthclasscall(3);
});
const fourthclass4 = schedule.scheduleJob({ hour: 11, minute: 55, dayOfWeek: 4 }, () => {
  fourthclasscall(4);
});
const fourthclass5 = schedule.scheduleJob({ hour: 11, minute: 55, dayOfWeek: 5 }, () => {
  fourthclasscall(5);
});

const fifthclass1 = schedule.scheduleJob({ hour: 13, minute: 45, dayOfWeek: 1 }, () => {
  fifthclasscall(1);
});
const fifthclass2 = schedule.scheduleJob({ hour: 13, minute: 45, dayOfWeek: 2 }, () => {
  fifthclasscall(2);
});
const fifthclass3 = schedule.scheduleJob({ hour: 13, minute: 45, dayOfWeek: 3 }, () => {
  fifthclasscall(3);
});
const fifthclass4 = schedule.scheduleJob({ hour: 13, minute: 45, dayOfWeek: 4 }, () => {
  fifthclasscall(4);
});
const fifthclass5 = schedule.scheduleJob({ hour: 13, minute: 45, dayOfWeek: 5 }, () => {
  fifthclasscall(5);
});

const sixthclass1 = schedule.scheduleJob({ hour: 14, minute: 45, dayOfWeek: 1 }, () => {
  sixthclasscall(1);
});
const sixthclass2 = schedule.scheduleJob({ hour: 14, minute: 45, dayOfWeek: 2 }, () => {
  sixthclasscall(2);
});
const sixthclass3 = schedule.scheduleJob({ hour: 14, minute: 45, dayOfWeek: 3 }, () => {
  sixthclasscall(3);
});
const sixthclass4 = schedule.scheduleJob({ hour: 14, minute: 45, dayOfWeek: 4 }, () => {
  sixthclasscall(4);
});
const sixthclass5 = schedule.scheduleJob({ hour: 14, minute: 45, dayOfWeek: 5 }, () => {
  sixthclasscall(5);
});

const seventhclass1 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 1 }, () => {
  seventhclasscall(1);
});
const seventhclass2 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 2 }, () => {
  seventhclasscall(2);
});
const seventhclass3 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 2 }, () => {
  homeroomendcall(3);
});
const seventhclass4 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 4 }, () => {
  seventhclasscall(4);
});
const seventhclass5 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 5 }, () => {
  seventhclasscall(5);
});

const homeroomend1 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 1 }, () => {
  homeroomendcall(1);
});
const homeroomend2 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 2 }, () => {
  homeroomendcall(2);
});

const homeroomend4 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 4 }, () => {
  homeroomendcall(4);
});
const homeroomend5 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 5 }, () => {
  homeroomendcall(5);
});
