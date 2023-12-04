## ER- Map Data and User Interactions for team-c PNW Campus Map
##ER diagram ![ER ](<Screenshot 2023-12-05 042657.png>)
This repository contains the Entity-Relationship (ER) diagram representing the data model for a campus improvement map application. The ER diagram illustrates the relationships between various entities and their attributes, providing a structured view of the underlying data.

##Description

## Overview

The campus improvement map application aims to organize and manage data related to different locations on a campus, facilitating improvements and optimizations. The ER diagram serves as a blueprint for the database schema, capturing entities such as buildings, amenities, and their relationships.

The ER diagram illustrates the following key entities and their relationships:

- **Location:** Represents physical locations on the campus, such as buildings, landmarks, and specific points of interest.
- **Attributes:** Describes various attributes associated with each location, such as name, description, coordinates, and improvement status.
- **Improvement:** Captures information about campus improvements, their types, and the status of ongoing or completed projects.
- **Amenities:** Represents additional features or facilities within or around a location, contributing to the overall campus experience.

Information about various Entities are been stored in the database and the datamodel behind it is been explained

##Entities

**CAMPUS**
In the campus entity the information about the campus is been stored with the attributes of the Campud name , Campus ID , Location.

**Buildings**
In the buildings entity the information about the building is stored i.e Name , Coordinates , Departments, Locations , Services are been stored.

**Parking Lots**
In the entity of parking lots the information about the lot number , capacity of the vehicles , parking ID and coordinates are been stored and been connected with many to many relationship woth the locations.

**Departments**
In the departments entity the information about the Department ID , floor column are been stored.

**Emergency poles**
In the entity of the Emergency poles the information about the pole number and the coordinates of the pole are been stored.

**Services**
Services entity stores the information about the name of the services service type Description and room number.

**Coordinates**
Coordinates entity stores the information about the latitudes , longitudes and altitudes of the of the locations and it is been connected with a many to one relationship with the locations.

In a comphrehensive way this explains the data model and their relationships between the Entities in the Er diagram.




