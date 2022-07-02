
TFTP (**Trivial File Transfer Protocol**) est un protocole qui fonctionne en UDP sur le port 69. Il permet de transférer des fichiers, comme une image IOS, de manière simple et rapide via une connexion réseau.

---

### installation et configuration d'un serveur TFTP sous ubuntu(20.04)

#### Installation des paquets

``` shell
sudo apt-get update
sudo apt-get install tftpd-hpa tftp-hpa
```

#### Configuration (serveur primaire)

editer le fichier tftpd-hpa

``` shell
nano /etc/default/tftpd-hpa
```
ajouter l'option -c pour donner le droit d'écriture 

``` shell                                                                                            
# /etc/default/tftpd-hpa

TFTP_USERNAME="tftp"
TFTP_DIRECTORY="/srv/tftp"
TFTP_ADDRESS=":69"
TFTP_OPTIONS="--secure -c"
```
changer le propriétaire du répertoire par l’utilisateur tftp avec la commande chown.
``` shell
chown -R tftp /srv/tftp
```
