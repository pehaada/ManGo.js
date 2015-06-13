
module.exports = function (mongoose) {

    var Schema = mongoose.Schema,
        ObjectId = mongoose.Schema.Types.ObjectId;



    var UserSchema = new Schema({
        firstname: {type: String },
        lastname: {type: String, required: true },
        salt: {type: String },
        hashed_pwd: {type: String },
        email: { type: String,index: { unique: true }, required: true }

    });
    //
    //
    //
    //UserSchema.methods = {
    //    authenticate: function (passwordToMatch) {
    //        return utility.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    //    }
    //
    //};
    //
    //
    module.exports.user = mongoose.model('user', UserSchema);

}


