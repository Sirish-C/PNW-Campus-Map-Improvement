# State Diagram - Map Data and User Interactions for team-c PNW Campus Map

![state diagram image](/Design/statediagram_FB.png)

This README details the state transitions between the Frontend, Backend, Third-party API, and Database in a system managing map data and user interactions.

## Detailed Description

### Frontend State:
- **SendRequest**:
  - Initiates requests for map data or user interactions.
- **ReceiveData**:
  - Represents the phase where the frontend receives data from the backend after sending a request.
- **UserInteraction**:
  - Signifies various user interactions prompting new requests or actions.

### Backend State:
- **HandleData**:
  - Manages the overall data handling process in the backend.
- **FetchData**:
  - Retrieves necessary data from the database.
- **ProcessData**:
  - Involves processing the retrieved data before sending it to the Third-party API.
- **ThirdPartyAPI**:
  - Interacts with the Third-party API for map-related operations or data processing.
- **BackendData**:
  - Represents the processed map-related data received from the Third-party API.
- **SendToFrontend**:
  - Sends processed data back to the frontend for display or further interactions.

### ThirdPartyAPI State:
- **InteractAPI**:
  - Initiates interactions with the Leaflet API.
- **ProcessRequest**:
  - Processes requests related to map data or operations within the Leaflet API.
- **SendToBackend**:
  - Transmits processed map data back to the backend after Leaflet API operations.

### Database State:
- **QueryData**:
  - Represents the initial state of querying data from the database.
- **ReturnData**:
  - Indicates the state where the database returns the queried data.

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

This comprehensive overview explains the state transitions and interactions within a system managing map-related operations and user interactions using a state diagram.
