-- =====================================================
-- autor: thiago-amm
-- data:  21/09/2017
-- =====================================================

USE mysql;

DROP DATABASE IF EXISTS webapp_jsf;
DROP USER IF EXISTS webapp_jsf;

CREATE DATABASE IF NOT EXISTS webapp_jsf DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
CREATE USER IF NOT EXISTS webapp_jsf;

GRANT ALL PRIVILEGES ON webapp_jsf.* TO 'webapp_jsf'@'%' IDENTIFIED BY 'webapp_jsf';
