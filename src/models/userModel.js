const userSchema = new mongoose.Schema(
    {
        username: {
            type : String,
            required : true,
            unique: true,
        },
        password: {
            type: String,
            required : true,
        },
        role: {
            type: String,
            required : true,
            enum: ['admin', 'user', 'manager',],
        }
    },
    {
        Timestamp: true,
    }
);

module.exports = mongoose.model('User', userSchema);