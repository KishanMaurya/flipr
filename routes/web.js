import IndexController from '../app/controller/indexController.js'

function InitRoute(app){
    app.get('/', IndexController().index)
}

export default InitRoute