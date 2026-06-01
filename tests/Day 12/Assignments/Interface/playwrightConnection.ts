import {DataBaseConnection} from "./dataBaseConnectionInterface.js";

class PlaywrightConnection implements DataBaseConnection {
    connect(){
        console.log("Playwright Connection connected")
    }
    disconnect(){
        console.log("Playwright Connection disconnected")
    }
    executeUpdate(){
        console.log("Update executed in Playwright database")
    }
}

const PWobj = new PlaywrightConnection()
PWobj.connect()
PWobj.executeUpdate()
PWobj.disconnect()