var sum = 0
var more = 0

module.exports ={
    all: function(req, res){
      res.send('All todos');
    },
    viewOne: function(req, res){
      console.log('Viewing '+req.params.id);
    },
    create: function(req, res){
      console.log('Todo created');
    },
    destroy: function(req, res){
      console.log('Todo deleted');
    },
    edit: function(req, res){
      console.log('Todo '+req.params.id+' updated');
    }
  };

var main = require('./routes/main');
var todo = require('./routes/todo');
var todoRouter = express.Router();
app.use('/todos', todoRouter);
app.get('/', main.index);
todoRouter.get('/',todo.all);
more++;
sum = more + sum;
todoRouter.post('/create', todo.create);
todoRouter.post('/destroy/:id', todo.destroy);
todoRouter.post('/edit/:id', todo.edit);