
Domain Name System est un service dont la principale fonction est de traduire un nom de domaine en adresse IP.  
- **Enregistrement de type A**: Ces enregistrements permettent notamment à un utilisateur de saisir un nom de domaine dans le navigateur.
- **Enregistrement de type SOA**: Start Of Authority, renferme des informations sur la zone ou le serveur DNS.
- **Enregistrement de type NS**: permet d’indiquer au serveur DNS s’il est chargé de la zone ou s’il doit transférer la requête.


---
  
### installation et configuration d'un serveur DHCP sous ubuntu(20.04)

#### Installation des paquets

``` shell
sudo apt-get update
sudo apt-get install bind9 bind9-utils
```

#### Configuration (serveur primaire)

1. Déclarer la zone

``` shell
nano /etc/bind/named.conf.default-zones
```
ajouter les lignes suivantes
``` shell
zone "esp.sn"{
    type master;
    file "/etc/bind/esp.local";
}
```
2. Faire les enregistrements

``` shell
nano /etc/bind/esp.local
```
modifier les paramètres(dans notre cas)  
nom de domaine: **esp.sn**  
nom du serveur primaire: **ns.esp.sn**  
mail administrateur: **bouki.esp.sn** (@ remplacé par . => bouki@esp.sn)
``` shell
;
; BIND data file for local loopback interface
;
$TTL    604800
esp.sn. IN      SOA     ns.esp.sn. bouki.esp.sn. (
                              2         ; Serial
                         604800         ; Refresh
                          86400         ; Retry
                        2419200         ; Expire
                         604800 )       ; Negative Cache TTL
;
esp.sn. IN      NS      ns.esp.sn.
ns.esp.sn.      IN      A       127.0.0.1
fatoumata.esp.sn.       IN      A       172.16.0.117
esp.sn. IN      MX      3       poste3.esp.sn.
        IN      MX      2       poste4.esp.sn.


```
Les types d'enregistrements

- **SOA**: nomdedomaine IN SOA nomDuServeurPrimaire mailAdministrateur  
- **NS**: nomdedomaine IN NS nomDuServeur  
- **A**: nomduServeur IN A adresseDuServeur