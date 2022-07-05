Un annuaire LDAP (Lightweight Directory Acces Protocol) est une base de données qui va contenir des informations sur des personnes, des machines, des groupe ...  
Il se distingue d'une base de données relationnelle par le fait qu'il a une structure hièrarchique et qu'il est trés rapide pour chercher et lire des éléments, mais plus lent pour les modifier.    
### installation et configuration d'un serveur LDAP sous ubuntu(20.04)

#### Installation des paquets

``` shell
sudo apt update
sudo apt install  slapd ldap-utils
```
#### Configuration

- Configuration du serveur
    ``` shell
    sudo nano /etc/ldap/slapd.conf
    ```
    Modifier les paramètres suivants:
    >choisir le backend
    ``` shell
    #######################################################################
    # Specific Backend Directives for mdb:
    # Backend specific directives apply to this backend until another
    # 'backend' directive occurs
    backend         hdb
    ```
    choisir la database
    ```shell
    #######################################################################
    # Specific Directives for database #1, of type mdb:
    # Database specific directives apply to this databasse until another
    # 'database' directive occurs
    database        hdb
    ```
    donner la racine de l'annuaire
    ``` shell
    suffix          "dc=esp,dc=sn"
    ```
    le dn et le mot de passe de l'administrateur
    ``` shell
    # rootdn directive for specifying a superuser on the database. This is needed
    # for syncrepl.
    rootdn          "cn=admin,dc=esp,dc=sn"
    rootpw  passer
    ```
    Configurer les ACLs
    ``` shell
        # The userPassword by default can be changed
    # by the entry owning it if they are authenticated.
    # Others should not be able to see it, except the
    # admin entry below
    # These access lines apply to database #1 only
    access to attrs=userPassword,shadowLastChange
            by dn="cn=admin,dc=esp,dc=sn" write
            by anonymous auth
            by self write
            by * none
    # Ensure read access to the base for things like
    # supportedSASLMechanisms.  Without this you may
    # have problems with SASL not knowing what
    # mechanisms are available and the like.
    # Note that this is covered by the 'access to *'
    # ACL below too but if you change that as people
    # are wont to do you'll still need this if you
    # want SASL (and possible other things) to work 
    # happily.
    access to dn.base="" by * read
    # The admin dn has full write access, everyone else
    # can read everything.
    access to *
            by dn="cn=admin,dc=esp,dc=sn" write
            by * read
    ```
- Configurer le client 
    ``` shell
    sudo nano /etc/ldap/ldap.conf
    ```
    Modifier les paramètres suivants:
    >La base de l'annuaire
    ``` shell
    BASE dc=esp,dc=sn
    ```
    l'uri du serveur(localhost dans notre cas)
    ``` shell
    URI ldap://127.0.0.1
    ```