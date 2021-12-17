#

## update project config/settings

- scripts in bin/
- env & .gitignore
- package remove, upgrade
- - removed kerberos

## update package version

```
ncu -u
npm i --legacy-peer-deps
```

## use typescript

- package

```
    "start": "ts-node index.js",
        "@types/parse": "^2.18.13",
        "typescript": "^4.5.4"
```

- install typescript globally

```
npm i -g ts-node
npm i -g typescript
```

- create config

```
tsc --init
```
