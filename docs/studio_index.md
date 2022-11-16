---
title: Studio Introduction
sidebar_label: Studio Introduction
hide_table_of_contents: false
slug: /studio
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title> Avyana Studio Introduction </title>
    <style>{` :root { --doc-item-container-width:60rem; } `}</style>    
</head>

The **AVYANA STUDIO** is an open-source ROS Visualisation platform, that can be customized as you want it. It is available in a variety of ways to make development as convenient as possible – it can be run as a standalone Desktop App on **[MAC](#)**, **[WINDOWS](#)** & **[LINUX](#)**, as a **[Web-App](https://studio.avyana.tech/)** or even as a Self-hosted app using Docker.

It is cross-platform and can connect to your **ROBOT** over wifi. Even if your ROS Stack, is running on a different Operating System, you can visualize, command and even change parameters from **Avyana Studio**, without having to do any extra-setup. 

![Image](/img/studio_demo.png)

<intro-end />

On opening Avyana Studio, you will see a dialog with a list of all possible data sources (i.e. local file, remote file, live connection) – click into any of these options to start visualizing your data.

<DocsCards>
  <DocsCard header="Connect to Local File" href="/studio_index" icon="/img/meta/light_logo.png">
    <p> Step-by-step guides to visualize data from Local File. </p>
  </DocsCard>

  <DocsCard header="Connect to Remote File" href="/studio_index" icon="/img/meta/light_logo.png">
    <p> Step-by-step guides to visualize data from Remote File. </p>
  </DocsCard>

  <DocsCard header="Connect to Web-Socket" href="/studio/connect/websocket" icon="/img/meta/light_logo.png">
    <p> Step-by-step guides to connect and visualize data from Web-Socket. </p>
  </DocsCard>
</DocsCards>
