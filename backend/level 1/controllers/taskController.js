import Task from "../models/taskModels.js";

const newTask = async (req, res) => {
  try {
    // 1. Extract data from body
    const { title, description, due_date } = req.body;

    // 2. Validation on the incoming data
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description not found" });
    }

    // 3. Create document based on the schema
    const newTask = await Task.create({ title, description, due_date });

    // Success Response
    res.status(200).json({
      success: true,
      message: "Task Created successfully",
      task: newTask,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to Create task",
    });
  }
};

const getTasks = async (req, res) => {
  //Get all the tasks from mongodb
  try {
    const tasks = await Task.find({}).lean();
    res.status(200).json({
      success: true,
      tasks,
      message: "fetched all the tasks successfully",
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      success: false,
      message: "failed to fetch task",
    });
  }
};

const updatedTask = async (req, res) => {
  try {
    //get the id from params
    const { id } = req.params;
    //get the data to update, from body
    const { title, description, due_date } = req.body;
    //validation on body and id
    if (!id) {
      return res.status(400).json({ message: "task id required" });
    }
    //find the document according to the id
    // const task = await Task.find({ _id: { $eq: id } });
    // const task = await Task.findById(id);

    // //update the document
    // if (title) task.title = title;
    // if (description) task.description = description;
    // if (due_date) task.due_date = due_date;
    // if (!due_date) task.due_date = null;

    // //save the document
    // const updatedTask = await task.save();

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title,
        description,
        due_date: due_date || null,
      },
      { returnDocument: "after" }
    );

    //send a response
    res.status(200).json({
      success: true,
      message: "Task Updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to Update task",
    });
  }
};

const deletedTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "task id required" });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      success: true,
      message: "Task Deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to Delete task",
    });
  }
};

export { newTask, getTasks, updatedTask, deletedTask };
