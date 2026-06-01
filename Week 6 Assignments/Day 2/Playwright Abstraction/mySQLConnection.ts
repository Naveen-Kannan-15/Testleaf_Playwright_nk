import { DataBaseConnection } from "../Playwright Abstraction/dataBaseConnectionInterface.js"

abstract class MySQLConnection implements DataBaseConnection {
    abstract connect():void
    abstract disconnect():void
    abstract executeUpdate():void 
    abstract executeQuery():void
}

export { DataBaseConnection, MySQLConnection };
