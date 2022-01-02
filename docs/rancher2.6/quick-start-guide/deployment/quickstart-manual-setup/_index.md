---
title: Manual Quick Start
weight: 300
---
你好！本章节将引导你：

- 安装 Rancher 2.x
- 创建你的第一个集群
- 部署一个 Nginx 应用

## 快速入门概述

本指南划分为不同任务，以便于使用。

<!-- TOC -->


1. [配置 Linux 主机](#1-provision-a-linux-host)

1. [安装 Rancher](#2-install-rancher)

1. [登录](#3-log-in)

1. [创建集群](#4-create-the-cluster)

<!-- /TOC -->
<br/>

### 1. 配置 Linux 主机

你可以通过配置 Linux 主机，来创建自定义集群。你的主机可以是：

- 云虚拟机
- 就地虚拟机
- 裸机服务器

   > **注意：**
   > 如果使用云虚拟机，你需要允许入站 TCP 和端口 80 和 443 通信。如需了解端口配置，请参见你的云托管商的官方文档。
   >
   > 如需了解所有端口要求，请参见 [Docker 安装]({{<baseurl>}}/rancher/v2.6/en/cluster-provisioning/node-requirements/)。

   根据我们的[要求]({{<baseurl>}}/rancher/v2.6/en/installation/requirements/)配置主机。

### 2. 安装 Rancher

要在你的主机上安装 Rancher，先与它连接，然后使用 shell 进行安装。

1. 使用你惯用的 shell（例如 PuTTy 或远程终端）登录到你的 Linux 主机。

2. 在 shell 中执行以下命令：

```
  sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher
```

**结果**：Rancher 已安装。

### 3. 登录

登录到 Rancher 以使用应用。登录后，你需要进行一些一次性配置。

1. 开 Web 浏览器并输入主机的 IP 地址`https://<SERVER_IP>`。

   将`<SERVER_IP>`替换为你的主机 IP 地址。

2. 出现提示时，为默认`admin`账号创建密码。

3. 设置 **Rancher Server URL**。URL 可以是 IP 地址或主机名。需要注意，添加到集群中的每个节点都必须能够连接到此 URL。<br/><br/>如果你在 URL 中使用主机名，则此主机名必须在 DNS 中解析到你需要添加到集群的节点上。

<br/>

### 4. 创建集群

欢迎使用 Rancher！现在，你可以创建你的第一个 Kubernetes 集群了。

在此任务中，你可以使用**自定义**选项。此选项允许你把 _任意_ Linux 主机（云虚拟机、本地虚拟机或裸金身机器）添加到集群中。

1. 点击 **☰ > 集群管理**。
1. 在**集群**页面，点击**创建**。
2. 选择**自定义**。

3. 输入**集群名称**。

4. 跳过**成员角色**和**集群选项**。此部分我们稍后会详细介绍。

5. 点击**下一步**。

6. 在**节点角色**中，选择 _全部_ 角色，即 **etcd**，**Control** 和 **Worker**。

7. **Optional**：Rancher 会自动检测用于 Rancher 通信和集群通信的 IP 地址。你可以使用**节点地址**处的`公有地址`和`内网地址`进行覆盖。

8. 跳过**标签**部分的内容。这部分内容暂时不重要。

9. 将屏幕上显示的命令复制到剪贴板。

10. 使用你惯用的 shell（例如 PuTTy 或远程终端）登录到你的 Linux 主机。粘贴剪贴板的命令并运行。

11. 在 Linux 主机上运行完命令后，单击**完成**。

**结果**：

你已创建集群，集群的状态是**配置中**。Rancher 已在你的集群中。

当在集群状态变为 **Active** 后，你可访问集群。

**Active** 状态的集群会分配到两个项目：

- `默认`：包含`默认`命名空间
- `系统`：包含 `cattle-system`，`ingress-nginx`，`kube-public`和`kube-system`命名空间。

#### 已完成！

恭喜！你已创建第一个集群。

#### 后续操作

使用 Rancher 创建 deployment。详情请参见[创建 Deployment]({{<baseurl>}}/rancher/v2.6/en/quick-start-guide/workload)。