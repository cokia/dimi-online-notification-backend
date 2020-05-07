import schedule from 'node-schedule';
import fcmsend from 'fcm.ts';
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
  const _1timestamp11 = timestamp11[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp11[name], _1timestamp11[url], 11);
  const _1timestamp12 = timestamp12[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp12[name], _1timestamp12[url], 12);
  const _1timestamp13 = timestamp13[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp13[name], _1timestamp13[url], 13);
  const _1timestamp14 = timestamp14[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp14[name], _1timestamp14[url], 14);
  const _1timestamp15 = timestamp15[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp15[name], _1timestamp15[url], 15);
  const _1timestamp16 = timestamp16[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp16[name], _1timestamp16[url], 16);
  const _1timestamp21 = timestamp21[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp21[name], _1timestamp21[url], 21);
  const _1timestamp22 = timestamp22[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp22[name], _1timestamp22[url], 22);
  const _1timestamp23 = timestamp23[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp23[name], _1timestamp23[url], 23);
  const _1timestamp24 = timestamp24[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp24[name], _1timestamp24[url], 24);
  const _1timestamp25 = timestamp25[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp25[name], _1timestamp25[url], 25);
  const _1timestamp26 = timestamp26[day - 1].subject[0];
  fcmsend('1교시 시작 5분 전 입니다!', _1timestamp26[name], _1timestamp26[url], 26);
}
async function secondclasscall(day:number) {
  const __2timestamp11 = timestamp11[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp11[name], _2timestamp11[url], 11);
  const _2timestamp12 = timestamp12[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp12[name], _2timestamp12[url], 12);
  const _2timestamp13 = timestamp13[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp13[name], _2timestamp13[url], 13);
  const _2timestamp14 = timestamp14[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp14[name], _2timestamp14[url], 14);
  const _2timestamp15 = timestamp15[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp15[name], _2timestamp15[url], 15);
  const _2timestamp16 = timestamp16[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp16[name], _2timestamp16[url], 16);
  const _2timestamp21 = timestamp21[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp21[name], _2timestamp21[url], 21);
  const _2timestamp22 = timestamp22[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp22[name], _2timestamp22[url], 22);
  const _2timestamp23 = timestamp23[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp23[name], _2timestamp23[url], 23);
  const _2timestamp24 = timestamp24[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp24[name], _2timestamp24[url], 24);
  const _2timestamp25 = timestamp25[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp25[name], _2timestamp25[url], 25);
  const _2timestamp26 = timestamp26[day - 1].subject[1];
  fcmsend('2교시 시작 5분 전 입니다!', _2timestamp26[name], _2timestamp26[url], 26);
}
async function thirdclasscall(day:number) {
  const _3timestamp11 = timestamp11[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp11[name], _3timestamp11[url], 11);
  const _3timestamp12 = timestamp12[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp12[name], _3timestamp12[url], 12);
  const _3timestamp13 = timestamp13[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp13[name], _3timestamp13[url], 13);
  const _3timestamp14 = timestamp14[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp14[name], _3timestamp14[url], 14);
  const _3timestamp15 = timestamp15[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp15[name], _3timestamp15[url], 15);
  const _3timestamp16 = timestamp16[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp16[name], _3timestamp16[url], 16);
  const _3timestamp21 = timestamp21[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp21[name], _3timestamp21[url], 21);
  const _3timestamp22 = timestamp22[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp22[name], _3timestamp22[url], 22);
  const _3timestamp23 = timestamp23[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp23[name], _3timestamp23[url], 23);
  const _3timestamp24 = timestamp24[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp24[name], _3timestamp24[url], 24);
  const _3timestamp25 = timestamp25[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp25[name], _3timestamp25[url], 25);
  const _3timestamp26 = timestamp26[day - 1].subject[2];
  fcmsend('3교시 시작 5분 전 입니다!', _3timestamp26[name], _3timestamp26[url], 26);
}
async function fourthclasscall(day:number) {
  const _4timestamp11 = timestamp11[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp11[name], _4timestamp11[url], 11);
  const _4timestamp12 = timestamp12[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp12[name], _4timestamp12[url], 12);
  const _4timestamp13 = timestamp13[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp13[name], _4timestamp13[url], 13);
  const _4timestamp14 = timestamp14[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp14[name], _4timestamp14[url], 14);
  const _4timestamp15 = timestamp15[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp15[name], _4timestamp15[url], 15);
  const _4timestamp16 = timestamp16[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp16[name], _4timestamp16[url], 16);
  const _4timestamp21 = timestamp21[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp21[name], _4timestamp21[url], 21);
  const _4timestamp22 = timestamp22[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp22[name], _4timestamp22[url], 22);
  const _4timestamp23 = timestamp23[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp23[name], _4timestamp23[url], 23);
  const _4timestamp24 = timestamp24[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp24[name], _4timestamp24[url], 24);
  const _4timestamp25 = timestamp25[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp25[name], _4timestamp25[url], 25);
  const _4timestamp26 = timestamp26[day - 1].subject[3];
  fcmsend('4교시 시작 5분 전 입니다!', _4timestamp26[name], _4timestamp26[url], 26);
}
async function fifthclasscall(day:number) {
  const _5timestamp11 = timestamp11[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp11[name], _5timestamp11[url], 11);
  const _5timestamp12 = timestamp12[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp12[name], _5timestamp12[url], 12);
  const _5timestamp13 = timestamp13[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp13[name], _5timestamp13[url], 13);
  const _5timestamp14 = timestamp14[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp14[name], _5timestamp14[url], 14);
  const _5timestamp15 = timestamp15[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp15[name], _5timestamp15[url], 15);
  const _5timestamp16 = timestamp16[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp16[name], _5timestamp16[url], 16);
  const _5timestamp21 = timestamp21[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp21[name], _5timestamp21[url], 21);
  const _5timestamp22 = timestamp22[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp22[name], _5timestamp22[url], 22);
  const _5timestamp23 = timestamp23[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp23[name], _5timestamp23[url], 23);
  const _5timestamp24 = timestamp24[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp24[name], _5timestamp24[url], 24);
  const _5timestamp25 = timestamp25[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp25[name], _5timestamp25[url], 25);
  const _5timestamp26 = timestamp26[day - 1].subject[0];
  fcmsend('5교시 시작 5분 전 입니다!', _5timestamp26[name], _5timestamp26[url], 26);
}
async function sixthclasscall(day:number) {
  const _6timestamp11 = timestamp11[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp11[name], _6timestamp11[url], 11);
  const _6timestamp12 = timestamp12[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp12[name], _6timestamp12[url], 12);
  const _6timestamp13 = timestamp13[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp13[name], _6timestamp13[url], 13);
  const _6timestamp14 = timestamp14[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp14[name], _6timestamp14[url], 14);
  const _6timestamp15 = timestamp15[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp15[name], _6timestamp15[url], 15);
  const _6timestamp16 = timestamp16[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp16[name], _6timestamp16[url], 16);
  const _6timestamp21 = timestamp21[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp21[name], _6timestamp21[url], 21);
  const _6timestamp22 = timestamp22[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp22[name], _6timestamp22[url], 22);
  const _6timestamp23 = timestamp23[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp23[name], _6timestamp23[url], 23);
  const _6timestamp24 = timestamp24[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp24[name], _6timestamp24[url], 24);
  const _6timestamp25 = timestamp25[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp25[name], _6timestamp25[url], 25);
  const _6timestamp26 = timestamp26[day - 1].subject[0];
  fcmsend('6교시 시작 5분 전 입니다!', _6timestamp26[name], _6timestamp26[url], 26);
}
async function seventhtclasscall(day:number) {
  const _7timestamp11 = timestamp11[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp11[name], _7timestamp11[url], 11);
  const _7timestamp12 = timestamp12[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp12[name], _7timestamp12[url], 12);
  const _7timestamp13 = timestamp13[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp13[name], _7timestamp13[url], 13);
  const _7timestamp14 = timestamp14[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp14[name], _7timestamp14[url], 14);
  const _7timestamp15 = timestamp15[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp15[name], _7timestamp15[url], 15);
  const _7timestamp16 = timestamp16[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp16[name], _7timestamp16[url], 16);
  const _7timestamp21 = timestamp21[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp21[name], _7timestamp21[url], 21);
  const _7timestamp22 = timestamp22[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp22[name], _7timestamp22[url], 22);
  const _7timestamp23 = timestamp23[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp23[name], _7timestamp23[url], 23);
  const _7timestamp24 = timestamp24[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp24[name], _7timestamp24[url], 24);
  const _7timestamp25 = timestamp25[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp25[name], _7timestamp25[url], 25);
  const _7timestamp26 = timestamp26[day - 1].subject[0];
  fcmsend('7교시 시작 5분 전 입니다!', _7timestamp26[name], _7timestamp26[url], 26);
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
