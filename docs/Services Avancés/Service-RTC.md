
Openfire est un serveur de collaboration en temps réel (RTC) sous licence Open Source Apache. Il utilise le seul protocole ouvert largement adopté pour la messagerie instantanée, XMPP Openfire est incroyablement facile à configurer et à administrer, mais offre une sécurité et des performances à toute épreuve

### Installation et configuration d'un serveur openfire sous ubuntu(20.04)

#### Installation d'openFire

Télécharger la dernière version d'openFire 
``` shell
wget https://objects.githubusercontent.com/github-production-release-asset-2e65be/18511687/1903a7e8-c322-4525-9bbe-06732fb237f2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220704%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220704T191259Z&X-Amz-Expires=300&X-Amz-Signature=419b34a242d399f8df8cb229e2c1b8ad17a2cbffb2fb4563497ced65c32a1bec&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=18511687&response-content-disposition=attachment%3B%20filename%3Dopenfire_4_7_1.tar.gz&response-content-type=application%2Foctet-stream
```
Désarchiver
``` shell
tar -xvzf openfire_4_7_1.tar.gz -C /opt/
```
Lancer openfire qui va écouter sur le port 9090
``` shell
cd /opt/openfire/bin
./openfire start
```
Créer la base de données

``` shell
mysql -u root -p
mysql> create database openfire;
```
Créer l'utilisateur 

``` shell
mysql> create user bouki3 indentified by "passer";
mysql> grant all privileges on openfire.* to bouki3;
mysql> flush privileges
```

#### Configuration via l'interface web

![photo](../../static/img/openfire1.png)
![photo](../../static/img/openfire2.png)
![photo](../../static/img/openfire3.png)
![photo](../../static/img/openfire4.png)
![photo](../../static/img/openfire5.png)
![photo](../../static/img/openfire6.png)

