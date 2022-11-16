---
title: ROS BRIDGE WEB SOCKET
sidebar_label: WEB SOCKET
hide_table_of_contents: false
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title> Avyana Studio - Connect Web Socket </title>
    <style>{` :root { --doc-item-container-width:60rem; } `}</style>    
</head>

## Connect to Web-Socket

Connect directly to your running ROS stack via WebSockets using a Rosbridge connection. 

:::note
It is required to be on the same network as the robot, to connect and visualize data.
:::

To connect via a web-socket, we use the default **rosbridge_server** package from [rosbridge-suite](https://github.com/RobotWebTools/rosbridge_suite.git). It is recommended to use the default rosbridge_server package, as it only has one port open and helps if you have any Firewall activated.

<intro-end />

To open a ros-bridge web-socket connection, make sure you have installed **[avyana.core](https://github.com/Avyana-Tech/avyana.core) repository installed, ROS2 up and running. If not, look into [Installation Docs](/Avyana_Software/installation.md)

Start the web-server by launching the ros2 package, 

```
ros2 launch rosbridge_server rosbridge_websocket_launch.xml
```

This will create a web-socket server on your localhost with the port at `9090`, as shown below

![rosbridge websocket server launch](/img/Studio/Connect/Web-Socket/rosbridge_websocket_server_launch.png)

Now open [Studio](https://studio.avyana.tech), and click on **Open Connection** in the *Get Started* Dialogue box.

![Get Started](/img/Studio/Connect/Web-Socket/get_started_dialogue_box.png)

### Local Host Connection

Enter the URL to your Rosbridge server, as shown

![](/img/Studio/Connect/Web-Socket/rosbridge_connection.png)

and press **OPEN**. You are now connected!

To test the connection, add a *Raw Messages panel* to your layout, and see a list of available topics populate the dropdown. 

![](/img/Studio/Connect/Web-Socket/raw_messages_panel.png)

Check out the `/connected_clients topic` to see information rosbridge is publishing about your connection.

![](/img/Studio/Connect/Web-Socket/connected_clients.png)

:::note
If there are any issues with the web-socket connection, do check the troubleshooting guide 

[Trouble Shooting guide](/help/troubleshooting)
:::