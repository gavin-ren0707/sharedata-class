 ## 指令
 日期:
 days:
 moment(new Date()).add(-7,'days').toDate()
 months:
 ## 這個月份開始的第一天的12.pm
 moment().startOf('month').startOf('day').toDate()
 ## 這個月份結束的最後一天的11:59:59.000
 moment().endOf('month').endOf('day').toDate();
 years:
 ## 今年1月第一天的12.pm
 moment().startOf('month')

 