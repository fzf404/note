<!--
title: Hadoop
sort:
-->

> [官方文档](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html)

## 概念

- DFS: 分布式文件系统
- MR: MapReduce: 数据分发计算汇总

## 安装

```bash
# 依赖库
apt install pdsh openjdk-8-jdk-headless -y

# 免密登录
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
chmod 0600 ~/.ssh/authorized_keys

# 下载hadoop
wget https://dlcdn.apache.org/hadoop/common/hadoop-3.2.2/hadoop-3.2.2.tar.gz
tar -zxvf hadoop-3.2.2.tar.gz

# 配置环境变量
vim /etc/profile
export PDSH_RCMD_TYPE=ssh
export HADOOP_HOME=/opt/hadoop-3.2.2
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
source /etc/profile

# 配置hadoop

# 头部插入
vim etc/hadoop/hadoop-env.sh
JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

# configuration中插入
vim etc/hadoop/core-site.xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
    </property>
</configuration>

# configuration中插入
vim etc/hadoop/hdfs-site.xml
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>1</value>
    </property>
</configuration>

# 头部插入
vim sbin/start-dfs.sh

HDFS_NAMENODE_USER=root
HDFS_DATANODE_USER=root
HDFS_SECONDARYNAMENODE_USER=root

# 运行前需指定为bash
chsh -s /usr/bin/bash

# 修改脚本 - 增加!
vim libexec/hadoop-functions.sh
if [[ ! -e '/usr/bin/pdsh' ]]; then

# 格式化文件系统
hadoop namenode -format

# 启动
sbin/start-dfs.sh
# 停止
sbin/stop-dfs.sh
```

## 使用

```bash
# 新建文件夹
bin/hadoop fs -mkdir -R /user
# 显示信息
bin/hadoop fs -ls

# 官方文档
bin/hdfs dfs -mkdir input
bin/hdfs dfs -put etc/hadoop/*.xml input

# 官方示例
bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.2.2.jar grep input output 'dfs[a-z.]+'
# 查看输出内容
bin/hadoop fs -cat output/*
```

## 示例

> [官方文档](https://hadoop.apache.org/docs/stable/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html)

### 编写

> 《三体》分词

```java
package com.fzf404;

import java.io.IOException;
import java.util.List;

import com.github.houbb.segment.api.ISegmentResult;
import com.github.houbb.segment.bs.SegmentBs;
import com.github.houbb.segment.support.segment.result.impl.SegmentResultHandlers;
import com.github.houbb.segment.support.tagging.pos.tag.impl.SegmentPosTaggings;
import com.github.houbb.segment.util.SegmentHelper;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

public class WordCount {

    public static class TokenizerMapper
            extends Mapper<Object, Text, Text, IntWritable>{

        private final static IntWritable one = new IntWritable(1);
        private final Text word = new Text();

        public void map(Object key, Text value, Context context
        ) throws IOException, InterruptedException {
            // 分词
            List<String> resultList = SegmentHelper.segment(value.toString(), SegmentResultHandlers.word());
            // 遍历
            for(String itr:resultList){
                // 词性
                List<ISegmentResult> itrSegment= SegmentBs.newInstance().posTagging(SegmentPosTaggings.simple()).segment(itr);
                // 切割词性
                int cutIndex=itrSegment.toString().indexOf("/");
                // 判断名词
                if(itrSegment.toString().substring(cutIndex + 1).equals("n]")){
                    context.write(new Text(itr), one);
                }
            }
            // 英文分词
//            StringTokenizer itr = new StringTokenizer(value.toString());
//            while (itr.hasMoreTokens()) {
//                word.set(itr.nextToken());
//                context.write(word, one);
//            }
        }
    }

    public static class IntSumReducer
            extends Reducer<Text,IntWritable,Text,IntWritable> {
        private final IntWritable result = new IntWritable();

        public void reduce(Text key, Iterable<IntWritable> values,
                           Context context
        ) throws IOException, InterruptedException {
            int sum = 0;
            for (IntWritable val : values) {
                sum += val.get();
            }
            result.set(sum);
            context.write(key, result);
        }
    }

    public static void main(String[] args) throws Exception {
        Configuration conf = new Configuration();
        Job job = Job.getInstance(conf, "word count");
        job.setJarByClass(WordCount.class);
        job.setMapperClass(TokenizerMapper.class);
        job.setCombinerClass(IntSumReducer.class);
        job.setReducerClass(IntSumReducer.class);
        job.setOutputKeyClass(Text.class);
        job.setOutputValueClass(IntWritable.class);
        FileInputFormat.addInputPath(job, new Path(args[0]));
        FileOutputFormat.setOutputPath(job, new Path(args[1]));
        System.exit(job.waitForCompletion(true) ? 0 : 1);
    }
}

```

### maven

```xml
<dependencies>
    <!-- https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-mapreduce-client-core -->
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-mapreduce-client-core</artifactId>
        <version>3.2.2</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-common -->
    <dependency>
        <groupId>org.apache.hadoop</groupId>
        <artifactId>hadoop-common</artifactId>
        <version>3.2.2</version>
    </dependency>
    <dependency>
        <groupId>com.github.houbb</groupId>
        <artifactId>segment</artifactId>
        <version>0.1.8</version>
    </dependency>
</dependencies>
```

### 打包

```
Porject Structure -> Artifacts -> Add -> OK
Build -> Artifacts -> jar -> Build
```

### 运行

```bash
# 拷贝数据
bin/hadoop fs -put threebody.txt input
# 清空output
bin/hadoop fs -rm -r /user/root/output
# 运行
bin/hadoop jar wordcount.jar com.fzf404.WordCount /user/root/input /user/root/output
# 查看结果
bin/hadoop fs -cat /user/root/output/*
```
