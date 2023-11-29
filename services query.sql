Alter table Services modify column service_type VARCHAR(255);
delete from Services WHERE service_id=6;
select *from Services;

Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('1','13','Cafeteria','41.584340714396646','-87.47376963684603');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('2','2',"Leo's Market Place",'41.58707249096816','-87.47538925519639');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('3','2','Student Life','41.58707770451279','-87.47542065031996');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('4','11','Center for Innovation through Visualization & Simulation (CIVS)','41.586131854838854','-87.47549391972161');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('5','11','IT Help Desk','41.58637836966487','-87.47547265623038');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('6','13','Bookstore','41.58420354120943','-87.47464738137995');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('7','13','Career Center','41.58418754793029','-87.4738763754069');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('8','13','Welcome Center','41.58419426688091','-87.47412609667495');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('9','13','Testing Center','41.58442808592674','-87.47444049395489');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('10','7','Graduate Admissions','41.58303820582246','-87.47548997219268');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('11','7','International Admissions & Immigration Services','41.58306638317554','-87.47545230165468');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('12','7','Bursar Office','41.58315447407467','-87.4753416251211');
Insert into Services(service_id,building_id,service_type,Service_latitude,Service_longitutude)values('13','7','Registrar Office','41.58277939104131','-87.47542300234736');

