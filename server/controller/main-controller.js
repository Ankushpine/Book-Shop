const mysqlPool = require("../config/db")


module.exports.getBooks = async (req,res)=>{
    try {

        const q = "SELECT * FROM books";
        const [data] = await mysqlPool.query(q);

        return res.status(200).json(data);
        
    } catch (error) {
        console.log(`Error in getBooks Controller :: ${error}`);
        return res.status(500).json({ error: "Internal server error." });        
    }
}


module.exports.setBooks = async (req,res)=>{
    try {

        const {title,desc,cover,price} = req.body;
        const q = "INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUE (?)";
        const values = [title,desc,cover,price];
        await mysqlPool.query(q,[values]);
        
        return res.status(200).json("Book is added successfully.");

    } catch (error) {
        console.log(`Error in setBooks Controller :: ${error}`);
        return res.status(500).json({ error: "Internal server error." });        
    }
}


module.exports.deleteBooks = async (req,res)=>{
    try {

        const bookId = req.params.id;
        const q = "DELETE FROM books WHERE id = ?";

        await mysqlPool.query(q,[bookId]);
        
        return res.status(200).json("Book is deleted successfully.");

    } catch (error) {
        console.log(`Error in deleteBooks Controller :: ${error}`);
        return res.status(500).json({ error: "Internal server error." });        
    }
}


module.exports.updateBooks = async (req,res)=>{
    try {

        const {title,desc,cover,price} = req.body;
        const bookId = req.params.id;
        const q = "UPDATE books SET `title`= ? ,`desc`= ?,`cover`= ?,`price`= ? WHERE id = ?";
        const values = [title,desc,cover,price]

        await mysqlPool.query(q,[...values,bookId]);
        
        return res.status(200).json("Book is updated successfully.");

    } catch (error) {
        console.log(`Error in updateBooks Controller :: ${error}`);
        return res.status(500).json({ error: "Internal server error." });        
    }
}
