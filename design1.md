# State Diagram - Map Data and User Interactions for team-c PNW Campus Map

![state diagram image](/Screenshot%202023-12-04%20110917.png)

This README gives information about the frontend , backend , Third Party API and database of the campus map system. 

##  Description

### Frontend :
- **SendRequest**:
  - A request is been intiated from the client towards this system.
- **ReceiveData**:
  - After Sending the request from the front end the system recieves the data from the backend
- **UserInteraction**:
  - It will signify new various actions and requests through the system.

### Backend :
- **HandleData**:
  - Manages the overall data handling process in the backend.
- **FetchData**:
  - It will recieve the necessary information from the Database..
- **ProcessData**:
  - Involves processing the retrieved data before sending it to the Third-party API.
- **BackendData**:
  - From the third part API data recieved the data is been created at this phase.
- **SendToFrontend**:
  - To the frontend the data is been sent as a reply for the further interactions.

### ThirdPartyAPI :
- **InteractAPI**:
  - Initiates interactions with the Leaflet API.
- **Requestprocessed**:
  - Processes requests related to map data or operations within the Leaflet API.
- **SendToBackend**:
  - Transmits processed map data back to the backend after Leaflet API operations.

### Database State:
- **QueryData**:
  - Intitial state of the queriiing data is been reperesented.
- **ReturnData**:
  - The state where the data is been returned is been represented.

### Transitions and Connections:
- **Frontend → Backend**:
  - Represents data requests from the frontend to the backend for map data or user interactions.
- **Backend → Database**:
  - Backend's request to the database for necessary data.
- **Database → Backend**:
  - Represents the response from the database to the backend with retrieved data.
- **Backend → ThirdPartyAPI**:
  - Backend's request to the Third-party API for map data or operations like routing.
- **ThirdPartyAPI → Backend**:
  - Represents the response from the Third-party API to the backend after processing the request.
- **Backend → Frontend**:
  - Transmission of processed data from the backend to the frontend for rendering or further interactions.

This explains the state transitions and interactions within a system managing map-related operations and user interactions using a state diagram.
