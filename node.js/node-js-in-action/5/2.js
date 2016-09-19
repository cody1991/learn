var fs = require('fs'),
    path = require('path'),
    args = process.argv.splice(2), // 去掉 node 2.js 只剩下参数
    command = args.shift(), // 取出第一个参数（命令）
    taskDescription = args.join(' '),
    file = path.join(process.cwd(), './.tasks'); // 根据当前的工作目录解析数据库的相对路径

// 取当前工作目录（Current Work Directory）

switch (command) {
    case 'list':
        listTasks(file);
        break;
    case 'add':
        addTask(file, taskDescription);
        break;
    default:
        console.log('Usage: node ' + process.argv[1] + ' list|add [taskDescription]');
}

// 辅助函数，解析任务文件的json数据
function loadOrInitializeTaskArray(file, cb) {
    fs.exists(file, function(exists) {
        var tasks = [];
        if (exists) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    throw err;
                }
                var data = data.toString();
                var tasks = JSON.parse(data || '[]');
                cb(tasks);
            });
        } else {
            cb([]);
        }
    })
}

function listTasks(file) {
    loadOrInitializeTaskArray(file, function(tasks) {
        if (tasks.length == 0) {
            console.log('No tasks');
        } else {
            for (var i in tasks) {
                console.log(tasks[i]);
            }
        }
    });
}

// 辅助函数 JSON 串行化以后存放在文件
function storeTasks(file, tasks) {
    fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err) {
        if (err) {
            throw err;
        }
        console.log('Saved');
    });
}

function addTask(file, taskDescription) {
    loadOrInitializeTaskArray(file, function(tasks) {
        tasks.push(taskDescription);
        storeTasks(file, tasks);
    });
}
