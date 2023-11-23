const Sequelize = require('sequelize');

const sequelize = new Sequelize("databaseempresa", "root", "nisioana1448", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso");
    }).catch((err) => {
        console.error("Erro na conexão:", err);
    });

module.exports = sequelize;
