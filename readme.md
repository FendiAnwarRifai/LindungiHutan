```
sebelum menjalankan project harap install node js
```

1. npm install
```
jalankan npm install di cmd
```
2. buat file .env
```
isi envnya seperti ini

DB_PORT=5000
```
3. setting database di folder config/config.json
```
    "username": "your_username",
    "password": "your_password",
    "database": "your_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
```
4. jalankan migration dan seeders
```
masuk ke folder src
dan di cmd jalankan

sequelize db:migrate && sequelize db:seed:all

```

5. jalankan programnya
```
npm run dev
```

6. contoh url API yg digunakan
```
https://documenter.getpostman.com/view/13525105/TzRRDUDL
```