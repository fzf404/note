<!-- 
title: Seafile
sort: 
--> 

```bash
docker run -d --name seafile \
  --restart unless-stopped \
  -p 8080:8080 \
  -p 8082:8082 \
  -v /your/seafile/directory:/seafile \
  -e SEAFILE_ADMIN="xxxxx@xxx" \
  -e SEAFILE_ADMIN_PW="xxx" \
  tinysnake/seafile
```

