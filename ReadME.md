## PNW - Campus Map Improvements.
Backend Team:
1. Database Design with MySQL Workbench:
MySQL Workbench was employed as a comprehensive visual tool for the design, modeling, and creation of the entire project database. The MySQL language was utilized to craft the database schema, defining tables, relationships, and other essential components.

Entity Modeling: Entities such as Buildings, Parking, Entry/exit points, Dining, Emergency poles, popular services related to the PNW Campus were identified and modeled within MySQL Workbench. Each entity's attributes and relationships with other entities were specified.

Table Definitions: The design process involved translating the entity models into concrete database tables. These tables encapsulated the structure and organization of data, encompassing fields corresponding to the attributes of each entity.

2. Data Export from MySQL:
Following the database design, the next step involved populating the created tables with relevant data. This data, representative of Building services, Emergency poles, and PNW Campus details, was then exported using a local MySQL Server.

Data Population: Records were created within the tables to represent real-world instances of Buildings, Parking, Entry/exit points, Dining, Emergency poles, popular services information pertinent to the PNW Campus.

Export Process: Utilizing a local MySQL Server, data export procedures were executed. This may have involved generating SQL scripts or using export functionalities within MySQL Workbench to obtain a snapshot of the populated database.

3. Node.js Backend Integration:
With the database and exported data in place, the next phase involved establishing connectivity between the Node.js backend and the MySQL database.

Node.js Backend Development: A Node.js backend was developed to serve as the application's server-side logic. Node.js, being a JavaScript runtime, allowed for unified development with the frontend.

Connection Setup: A connection was established between the Node.js backend and the MySQL database. This connection facilitated seamless communication between the application and the database.

MySQL Library Usage: To interact with the MySQL database from the Node.js application, specialized libraries or modules such as mysql2 or sequelize were likely employed. These libraries provide convenient methods for executing queries, handling results, and managing the database connection.

Local Server Deployment: Both the Node.js backend and the MySQL server were hosted locally on a server. This localized deployment is conducive to development and testing phases.
