create database auth;
use auth;
create table authorized_users(name varchar(20),password varchar(40),primary key(name));

insert into authorized_users values ('username','password');
insert into authorized_users values ('testuser',sha1('password'));

grant select on auth.* to 'root' identified by 'root';
flush privileges;
