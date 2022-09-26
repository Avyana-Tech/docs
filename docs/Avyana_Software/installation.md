---
title: Avyana Software Installation
sidebar_label: Installation
hide_table_of_contents: false
---

<head>
  <title> Avyana Software Installation </title>
    <style>{` :root { --doc-item-container-width:60rem; } `}</style>    
</head>

The main OS we use, for developing the car is `Ubuntu 22.04 LTS Jammy`, and built with `ROS2 HUMBLE`. 

Start by cloning the **[AVYANA](https://github.com/Avyana-Tech/Avyana.git)** repository into your ROS Workspace. 
<intro-end />

### Install ROS

If you dont have ROS Installed on your system, start by installing ROS2 Humble. An install file is given in the `Installation Folder` of the Avyana Repository. 

``` 
sudo bash Installation/main.bash 
```

This file installs ROS 2 Humble, all other required dependencies and creates a ros2 workspace. Once the workspace is created, copy the `AVYANA` folder into the workspace.

#### Main Install

Now, follow the below steps

```
cd ros2_ws/src
cd Avyana

git submodule update --init --recursive
git submodule update --remote

rosdep install -y --from-paths src --ignore-src --rosdistro $ROS_DISTRO

colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```

This will install all the other required repositories, install package specific dependencies and also build everything. 

### Update

To update, at a later point, follow the below steps

```
git submodule update

rosdep install -y --from-paths src --ignore-src --rosdistro $ROS_DISTRO

colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```