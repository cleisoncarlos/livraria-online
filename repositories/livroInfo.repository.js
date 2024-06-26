import  {connect}  from "../config/mongo.db.js";
import LivroInfoSchema from "../schemas/livroInfo.schema.js";

async function createLivroInfo(livroInfo) {
try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema);
    livroInfo = new LivroInfo(livroInfo)
    await livroInfo.save();
    }catch(err){
    throw err
}
}

async function updateLivroInfo(livroInfo){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema);
        await LivroInfo.findOneAndUpdate({livroId: livroInfo.livroId }, livroInfo )
      //  console.log('Product information updated successfully');
    } catch (err){
              throw err
    } 
}

async function deleteLivroInfo(livroId){
    try {
        const mongoose = await connect();
        const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema);
        await LivroInfo.deleteOne({livroId})
    } catch (err){      
        throw err
    } 
}






export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,

}





