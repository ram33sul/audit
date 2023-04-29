import mongoose from "mongoose";

export default () => {
    const URI = process.env.MONGOOSE_URI;
    mongoose.connect(URI).then(() => {
        console.log(`Database successfully connected: ${URI}`);
    }).catch((error) => {
        console.log(error);
    })
}