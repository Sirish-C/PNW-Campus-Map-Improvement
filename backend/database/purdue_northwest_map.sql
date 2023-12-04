CREATE TABLE `Buildings`  (
  `building_id` int NOT NULL AUTO_INCREMENT,
  `building_short_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `building_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `building_location` int NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`building_id`) USING BTREE,
  INDEX `building_location`(`building_location` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `Campuses`  (
  `campus_id` int NOT NULL AUTO_INCREMENT,
  `campus_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`campus_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `Coordinates`  (
  `coordinate_id` int NOT NULL AUTO_INCREMENT,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `altitude` float NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`coordinate_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 68 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `Departments`  (
  `dept_id` int NOT NULL AUTO_INCREMENT COMMENT 'The id of the department.',
  `dept_building` int NOT NULL,
  `dept_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'The name of the department.\r\n',
  `dept_short_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'The shor name of the department.\r\n',
  `dept_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'Description of the department. Contain its location and functions.',
  `dept_floor` int NULL DEFAULT NULL COMMENT 'The floor number.',
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`dept_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `EmergencyExits`  (
  `ee_id` int NOT NULL AUTO_INCREMENT,
  `ee_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ee_location` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ee_latitude` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ee_longitude` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `building_id` int NULL DEFAULT NULL,
  `ee_loc` int NULL DEFAULT NULL,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`ee_id`) USING BTREE,
  INDEX `ee_location`(`ee_location` ASC) USING BTREE,
  INDEX `ee_loc`(`ee_loc` ASC) USING BTREE,
  INDEX `ee_building`(`building_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `EmergencyPoles`  (
  `Ep_id` int NOT NULL,
  `Ep_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Ep_latitude` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Ep_longitude` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Ep_location` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Building_id` int NOT NULL,
  `ep_loc` int NULL DEFAULT NULL,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`Ep_id`, `Building_id`) USING BTREE,
  INDEX `ep_building_id`(`Building_id` ASC) USING BTREE,
  INDEX `ep_loc`(`ep_loc` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `Locations`  (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `location_coordinate` int NOT NULL,
  `location_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `campus_id` int NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`location_id`) USING BTREE,
  INDEX `location_coordinate`(`location_coordinate` ASC) USING BTREE,
  INDEX `campus_id`(`campus_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `ParkingLots`  (
  `pl_id` int NOT NULL AUTO_INCREMENT,
  `pl_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pl_latitude` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pl_longitude` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `building_id` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pl_location` int NULL DEFAULT NULL,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`pl_id`) USING BTREE,
  INDEX `pl_coordinates`(`pl_longitude` ASC) USING BTREE,
  INDEX `pl_location`(`pl_location` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `Services`  (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `building_id` int NOT NULL,
  `service_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Service_latitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Service_longitutude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `service_loc` int NULL DEFAULT NULL,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`service_id`) USING BTREE,
  INDEX `service_building_id`(`building_id` ASC) USING BTREE,
  INDEX `service_type`(`service_type` ASC) USING BTREE,
  INDEX `service_loc`(`service_loc` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

CREATE TABLE `Users`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `current_location` int NULL DEFAULT NULL,
  `destination_location` int NULL DEFAULT NULL,
  `user_coordinate` int NULL DEFAULT NULL,
  `create_time` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` int NULL DEFAULT 0,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `current_location`(`current_location` ASC) USING BTREE,
  INDEX `destination_location`(`destination_location` ASC) USING BTREE,
  INDEX `user_coordinate`(`user_coordinate` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

ALTER TABLE `Buildings` ADD CONSTRAINT `building_location` FOREIGN KEY (`building_location`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Departments` ADD CONSTRAINT `building_id` FOREIGN KEY (`dept_id`) REFERENCES `Buildings` (`building_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `EmergencyExits` ADD CONSTRAINT `EmergencyExits_ibfk_1` FOREIGN KEY (`building_id`) REFERENCES `Buildings` (`building_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `EmergencyExits` ADD CONSTRAINT `EmergencyExits_ibfk_2` FOREIGN KEY (`ee_loc`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `EmergencyPoles` ADD CONSTRAINT `ep_building_id` FOREIGN KEY (`Building_id`) REFERENCES `Buildings` (`building_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `EmergencyPoles` ADD CONSTRAINT `ep_loc` FOREIGN KEY (`ep_loc`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Locations` ADD CONSTRAINT `campus_id` FOREIGN KEY (`campus_id`) REFERENCES `Campuses` (`campus_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Locations` ADD CONSTRAINT `location_coordinate` FOREIGN KEY (`location_coordinate`) REFERENCES `Coordinates` (`coordinate_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `ParkingLots` ADD CONSTRAINT `pl_location` FOREIGN KEY (`pl_location`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Services` ADD CONSTRAINT `service_building_id` FOREIGN KEY (`building_id`) REFERENCES `Buildings` (`building_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Services` ADD CONSTRAINT `service_loc` FOREIGN KEY (`service_loc`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Users` ADD CONSTRAINT `current_location` FOREIGN KEY (`current_location`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Users` ADD CONSTRAINT `destination_location` FOREIGN KEY (`destination_location`) REFERENCES `Locations` (`location_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE `Users` ADD CONSTRAINT `user_coordinate` FOREIGN KEY (`user_coordinate`) REFERENCES `Coordinates` (`coordinate_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

CREATE ALGORITHM = UNDEFINED DEFINER = `admin`@`%` SQL SECURITY DEFINER VIEW `view_building` AS select `Buildings`.`building_id` AS `building_id`,`Buildings`.`building_short_name` AS `building_short_name`,`Buildings`.`building_name` AS `building_name`,`Coordinates`.`longitude` AS `longitude`,`Coordinates`.`latitude` AS `latitude`,`Coordinates`.`altitude` AS `altitude`,`Locations`.`location_description` AS `location_description`,`Locations`.`campus_id` AS `campus_id` from ((`Buildings` join `Locations` on((`Buildings`.`building_location` = `Locations`.`location_id`))) join `Coordinates` on((`Locations`.`location_coordinate` = `Coordinates`.`coordinate_id`)));

CREATE ALGORITHM = UNDEFINED DEFINER = `admin`@`%` SQL SECURITY DEFINER VIEW `view_ee` AS select `EmergencyExits`.`ee_id` AS `ee_id`,`EmergencyExits`.`ee_name` AS `ee_name`,`Buildings`.`building_short_name` AS `building_short_name`,`Coordinates`.`latitude` AS `latitude`,`Coordinates`.`longitude` AS `longitude`,`Coordinates`.`altitude` AS `altitude`,`Locations`.`location_description` AS `location_description`,`Locations`.`campus_id` AS `campus_id` from (((`EmergencyExits` join `Buildings` on((`EmergencyExits`.`building_id` = `Buildings`.`building_id`))) join `Locations` on((`EmergencyExits`.`ee_loc` = `Locations`.`location_id`))) join `Coordinates` on((`Locations`.`location_coordinate` = `Coordinates`.`coordinate_id`)));

CREATE ALGORITHM = UNDEFINED DEFINER = `admin`@`%` SQL SECURITY DEFINER VIEW `view_ep` AS select `EmergencyPoles`.`Ep_id` AS `Ep_id`,`EmergencyPoles`.`Ep_name` AS `Ep_name`,`Buildings`.`building_short_name` AS `building_short_name`,`Coordinates`.`latitude` AS `latitude`,`Coordinates`.`longitude` AS `longitude`,`Coordinates`.`altitude` AS `altitude`,`Locations`.`location_description` AS `location_description`,`Locations`.`campus_id` AS `campus_id` from (((`EmergencyPoles` join `Buildings` on((`EmergencyPoles`.`Building_id` = `Buildings`.`building_id`))) join `Locations` on((`EmergencyPoles`.`ep_loc` = `Locations`.`location_id`))) join `Coordinates` on((`Locations`.`location_coordinate` = `Coordinates`.`coordinate_id`)));

CREATE ALGORITHM = UNDEFINED DEFINER = `admin`@`%` SQL SECURITY DEFINER VIEW `view_pl` AS select `ParkingLots`.`pl_id` AS `pl_id`,`ParkingLots`.`pl_name` AS `pl_name`,`Buildings`.`building_short_name` AS `building_short_name`,`Coordinates`.`latitude` AS `latitude`,`Coordinates`.`longitude` AS `longitude`,`Coordinates`.`altitude` AS `altitude`,`Locations`.`location_description` AS `location_description`,`Locations`.`campus_id` AS `campus_id` from (((`Buildings` join `Locations`) join `ParkingLots` on((`ParkingLots`.`pl_location` = `Locations`.`location_id`))) join `Coordinates` on((`Locations`.`location_coordinate` = `Coordinates`.`coordinate_id`))) where (`Buildings`.`building_id` = `ParkingLots`.`building_id`);

CREATE ALGORITHM = UNDEFINED DEFINER = `admin`@`%` SQL SECURITY DEFINER VIEW `view_service` AS select `Services`.`service_id` AS `service_id`,`Services`.`service_type` AS `service_type`,`Buildings`.`building_short_name` AS `building_short_name`,`Coordinates`.`latitude` AS `latitude`,`Coordinates`.`longitude` AS `longitude`,`Coordinates`.`altitude` AS `altitude`,`Locations`.`location_description` AS `location_description`,`Locations`.`campus_id` AS `campus_id` from (((`Services` join `Buildings` on((`Services`.`building_id` = `Buildings`.`building_id`))) join `Locations` on((`Services`.`service_loc` = `Locations`.`location_id`))) join `Coordinates` on((`Locations`.`location_coordinate` = `Coordinates`.`coordinate_id`)));

