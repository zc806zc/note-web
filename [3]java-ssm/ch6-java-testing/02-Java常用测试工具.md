# EasyMock

- <http://www.yiibai.com/easymock/>
- 下载 <https://sourceforge.net/projects/easymock/files/EasyMock/3.2/easymock-3.2.zip/download>
- 集成JUnit和EasyMock

```java
C:\EasyMock_WORKSPACE>javac CalculatorService.java MathApplication.java MathApplicationTester.java TestRunner.java

C:\EasyMock_WORKSPACE>java TestRunner
```

- 行为

  - 添加行为
  - 验证行为

- 调用

  - 期望调用
  - 改变调用

- 异常处理

  - 模拟抛出异常

- createMock

  - EasyMock.createStrictMock()
  - EasyMock.createNiceMock()

- EasyMockSupport

  - Utiliy或辅助类的测试类
  - replayAll() - 都记录在一个批次中创建模拟
  - verifyAll() - 验证所有模拟操作于一个批次
  - resetAll() - 将所有模拟操作于一个批次

```java
public interface CalculatorService {
   public double add(double input1, double input2);
   public double subtract(double input1, double input2);
   public double multiply(double input1, double input2);
   public double divide(double input1, double input2);
}

public class MathApplication {
   private CalculatorService calcService;

   public void setCalculatorService(CalculatorService calcService){
      this.calcService = calcService;
   }
   public double add(double input1, double input2){
      return calcService.add(input1, input2);        
   }
   public double subtract(double input1, double input2){
      return calcService.subtract(input1, input2);
   }
   public double multiply(double input1, double input2){
      return calcService.multiply(input1, input2);
   }
   public double divide(double input1, double input2){
      return calcService.divide(input1, input2);
   }
}


// MathApplicationTester.java
import org.easymock.EasyMock;
import org.easymock.EasyMockRunner;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(EasyMockRunner.class)
public class MathApplicationTester {

   private MathApplication mathApplication;

   private CalculatorService calcService;

   @Before
   public void setUp(){
      mathApplication = new MathApplication();
      calcService = EasyMock.createNiceMock(CalculatorService.class);
      mathApplication.setCalculatorService(calcService);
   }

   @Test
      public void testCalcService(){
      //add the behavior to add numbers
      EasyMock.expect(calcService.add(20.0,10.0)).andReturn(30.0);
      //activate the mock
      EasyMock.replay(calcService);
      //test the add functionality
      Assert.assertEquals(mathApplication.add(20.0, 10.0),30.0,0);
      //test the substract functionality
      Assert.assertEquals(mathApplication.subtract(20.0, 10.0),0.0,0);
      //test the multiply functionality
      Assert.assertEquals(mathApplication.divide(20.0, 10.0),0.0,0);        
      //test the divide functionality
      Assert.assertEquals(mathApplication.multiply(20.0, 10.0),0.0,0);

      //verify call to calcService is made or not
      EasyMock.verify(calcService);
   }
}


// TestRunner.java
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

public class TestRunner {
   public static void main(String[] args) {
      Result result = JUnitCore.runClasses(MathApplicationTester.class);
      for (Failure failure : result.getFailures()) {
         System.out.println(failure.toString());
      }
      System.out.println(result.wasSuccessful());
   }
}
```

# JUnit

- <http://www.yiibai.com/junit/>

# JMeter

- <http://www.yiibai.com/jmeter/>
- 使负载测试或业绩为导向的业务（功能）测试不同的协议或技术
