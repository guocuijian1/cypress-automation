@echo off
REM 关闭所有容器并清理数据卷

docker-compose down -v

REM 后台启动所有容器

docker-compose up -d

pause

