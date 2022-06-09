---
layout: Post
title: FTP 实验
subtitle: 在 Linux 系统上使用 Socket 编程技术实现简化的 FTP 服务器和客户端的程序。
author: dicarbene
date: 2022-06-09
useHeaderImage: true
headerImage: /img/in-post/2022-06-05/7.png
headerMask: rgb(67, 65, 47, .4)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 实验
  - 课设
---

## 实验内容

本实验要求学生在 Linux 系统上使用 C/C++编程语言利用 Socket 接口实现 FTP 客户端和服务器的程序，使客户端可以连接至服务器，并且可以进行一些 FTP 的基本操作，如列出目录、下载文件等。

### 实验说明

FTP 是 File Transfer Protocol 的简称，即文件传输协议的缩写。该协议用于在两台计算机之间传送文件。FTP 会话包含了两个通道，一个是控制通道，一个是数据通道。控制通道是和 FTP 服务器进行沟通的通道，连接 FTP 服务器，发送 FTP 指令；数据通道则是和 FTP 服务器进行文件传输或者获取文件列表的通道。

FTP 中，控制连接的各种指令均由客户端主动发起，而数据连接有两种工作方式：主动方式（PORT 方式）和被动方式（PASV 方式）。主动方式下，FTP 客户端首先和 FTP 服务器的控制通道对应端口（一般为 21）建立连接，通过控制通道发送命令，客户端需要接收数据的时候在这个通道上发送 PORT 命令。PORT 命令包含了客户端用什么端口（一个大于 1024 的端口）接收数据。在传输数据的时候，FTP 服务器必须和客户端建立一个新的连接。被动方式下，建立控制通道的过程和主动方式类似，当客户端通过这个通道发送 PASV 命令的时候，FTP Server 打开一个位于 1024 ～ 5000 之间的随机端口并且通知客户端，然后客户端与服务器之间将通过这个端口进行数据的传送。

具体的 FTP 规范请参考 RFC959。
