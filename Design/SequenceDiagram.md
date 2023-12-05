# Campus Map Sequence Diagram

## Overview

This repository contains a sequence diagram illustrating the interactions within a campus map system. The diagram showcases how different components collaborate to provide users with a seamless experience in terms of location selection, search, and information retrieval on a campus map.

![SequenceDiagram](https://github.com/Sirish-C/PNW-Campus-Map-Improvement/assets/118717710/ea5f6dda-d1d3-42fc-8676-b23a55793205)


## Components

1. **User**: Represents an individual interacting with the campus map system.
2. **Drop-down Menu**: Allows the user to make a selection from a list of options.
3. **Marker**: A graphical indicator on the map representing a specific location or point of interest.
4. **Search Bar**: A text input field enabling users to type search queries for specific locations on the campus.
5. **Database**: Stores and retrieves information related to campus locations, including descriptive information about markers.

## Scenario

1. The user interacts with the drop-down menu to select a specific option.
2. In response to the user's selection, a marker pops up on the campus map.
3. The user types a search query into the search bar.
4. A marker corresponding to the search query pops up on the map.
5. The user clicks on a displayed marker.
6. The system retrieves descriptive information about the selected marker from the database and displays it to the user.

## Purpose

This sequence diagram serves as a visual representation of the interactions within the campus map system. It aids stakeholders, developers, and other team members in understanding how different components work together to deliver a user-friendly experience.

## How to Read the Diagram

1. **Activation Lifelines**: Vertical lines represent the lifelines of the components involved, showing the time period during which they are active.
2. **Arrows and Messages**: Horizontal arrows represent the flow of messages between components, indicating the sequence of interactions.
3. **Events and Actions**: Events such as user actions, system responses, and data retrieval are annotated along the timeline to provide a clear understanding of the sequence of events.

## Diagram Maintenance

This diagram should be updated to reflect any changes in the system architecture or interactions. Modifications to the user interface, addition of new features, or changes to the data retrieval process should be accurately represented to keep the documentation up-to-date.

## Additional Information

For more details on the system's architecture, specific components, or implementation details, refer to the accompanying system documentation.

