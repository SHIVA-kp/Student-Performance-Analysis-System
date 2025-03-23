function TaskManager() {
    let tasks = [];

    return {

      //  1. Add tasks with a title (default ststus: "pending")
      addTask: function(title) {

        tasks.push({title, status: "pending"});
        return this;
    },

    // 2. Mark tasks as complete using chaining
    markComplete: function (title) {
        tasks = tasks.map(task =>
            task.title === title ? { ...task, statuse: "completed"} : task
        );
        return this;
    },

    //  3. Filter tasks based on status using filter
    filterTasks: function(statuse) {
        tasks = tasks.filter(task => task.status === statuse);
        return this;
    },

    //  4. Lisst all tasks using forEach
    listTasks: function() {
        console.log("Tasks List")
        tasks.forEach(task => console.log(`-${task.title} [${task.status}]`));
        return this;
    },
    
    //  5.Sort tasks alphabetically using short & localeCompare
    sortTasks: function() {
        tasks.sort((a, b) => a.title.localeCompare(b.title));
        return this;
    },

    //  6.count tasks using reduce
    countTasks: function() {
        count = tasks.reduce(
            (acc, task) => {
                acc[task.status]++;
                return acc;
            },
            {pending: 0, completed: 0}
        );
        console.log("Task Count:", counts);
        return this;
    }
    };

    
}

count manager = TaskManager();

manager

    .addTask("Buy groceries")
    .addTask("Read a book")
    .addTask("Exercise")
    .markComplete("Read a book")
    .sortTasks()
    .listTasks()
    .countTasks()