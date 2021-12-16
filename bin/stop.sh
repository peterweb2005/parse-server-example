
ps -ef | grep parse-server | grep -v grep | awk '{print $2}' | xargs kill
