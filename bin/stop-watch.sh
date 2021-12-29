
ps -ef | grep babel-watch | grep -v grep | awk '{print $2}' | xargs kill
