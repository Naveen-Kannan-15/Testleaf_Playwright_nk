import { MySQLConnection } from "../Playwright Abstraction/mySQLConnection.js";
class PlaywrightConnection extends MySQLConnection {
    executeQuery() {
        console.log("Query executed in Playwright database");
    }
    disconnect() {
        console.log("Playwright Connection disconnected");
    }
    executeUpdate() {
        console.log("Update executed in Playwright database");
    }
    connect() {
        console.log("Playwright Connection connected");
    }
}
const PWobj = new PlaywrightConnection();
PWobj.connect();
PWobj.executeUpdate();
PWobj.executeQuery();
PWobj.disconnect();
