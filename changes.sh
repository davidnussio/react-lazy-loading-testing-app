#!/bin/sh

for i in src/routes/page-*.tsx; do sed -i '/Content:/ a Data' $i; done