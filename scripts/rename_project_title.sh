#!/bin/sh


OLD_NAME=$1
NEW_NAME=$2

OLD_NAME_LOWER=${OLD_NAME,,}
NEW_NAME_LOWER=${NEW_NAME,,}

echo 'Old project name: '$OLD_NAME
echo 'Old project name lowercase: '$OLD_NAME_LOWER

echo 'New project name: '$NEW_NAME
echo 'New project name lowercase: '$NEW_NAME_LOWER

find . -type f -exec sed -i 's/'$OLD_NAME_LOWER'/'$NEW_NAME_LOWER'/g' {} \;
find . -type f -exec sed -i 's/'$OLD_NAME'/'$NEW_NAME'/g' {} \;