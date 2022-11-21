import { TaskBoard } from '@bryntum/taskboard/taskboard.module.js';
import { TaskStore } from '@bryntum/taskboard/taskboard.module.js';
import { getTasksFromJira } from '../graph.js';


getTasksFromJira();

function createTaskBoard(issues) {

    console.log(issues)

    const taskStore = new TaskStore({
        
        listeners: {
            change: function (event) {
                // updateMicrosoft(event); 
            }},
    });

    const taskBoard = new TaskBoard({

        appendTo : "taskboard",

        columnField : 'status',

        columns : [
            "to do",
            "in progress",
            "done"
        ],

        project : {
            taskStore
        }

    });
}





export { createTaskBoard };

