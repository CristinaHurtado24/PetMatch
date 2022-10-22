const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://petmatch:petmatch1234@cluster0.sjkllmk.mongodb.net/users?retryWrites=true&w=majority';

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true})
.then(() => {
    console.log('db connected')
})
.catch(err => console.log(err.message));