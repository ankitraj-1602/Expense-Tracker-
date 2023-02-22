// const transectionModel = require("../models/transectionModel");
// const moment = require("moment");
// const getAllTransection = async (req, res) => {
//   try {
//     const { frequency, selectedDate, type } = req.body;
//     const transections = await transectionModel.find({
//       ...(frequency !== "custom"
//         ? {
//             date: {
//               $gt: moment().subtract(Number(frequency), "d").toDate(),
//             },
//           }
//         : {
//             date: {
//               $gte: selectedDate[0],
//               $lte: selectedDate[1],
//             },
//           }),
//       userid: req.body.userid,
//       ...(type !== "all" && { type }),
//     });
//     res.status(200).json(transections);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(erorr);
//   }
// };

// const deleteTransection = async (req, res) => {
//   try {
//     await transectionModel.findOneAndDelete({ _id: req.body.transacationId });
//     res.status(200).send("Transaction Deleted!");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };
// const editTransection = async (req, res) => {
//   try {
//     await transectionModel.findOneAndUpdate(
//       { _id: req.body.transacationId },
//       req.body.payload
//     );
//     res.status(200).send("Edit SUccessfully");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// const addTransection = async (req, res) => {
//   try {
//     // const newTransection = new transectionModel(req.body);
//     const newTransection = new transectionModel(req.body);
//     await newTransection.save();
//     res.status(201).send("Transection Created");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// };

// module.exports = {
//   getAllTransection,
//   addTransection,
//   editTransection,
//   deleteTransection,
// };



const transectionModel=require("../routes/transectionRoutes")
const moment=require('moment')
const addTransection=async(req,res)=>{
  try{
    const newTransection=new transectionModel(req.body)
    newTransection.save()
    res.status(200).send("saved items")
  }catch(err){
    res.status(500).json(err)
  }
}

const getAllTransection=async(req,res)=>{
  try{
    const {frequency,selectedDate,type} =req.body
    const transaction=await transectionModel.find({
      ...(frequency!=="custom"?
      {
        date:{
          $gt:moment().subtract(Number(frequency),"d").toDate()
        },
      }
      :{
        date:{
          $gte:selectedDate[0],
          $lte:selectedDate[1]
        },
      }
      ),
      userid:req.body.userid,
      ...(type!=="all" && {type})
    })
  }catch(err){
    res.status(500).json(err)
  }
}
const deleteTransection=async(req,res)=>{
  try{
    await transectionModel.findOneAndDelete({_id:req.body.transacationId})
    res.status(200).send("transaction deleted")
  }catch(err){
    res.status(500).json(err)
  }
}

const editTransection=async(req,res)=>{
  try{
    await transectionModel.findOneAndUpdate({
      _id:req.body.trasacationId
    },req.body.payload)
    res.status(200).send("edited")
  }catch(err){
    res.status(500).json(err)
  }
}

module.exports={editTransection,addTransection,deleteTransection,getAllTransection}