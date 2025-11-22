---
layout: page
title: 🤖 Robot Simulation Project using ROS2 Humble and Gazebo!
description: The robot can map a room and navigate from one location to another while avoiding obstacles with SLAM and Nav2.
img: assets/img/ros_sim.jpeg
importance: 1
category: work
related_publications: true
---
## Overview

This project features a robot model equipped with:

- 🛰️ **Lidar**
- 📸 **Stereo Camera as a Depth Camera**

Using these sensors, the robot can map a room and navigate from one location to another while avoiding obstacles with SLAM and Nav2.
### Here is a video demonstrating the project:

<div class="text-center">
    <div class="caption text-end">
        <h4>Demo Video</h4>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm mt-3 mt-md-0">
            <a href="https://www.youtube.com/watch?v=foo7gtkE8sE" target="_blank" rel="noopener noreferrer">
                <img src="{{ site.baseurl }}/assets/img/ros_sim.jpeg" alt="Hand Drawing Math Solver" class="img-fluid rounded z-depth-1" width="400" height="300">
            </a>
        </div>
    </div>
</div>



link:- https://www.youtube.com/watch?v=foo7gtkE8sE 


## Branches

### 🌍 Main Branch: Mapping and Navigation
- Collects environmental data using sensors and navigates the robot from one location to another, avoiding obstacles along the way.

### 🎾 Object Tracking Branch
- The robot tracks a tennis ball using OpenCV object detection.

## Usage

- **Mapping a Room**:
    1. Move the robot around to create a map.
    2. Save the generated map.

- **Navigation**:
    1. Load the saved map.
    2. Set a goal location.
    3. The robot will navigate to the goal while avoiding obstacles.

- **Object Tracking**:
    1. Switch to the `ObjectTracking` branch.
    2. Launch the object tracking node.
    3. The robot will track a tennis ball in the environment.

## Simulation Videos

🎥 Watch simulation videos in the [Simulator Video Repository](https://github.com/PrabathBK/Ros2-Simulation-with-Gazebo/tree/main/simulation%20videos).

**Project Repository:** [Project Repository](https://github.com/PrabathBK/Ros2-Simulation-with-Gazebo)

**Skills:** Robot Operating System (ROS) , Linux , Ubuntu , Gazebo , Automation

## License

This project is licensed under the MIT License.

---

Happy Coding! 🎉
