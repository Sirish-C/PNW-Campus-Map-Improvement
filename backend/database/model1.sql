CREATE TABLE `Buildings`  (
  `building_id` int NOT NULL AUTO_INCREMENT,
  `building_name` varchar(255) NULL,
  `building_coordinate` int NULL,
  `building_departments` int NULL,
  `building_location` int NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`building_id`)
);

CREATE TABLE `Campus`  ();

CREATE TABLE `Campuses`  (
  `campus_id` int NOT NULL AUTO_INCREMENT,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`campus_id`)
);

CREATE TABLE `Coordinates`  (
  `coordinate_id` int NOT NULL AUTO_INCREMENT,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `altitude` float NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`coordinate_id`)
);

CREATE TABLE `Departments`  (
  `dept_id` int NOT NULL AUTO_INCREMENT COMMENT 'The id of the department.',
  `dept_building` int NOT NULL,
  `dept_name` varchar(255) NOT NULL COMMENT 'The name of the department.\r\n',
  `dept_short_name` varchar(255) NULL COMMENT 'The shor name of the department.\r\n',
  `dept_description` varchar(255) NULL COMMENT 'Description of the department. Contain its location and functions.',
  `dept_floor` int NULL COMMENT 'The floor number.',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`dept_id`)
);

CREATE TABLE `EmergencyExits`  (
  `ee_id` int NOT NULL AUTO_INCREMENT,
  `ee_name` varchar(255) NULL,
  `ee_location` int NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ee_id`)
);

CREATE TABLE `Locations`  (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) NOT NULL,
  `location_coordinate` int NOT NULL,
  `location_description` varchar(255) NULL,
  `campus_id` int NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`location_id`)
);

CREATE TABLE `ParkingLots`  (
  `pl_id` int NOT NULL AUTO_INCREMENT,
  `pl_name` varchar(255) NULL,
  `pl_capacity` varchar(255) NULL,
  `pl_coordinates` int NULL,
  `pl_parkingId` int NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`pl_id`)
);

CREATE TABLE `Services`  (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `service_type` varchar(255) NULL,
  `service_roomnum` int NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`service_id`)
);

CREATE TABLE `ServiceTypes`  (
  `service_type_id` int NOT NULL AUTO_INCREMENT,
  `service_type_name` varchar(255) NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`service_type_id`)
);

CREATE TABLE `Users`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `current_location` int NULL,
  `destination_location` int NULL,
  `user_coordinate` int NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
);

ALTER TABLE `Buildings` ADD CONSTRAINT `building_coordinate` FOREIGN KEY (`building_coordinate`) REFERENCES `Coordinates` (`coordinate_id`);
ALTER TABLE `Buildings` ADD CONSTRAINT `building_location` FOREIGN KEY (`building_location`) REFERENCES `Locations` (`location_id`);
ALTER TABLE `Departments` ADD CONSTRAINT `building_id` FOREIGN KEY (`dept_id`) REFERENCES `Buildings` (`building_id`);
ALTER TABLE `EmergencyExits` ADD CONSTRAINT `ee_location` FOREIGN KEY (`ee_location`) REFERENCES `Locations` (`location_id`);
ALTER TABLE `Locations` ADD CONSTRAINT `location_coordinate` FOREIGN KEY (`location_coordinate`) REFERENCES `Coordinates` (`coordinate_id`);
ALTER TABLE `Locations` ADD CONSTRAINT `campus_id` FOREIGN KEY (`campus_id`) REFERENCES `Campuses` (`campus_id`);
ALTER TABLE `ParkingLots` ADD CONSTRAINT `pl_coordinates` FOREIGN KEY (`pl_coordinates`) REFERENCES `Coordinates` (`coordinate_id`);
ALTER TABLE `Services` ADD CONSTRAINT `service_type` FOREIGN KEY (`service_type`) REFERENCES `ServiceTypes` (`service_type_id`);
ALTER TABLE `Users` ADD CONSTRAINT `current_location` FOREIGN KEY (`current_location`) REFERENCES `Locations` (`location_id`);
ALTER TABLE `Users` ADD CONSTRAINT `destination_location` FOREIGN KEY (`destination_location`) REFERENCES `Locations` (`location_id`);
ALTER TABLE `Users` ADD CONSTRAINT `user_coordinate` FOREIGN KEY (`user_coordinate`) REFERENCES `Coordinates` (`coordinate_id`);

