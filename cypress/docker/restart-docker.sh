#!/bin/bash
# 获取当前脚本所在目录（不使用cd，直接用BASH_SOURCE）
SCRIPT_DIR="$(dirname ${BASH_SOURCE[0]})"
# 计算 docker-compose.yml 的绝对路径
YML_PATH="$SCRIPT_DIR/docker-compose.yml"

docker-compose -f "$YML_PATH" down -v
docker-compose -f "$YML_PATH" up -d
