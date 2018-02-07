# Java NIO

- 替代传统I/O API(基于流)

  - 比较 <http://www.yiibai.com/java_nio/java-nio-vs-input-output.html>

- 支持面向缓冲的，基于通道的I/O操作方法

- 为文件系统功能和文件处理提供了增强的支持, 广泛应用于文件处理

- 基本组件

  - 通道和缓冲区(Channels and Buffers)
  - 选择器(Selectors)
  - 非阻塞I/O(Non-blocking I/O)

![](http://www.yiibai.com/uploads/images/201709/2809/455160959_84667.png)

- 通道

  - 它从一个实体读取数据，并将其放在缓冲区块中以供消费

- 管道

  - 用于在两个线程之间建立单向数据连接

- Java NIO SocketChannel

  - SocketChannel 将通道与TCP(传输控制协议)网络套接字连接 相当于(Socket)
  - ServerSocketChannel 相当于网络编程中使用的Java网络套接字

- 编码解码

- FileLock 锁定或尝试锁定文件的给定部分

# NiO 实现时间服务器

- 服务端

```java
package com.yiibai;

import java.io.*;
import java.net.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.charset.*;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.*;

/* Listen for connections and tell callers what time it is.
 * Demonstrates NIO socket channels (accepting and writing),
 * buffer handling, charsets, and regular expressions.
 */

public class TimeServer {

    // The port we'll actually use
    private static int port = 8125;

    // Charset and encoder for US-ASCII
    private static Charset charset = Charset.forName("US-ASCII");
    private static CharsetEncoder encoder = charset.newEncoder();

    // Direct byte buffer for writing
    private static ByteBuffer dbuf = ByteBuffer.allocateDirect(1024);

    // Open and bind the server-socket channel
    //
    private static ServerSocketChannel setup() throws IOException {
        ServerSocketChannel ssc = ServerSocketChannel.open();
        String host = InetAddress.getLocalHost().getHostAddress();
        System.out.println("Listen at Host:" + host + ", port:" + port);
        InetSocketAddress isa = new InetSocketAddress(host, port);
        ssc.socket().bind(isa);
        return ssc;
    }

    // Service the next request to come in on the given channel
    //
    private static void serve(ServerSocketChannel ssc) throws IOException {
        SocketChannel sc = ssc.accept();
        try {
            String now = new Date().toString();
            sc.write(encoder.encode(CharBuffer.wrap(now + "\r\n")));
            System.out.println(sc.socket().getInetAddress() + " : " + now);
            sc.close();
        } finally {
            // Make sure we close the channel (and hence the socket)
            sc.close();
        }
    }

    public static void main(String[] args) throws IOException {
        if (args.length > 1) {
            System.err.println("Usage: java TimeServer [port]");
            return;
        }

        // If the first argument is a string of digits then we take that
        // to be the port number
        if ((args.length == 1) && Pattern.matches("[0-9]+", args[0]))
            port = Integer.parseInt(args[0]);

        ServerSocketChannel ssc = setup();
        for (;;)
            serve(ssc);

    }

}
```

- 客户端

```java
package com.yiibai;

import java.io.*;
import java.net.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.charset.*;
import java.util.regex.*;

/* Ask a list of hosts what time it is.  Demonstrates NIO socket channels
 * (connection and reading), buffer handling, charsets, and regular
 * expressions.
 */

public class TimeQuery {

    // The port we'll actually use
    private static int port = 8125;

    // Charset and decoder for US-ASCII
    private static Charset charset = Charset.forName("US-ASCII");
    private static CharsetDecoder decoder = charset.newDecoder();

    // Direct byte buffer for reading
    private static ByteBuffer dbuf = ByteBuffer.allocateDirect(1024);

    // Ask the given host what time it is
    //
    private static void query(String host) throws IOException {
        InetSocketAddress isa = new InetSocketAddress(InetAddress.getByName(host), port);
        SocketChannel sc = null;

        try {

            // Connect
            sc = SocketChannel.open();
            sc.connect(isa);

            // Read the time from the remote host. For simplicity we assume
            // that the time comes back to us in a single packet, so that we
            // only need to read once.
            dbuf.clear();
            sc.read(dbuf);

            // Print the remote address and the received time
            dbuf.flip();
            CharBuffer cb = decoder.decode(dbuf);
            System.out.print(isa + " : " + cb);

        } finally {
            // Make sure we close the channel (and hence the socket)
            if (sc != null)
                sc.close();
        }
    }

    public static void main(String[] args) throws UnknownHostException {
        /**
         * if (args.length < 1) { System.err.println("Usage: java TimeQuery
         * [port] host..."); return; }
         */
        String host = InetAddress.getLocalHost().getHostAddress();
        System.out.println("Connect to Host:" + host + ", port:" + port);
        try {
            query(host);
        } catch (IOException x) {
            System.err.println(host + ": " + x);
        }
    }

}
```
