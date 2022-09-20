---
title: Introduction
sidebar_label: Introduction
slug: /
image: /img/meta/open-graph.png
hide_table_of_contents: false
demoUrl: #
demoSourceUrl: #
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Self Driving Car - Introduction </title>
    <style>{` :root { --doc-item-container-width:55rem; } `}</style>    
</head>

**Self Driving Car**

AVYANA is an open-source project for autonomous self-driving cars. It is based off on ROS2 and is aimed for both dev and production environments on a variety of ground based vehicles.

Start by installing **[AVYANA](https://github.com/Avyana-Tech/Avyana.git)**.

The **Avyana** repository is a meta repository, that interfaces all other required repositories. It is built in this manner, so that it becomes easy for us to build individual sub-systems, and it becomes easier for the end-user to debug.

<intro-end />

### Get Started

<DocsCards>
  <DocsCard header="Avyana Software" href="/Avyana_Software/installation" icon="/img/meta/light_logo.png">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>

  <DocsCard header="Avyana Model" href="/model" icon="/img/meta/light_logo.png">
    <p>Step-by-step guides to setting up the model.</p>
  </DocsCard>

  <DocsCard header="Avyana Studio" href="/studio" icon="/img/meta/light_logo.png">
    <p>Step-by-step guides to setting up the studio.</p>
  </DocsCard>
</DocsCards>

:::note
This guide is an active work in progress. The information provided is tentatively correct, and would be updated in regular intervals. If any information is required urgently, feel free to raise an **[request documentation issue](https://github.com/Avyana-Tech/docs/issues/new?assignees=REGATTE&labels=documentation&template=documentation-request.md&title=REQUEST+DOCUMENTATION)**.
:::

### Overview 

The flowchart below is an overview, on how the system is set to be built.


