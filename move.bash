
if [ "$(uname)" == "Darwin" ]; then
    mkdir $1
    mv ./in-progress/$1.js ./$1
    cp ./in-progress/README.md ./$1

else
    mkdir %1
    move ".\in-progress\%1.js" ".\%1"
    copy ".\in-progress\README.md" ".\%1"

fi