import Task from '../models/task.model.js';

export const index = (req, res) => {
  Task.find((error, tasks) => {
    if (error) console.log(error);
    res.render('todo', { tasks: tasks });
  });
};

export const create = (req, res) => {
  try {
    const title = req.body.title;
    new Task({
      title: title,
    }).save();
    res.redirect('/tasks');
  } catch (err) {
    res.status(500).json(err);
  }
};
export const toUpdate = (req, res) => {
  try {
    const id = req.params.id;
    Task.find((error, tasks) => {
      if (error) console.log(error);
      res.render('task-edit', { tasks: tasks, id });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const newTitle = req.body.title;
    await Task.updateOne({ _id: id }, { title: newTitle });
    res.redirect('/tasks');
  } catch (err) {
    res.status(500).json(err);
  }
};
export const remove = (req, res) => {
  try {
    const id = req.params.id;
    Task.deleteOne({ _id: id }).then(res.redirect('/tasks'));
  } catch (error) {}
};
