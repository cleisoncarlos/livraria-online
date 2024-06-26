import { getClient } from "./mongo.db.js";

async function createLivroInfo(livroInfo){
    const client = getClient()
    try {
        await client.connect()
        await client.db('store').collection('livroInfo').insertOne(livroInfo)
        console.log('Product information inserted successfully');

    } catch (err){
        console.error('Error inserting product information:', err);
        throw err
    } finally{
        await client.close()
    }
}



async function updateLivroInfo(livroInfo){
    const client = getClient()
    try {
        await client.connect()
        await client.db('livraria-online').collection('livroInfo').updateOne(
            {productId: livroInfo.productId},
        {$set: {...livroInfo}}
    )
    console.log('Product information updated successfully');

    } catch (err){
        console.error('Error update product information:', err);
        throw err
    } finally{
        await client.close()
    }

}

async function getLivroInfo(livroId){
    const client = getClient()

    try {
        await client.connect()
        await client.db('livraria-online').collection('livroInfo').findOne({livroId})
    } catch (err){      
        throw err
    } finally{
        await client.close()
    }

}




async function createAvaliacao(avaliacao, productId) {
    try {
        const livroInfo = await getLivroInfo(productId);
        if (!livroInfo) {
            throw new Error("Register not found");
        }
        livroInfo.reviews.push(avaliacao);
        return await updateLivroInfo(livroInfo);
    }
    catch (error) {
        throw error;
    }
}




export default {
    createLivroInfo,
    updateLivroInfo,
    getLivroInfo,
    createAvaliacao
}





