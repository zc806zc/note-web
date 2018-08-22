# Quartz

- 作业调度框架
- 包括许多企业级功能, 如JTA事务和集群支持
- 应用实例

  - 驱动处理工作流程: 两个小时内，它将检查订单的状态...
  - 系统维护
  - 在应用程序内提供提醒服务

- 特点 <http://www.yiibai.com/quartz/features.html>

  - 运行环境
  - 作业调度
  - 作业执行
  - 作业持久性
  - 事务
  - 集群
  - 监听器和插件

- Spring 调度工具Quartz cron 表达式的格式 <http://blog.csdn.net/limenghua9112/article/details/45242239>

# 实例

- SimpleTrigger

```java
package com.yiibai.quartz;

import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;

public class SimpleTriggerExample {
    public static void main(String[] args) throws Exception {

        // Quartz 1.6.3
        // JobDetail job = new JobDetail();
        // job.setName("dummyJobName");
        // job.setJobClass(HelloJob.class);

        JobDetail job = JobBuilder.newJob(HelloJob.class)
            .withIdentity("dummyJobName", "group1").build();

                //Quartz 1.6.3
        // SimpleTrigger trigger = new SimpleTrigger();
        // trigger.setStartTime(new Date(System.currentTimeMillis() + 1000));
        // trigger.setRepeatCount(SimpleTrigger.REPEAT_INDEFINITELY);
        // trigger.setRepeatInterval(30000);

        // Trigger the job to run on the next round minute
        Trigger trigger = TriggerBuilder
            .newTrigger()
            .withIdentity("dummyTriggerName", "group1")
            .withSchedule(
                SimpleScheduleBuilder.simpleSchedule()
                    .withIntervalInSeconds(5).repeatForever())
            .build();

        // schedule it
        Scheduler scheduler = new StdSchedulerFactory().getScheduler();
        scheduler.start();
        scheduler.scheduleJob(job, trigger);

    }
}
```

- CronTrigger

```java
package com.yiibai.quartz;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;

public class CronTriggerExample
{
    public static void main( String[] args ) throws Exception
    {
        //Quartz 1.6.3
        //JobDetail job = new JobDetail();
        //job.setName("dummyJobName");
        //job.setJobClass(HelloJob.class);        
        JobDetail job = JobBuilder.newJob(HelloJob.class)
        .withIdentity("dummyJobName", "group1").build();

    //Quartz 1.6.3
        //CronTrigger trigger = new CronTrigger();
        //trigger.setName("dummyTriggerName");
        //trigger.setCronExpression("0/5 * * * * ?");

        Trigger trigger = TriggerBuilder
        .newTrigger()
        .withIdentity("dummyTriggerName", "group1")
        .withSchedule(
            CronScheduleBuilder.cronSchedule("0/5 * * * * ?"))
        .build();

        //schedule it
        Scheduler scheduler = new StdSchedulerFactory().getScheduler();
        scheduler.start();
        scheduler.scheduleJob(job, trigger);

    }
}
```

# Quartz2作业监听

# Quartz执行多作业

- <http://www.yiibai.com/quartz/run-multiple-jobs.html>
