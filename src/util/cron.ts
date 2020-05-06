import schedule from 'node-schedule';
import timetable_1 from '../timetable/first.json';


const timestamp11 = timetable_1[1][0].timetable;
const timestamp12 = timetable_1[2][0].timetable[day].subject;
const timestamp13 = timetable_1[3][0].timetable[day].subject;
const timestamp14 = timetable_1[4][0].timetable[day].subject;
const timestamp15 = timetable_1[5][0].timetable[day].subject;
const timestamp16 = timetable_1[6][0].timetable[day].subject;
const timestamp21 = timetable_2[1][0].timetable[day].subject;
const timestamp22 = timetable_2[2][0].timetable[day].subject;
const timestamp23 = timetable_2[3][0].timetable[day].subject;
const timestamp24 = timetable_2[4][0].timetable[day].subject;
const timestamp25 = timetable_2[5][0].timetable[day].subject;
const timestamp26 = timetable_2[6][0].timetable[day].subject;

async function homeroomcall(day:number) {
  const hrname11 = timetable_1[1][0]['homeroom-name'];
  const hrurl11 = timetable_1[1][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname11}`, hrurl11);
  const hrname12 = timetable_1[2][0]['homeroom-name'];
  const hrurl12 = timetable_1[2][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname12}`, hrurl12);
  const hrname13 = timetable_1[3][0]['homeroom-name'];
  const hrurl13 = timetable_1[3][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname13}`, hrurl13);
  const hrname14 = timetable_1[4][0]['homeroom-name'];
  const hrurl14 = timetable_1[4][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname14}`, hrurl14);
  const hrname15 = timetable_1[5][0]['homeroom-name'];
  const hrurl15 = timetable_1[5][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname15}`, hrurl15);
  const hrname16 = timetable_1[6][0]['homeroom-name'];
  const hrurl16 = timetable_1[6][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname16}`, hrurl16);
  const hrname21 = timetable_2[1][0]['homeroom-name'];
  const hrurl21 = timetable_2[1][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname21}`, hrurl21);
  const hrname22 = timetable_2[2][0]['homeroom-name'];
  const hrurl22 = timetable_2[2][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname22}`, hrurl22);
  const hrname23 = timetable_2[3][0]['homeroom-name'];
  const hrurl23 = timetable_2[3][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname23}`, hrurl23);
  const hrname24 = timetable_2[4][0]['homeroom-name'];
  const hrurl24 = timetable_2[4][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname24}`, hrurl24);
  const hrname25 = timetable_2[5][0]['homeroom-name'];
  const hrurl25 = timetable_2[5][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname25}`, hrurl25);
  const hrname26 = timetable_2[6][0]['homeroom-name'];
  const hrurl26 = timetable_2[6][0]['homeroom-url'];
  fcmsend('즐거운 아침조회 시간입니다 ^_^', `with ${hrname26}`, hrurl26);
}
async function firstclasscall(day:number) {
  const 0timestamp11 = timestamp11[1].subject[0];
  const 0timestamp11 = timestamp11[1].subject[0];

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
const seventhclass4 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 4 }, () => {
  seventhclasscall(4);
});
const seventhclass5 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 5 }, () => {
  seventhclasscall(5);
});

const homeroomend1 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 1 }, () => {
  homeroomcall(1);
});
const homeroomend2 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 2 }, () => {
  homeroomcall(2);
});
const homeroomend3 = schedule.scheduleJob({ hour: 15, minute: 45, dayOfWeek: 3 }, () => {
  homeroomcall(3);
});
const homeroomend4 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 4 }, () => {
  homeroomcall(4);
});
const homeroomend5 = schedule.scheduleJob({ hour: 16, minute: 45, dayOfWeek: 5 }, () => {
  homeroomcall(5);
});
