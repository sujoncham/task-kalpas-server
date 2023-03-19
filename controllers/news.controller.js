const NewsBlog = require("../models/news.model");

exports.createNews = async(req, res, next)=>{
    try {
    //create 
    const result = new NewsBlog(req.body)
   
    const data = await result.save()

    // res.send(req.body);
    res.status(200).json({
        status: 'success',
        message:'Data inserted successfull',
        data: data,
    })
    } catch (error) {
        console.log('data not inserted');
        res.status(400).json({
            status: 'failed',
            message : "data not inserted",
            error: error.message
        })
    }
}

exports.getAllNews = async(req, res, next)=>{
    
    try {
        const result = await NewsBlog.find();

        return res.status(200).json({
            status: "success",
            message: "news is created successfully",
            data: result,
        })
         
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "news is not found",
            error: error,
        })
    }
};

exports.getNewsDetail = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
        const blog = await NewsBlog.findById(blogId).populate('user');

         return res.status(200).json({
            status: "success",
            message: "get by id successfully",
            user: blog,
        })
    } catch (error) {
        console.log(error)
    }
};

exports.deleteNews = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
         await NewsBlog.findByIdAndRemove(blogId);

         return res.status(200).json({
            status: "success",
            message: "deleted blog by id successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "not deleted blog",
            error: error.message,
        })
    }

};