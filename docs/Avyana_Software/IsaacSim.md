---
title: Isaac Sim Installation
sidebar_label: Isaac Sim
hide_table_of_contents: false
---

<head>
  <title> Isaac Sim </title>
    <style>{` :root { --doc-item-container-width:60rem; } `}</style>    
</head>

We use **Isaac Sim** to train our models.

## Isaac Sim Setup

### Setup AWS EC2 Instance

- Go to **`us-east-1`** region, as this image runs flawless in that region.
- From the AWS Console, create a new EC2 Instance,
- Next, go to the **Application and OS Images (Amazon Machine Image)** section and search for **NVIDIA Omniverse**.

![AMI](/img/AMI.png)

- Select the instance, the **NVIDIA Omniverse** recommends a  `g5dn.2xlarge`, with 8-core and 32gb Memory.

![Instance Selection](/img/Instance.png)

- Create a new KeyPair

![KeyPair](/img/create-KeyPair.png)

- In the Network settings, click edit, and under the **Inbound security groups rules**, set the values as shown:

![Network Inbound Rules](/img/network_inbound_rules.png)

- In the Configure storage section, set the Root volume size to 100GB or more.

- and **LAUNCH INSTANCE**

### Connect to EC2 Instance

- Now that the Instance is Launched, click on connect. 
- On your desktop, go to the folder where the **`KeyPair`** created initially in downloaded, and make it executable by

```
    chmod 400 keypair.prm
```

- In the same folder, open terminal and connect to the EC2 instace via SSH by

```
    ssh -i "keypair.pem" ubuntu@<dns>.compute-1.amazonaws.com
```

- This will connect your terminal to the AWS ec2 instance.
- Next, Pull the latest **Isaac Sim container** from the official `NVIDIA AWS ECR Gallery` by

```
    docker pull public.ecr.aws/l1t2k0k4/isaac-sim:2022.1.1
```

and run it

```
docker run --name isaac-sim --entrypoint bash -it --gpus all -e "ACCEPT_EULA=Y" --rm --network=host \
-v ~/docker/isaac-sim/cache/ov:/root/.cache/ov:rw \
-v ~/docker/isaac-sim/cache/pip:/root/.cache/pip:rw \
-v ~/docker/isaac-sim/cache/glcache:/root/.cache/nvidia/GLCache:rw \
-v ~/docker/isaac-sim/cache/computecache:/root/.nv/ComputeCache:rw \
-v ~/docker/isaac-sim/logs:/root/.nvidia-omniverse/logs:rw \
-v ~/docker/isaac-sim/config:/root/.nvidia-omniverse/config:rw \
-v ~/docker/isaac-sim/data:/root/.local/share/ov/data:rw \
-v ~/docker/isaac-sim/documents:/root/Documents:rw \
public.ecr.aws/l1t2k0k4/isaac-sim:2022.1.1
```
then
```
    ./runheadless.native.sh
```

The docker image, once initiated will give you the following message:

```
Isaac Sim Headless Native App is loaded.
```

This message confirms that the docker image is up and running.

### Setup Omniverse  

#### Install launcher

- Download the [Omniverse Launcher](https://www.nvidia.com/en-us/omniverse/). This will download `omniverse-launcher-linux.AppImage`, make it an executable by 

```
    chmod a+x /path/to/omniverse-launcher-linux.AppImage
```

- Then install a few dependencies 

```
    sudo apt-get install FUSE
```

- Now launch the app

```
    cd /path/to/omniverse-launcher-linux.AppImage
    ./omniverse-launcher-linux.AppImage
```

- This will first give a login screen, and then the app itself.

![Omniverse Launcher](/img/omniverse_launcher.png)

- Under the **`Exchange`** tab, search and install **`OMNIVERSE STREAMING CLIENT`**.

#### Setup Client

- Once installed click on launch, this will pop up a dialog box asking for `Server Address` and `Resolution`. The server address is the address to the machine that is running the `SSH Client` or to the `AWS Instance`. 

![Omniverse Stream Client](/img/stream-client.png)

- Click on Connect, and this will launch your Isaac Sim Instance

![Isaam Sim Stream Client](/img/Isaac_Sim_stream_client.png)

