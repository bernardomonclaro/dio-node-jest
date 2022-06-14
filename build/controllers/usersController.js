"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const database_1 = require("../database");
class UsersController {
    criarUsuario(req, res) {
        const { name } = req.body;
        if (name.length < 1) {
            return res.status(403).json({ mensagem: 'Não é possível criar usuários sem nome' });
        }
        database_1.database.push(name);
        return res.status(201).json({ 'mensagem': `Usuário ${name} criado` });
    }
    listarUsuario(req, res) {
        return res.status(200).json(database_1.database);
    }
}
exports.UsersController = UsersController;
