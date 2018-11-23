# estate-server
server

[![Build Status](https://travis-ci.com/hyestate/estate-server.svg?branch=master)](https://travis-ci.com/hyestate/estate-server)

#数据库初始化
create database estate;
GRANT ALL PRIVILEGES ON estate.* TO 'estate'@'%' IDENTIFIED BY 'estate_passwd';
