const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const user = {
    email: '',
    user_password: '',
    pet_name: '',
    pet_age: '',
    pet_show_gender: '',
    pet_gender: '',
    gender_interest: '',
    pet_url1: '',
    pet_url2: '',
    pet_url3: '',
    pet_about:'',
    matches: '',
    user_name: '',
    user_dob_day: '',
    user_dob_month: '',
    user_dob_year:'',
    user_show_gender:'',
    user_gender:'',
    user_url1:'',
    user_url2:'',
    user_url3:'',
    user_about:'',
    user_city:'',
    user_phone:''
}

const userSchema = new Schema({
    email: { type: String, unique:true},
    user_password: { type: String },
    pet_name: { type: String },
    pet_age: { type: Number },
    pet_show_gender: { type: Boolean },
    pet_gender: { type: String },
    gender_interest: { type: String },
    pet_url1: { type: String },
    pet_url2: { type: String },
    pet_url3: { type: String },
    pet_about: { type: String },
    matches: { type: Array },
    user_name: { type: String },
    user_dob_day: { type: Number },
    user_dob_month:{ type: Number },
    user_dob_year:{ type: Number },
    user_show_gender:{ type: Boolean },
    user_gender:{ type: String },
    user_url1:{ type: String },
    user_url2:{ type: String },
    user_url3:{ type: String },
    user_about:{ type: String },
    user_city:{ type: String },
    user_phone:{type: Number}

})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

userSchema.statics.isThisEmailUse = async function(email) {
    if(!email) throw new Error('Invalid Email');
    try{
    const user = await this.findOne({email})
    if (user) return false

    return true;
    } catch (error) {
        console.log('error inside', error.message)
        return false
    }
};
userSchema.methods.isThisEmailUse;


exports.userSignIn = (req,res) => {
    res.send('sing in')
}

module.exports = mongoose.model('User', userSchema);