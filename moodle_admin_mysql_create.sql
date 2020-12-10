CREATE TABLE `User` (
	`id` int NOT NULL AUTO_INCREMENT,
	`login` varchar(300) NOT NULL UNIQUE,
	`password` varchar(300) NOT NULL,
	`isActive` BOOLEAN NOT NULL DEFAULT true,
	`firstName` varchar(500),
	`lastName` varchar(500),
	PRIMARY KEY (`id`)
);

CREATE TABLE `token` (
	`id` int NOT NULL AUTO_INCREMENT,
	`token` varchar(255) NOT NULL UNIQUE,
	`datetime` DATETIME NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `moodleData` (
	`id` int NOT NULL AUTO_INCREMENT,
	`baseName` varchar(255) NOT NULL UNIQUE,
	`login` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`token` varchar(255),
	PRIMARY KEY (`id`)
);

CREATE TABLE `extAPI` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`login` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`token` varchar(255),
	PRIMARY KEY (`id`)
);

CREATE TABLE `UserToken` (
	`user_id` int NOT NULL,
	`token_id` int NOT NULL
);

CREATE TABLE `UserMoodleData` (
	`user_id` int NOT NULL,
	`moodleData_id` int NOT NULL
);

CREATE TABLE `UserExtAPI` (
	`user_id` int NOT NULL,
	`extApi_id` int NOT NULL
);

ALTER TABLE `UserToken` ADD CONSTRAINT `UserToken_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `UserToken` ADD CONSTRAINT `UserToken_fk1` FOREIGN KEY (`token_id`) REFERENCES `token`(`id`);

ALTER TABLE `UserMoodleData` ADD CONSTRAINT `UserMoodleData_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `UserMoodleData` ADD CONSTRAINT `UserMoodleData_fk1` FOREIGN KEY (`moodleData_id`) REFERENCES `moodleData`(`id`);

ALTER TABLE `UserExtAPI` ADD CONSTRAINT `UserExtAPI_fk0` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`);

ALTER TABLE `UserExtAPI` ADD CONSTRAINT `UserExtAPI_fk1` FOREIGN KEY (`extApi_id`) REFERENCES `extAPI`(`id`);

