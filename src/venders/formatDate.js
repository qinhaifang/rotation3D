/**
 * 获取上周、本周、上月、本月、上季度、本季度的开始日期、结束日期 start
 * 亲测无bug。获取上月开始结束日期考虑了年份的变化
 */
var now = new Date(); //当前日期
var nowDayOfWeek = now.getDay() - 1; //今天本周的第几天
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getYear(); //当前年
nowYear += nowYear < 2000 ? 1900 : 0; //
var lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
var lastYear = lastMonthDate.getYear();
var lastMonth = lastMonthDate.getMonth();

var afterMonthDate = new Date(); //下月日期
afterMonthDate.setDate(1);
var afterMonth = afterMonthDate.getMonth() + 1;

export function formatDate(date) {
  var myyear = date.getFullYear();
  var mymonth = date.getMonth() + 1;
  var myweekday = date.getDate();
  if (mymonth < 10) {
    mymonth = "0" + mymonth;
  }
  if (myweekday < 10) {
    myweekday = "0" + myweekday;
  }
  let hh =
    new Date(date).getHours() < 10
      ? "0" + new Date(date).getHours()
      : new Date(date).getHours();
  let mm =
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes();
  let ss =
    new Date(date).getSeconds() < 10
      ? "0" + new Date(date).getSeconds()
      : new Date(date).getSeconds();
  return (
    myyear +
    "年" +
    mymonth +
    "月" +
    myweekday +
    "日" +
    "    " +
    hh +
    ":" +
    mm +
    ":" +
    ss
  );
}
export function getWeekDate() {
  var now = new Date();
  var day = now.getDay();
  var weeks = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  var week = weeks[day];
  return week;
}
