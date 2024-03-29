var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var userSchema = new Schema({
    time:{
        type: String,
    },
    type: {
        type: String,
    },
    cost: {
        type: Number,
    },
    detail: {
        type: String,
    },
});
// 将数据模型暴露出去
module.exports = mongoose.model('users', userSchema);