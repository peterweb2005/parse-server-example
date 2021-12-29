
ps -ef | grep ts-node | grep -v grep | awk '{print $2}' | xargs kill
