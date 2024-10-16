A react frontend
- requires login via keycloak auth

# starting
requirements
- a running instance of nginx-proxy
  - handles client traffic on 3000 and keycloak traffic on 8080
  - ~/checkout/devprojects/nginx-proxy
    - docker compose up -d
- a running instance of keycloak-auth on 8080
  - ~/checkout/devprojects/keycloak-auth
  - building
    - ./build_docker_image.sh
  - access to kcdatabase db on pg vm
  - vertx realm with vertx-service client with tester user
  - starting: docker compose up -d
- /etc/hosts entry for foo.local and keycloak.local on 127.0.0.1
npm start

https://foo.local
https://keycloak.local
