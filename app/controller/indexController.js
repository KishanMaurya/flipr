
// import fs from 'fs'
// import {name, version} from '../../package.json'
function indexController(){
    return{
        index(req,res){
            try {
                // const data = fs.readFileSync("data.json", "utf8")
                // let restdata = JSON.parse(data);
                // if(restdata){
                    res.render('home')
                // }
                // console.log(restdata)
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default indexController