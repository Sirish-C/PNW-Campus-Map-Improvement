from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, Float, DateTime,String
Base = declarative_base()

from sqlalchemy import ForeignKey

class Locations(Base):
    __tablename__ = 'Locations'

    location_id = Column(Integer, primary_key=True)
    location_name = Column(String(255))
    location_coordinate = Column(Integer, ForeignKey('Coordinates.coordinate_id'))
    location_description = Column(String(255))
    campus_id = Column(Integer, ForeignKey('Campuses.campus_id'))
    create_time = Column(DateTime)
    update_time = Column(DateTime)

class Buildings(Base):
    __tablename__ = 'Buildings'

    building_id = Column(Integer, primary_key=True)
    building_short_name = Column(String(255))
    building_name = Column(String(255))
    building_departments = Column(Integer, ForeignKey('Departments.department_id'))
    building_location = Column(Integer, ForeignKey('Locations.location_id'))
    create_time = Column(DateTime)
    update_time = Column(DateTime)

class Coordinates(Base):
    __tablename__ = 'Coordinates'

    coordinate_id = Column(Integer, primary_key=True)
    latitude = Column(Float)
    longitude = Column(Float)
    altitude = Column(Float)
    create_time = Column(DateTime)
    update_time = Column(DateTime)

class EmergencyExits(Base):
    __tablename__ = 'EmergencyExits'

    ee_id = Column(Integer, primary_key=True)
    ee_name = Column(String(255))
    ee_location = Column(String(25))
    create_time = Column(DateTime)
    update_time = Column(DateTime)
    ee_latitude = Column(String(25))
    ee_longitude = Column(String(25))
    building_id = Column(Integer, ForeignKey('Buildings.building_id'))
    ee_loc = Column(Integer, ForeignKey('Locations.location_id'))

class Campuses(Base):
    __tablename__ = 'Campuses'

    campus_id = Column(Integer, primary_key=True)
    campus_name = Column(String(255))
    create_time = Column(DateTime)
    update_time = Column(DateTime)

class EmergencyPoles(Base):
    __tablename__ = 'EmergencyPoles'

    Ep_id = Column(Integer, primary_key=True)
    Ep_name = Column(String(45))
    Ep_latitude = Column(String(45))
    Ep_longitude = Column(String(45))
    Ep_location = Column(String(45))
    Building_id = Column(Integer, ForeignKey('Buildings.building_id'))
    ep_loc = Column(Integer, ForeignKey('Locations.location_id'))

class Services(Base):
    __tablename__ = 'Services'

    service_id = Column(Integer, primary_key=True)
    building_id = Column(Integer, ForeignKey('Buildings.building_id'))
    service_type = Column(String(255))
    create_time = Column(DateTime)
    update_time = Column(DateTime)
    Service_latitude = Column(Float)
    Service_longitutude = Column(Float)
    service_loc = Column(Integer, ForeignKey('Locations.location_id'))

class ParkingLots(Base):
    __tablename__ = 'ParkingLots'

    pl_id = Column(Integer, primary_key=True)
    pl_name = Column(String(255))
    pl_latitude = Column(String(25))
    pl_longitude = Column(String(25))
    create_time = Column(DateTime)
    update_time = Column(DateTime)
    building_id = Column(String(45))
    pl_location = Column(Integer, ForeignKey('Locations.location_id'))
