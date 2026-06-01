class Browser{
    browserName: string;
    version: string
    constructor(browserName: string, version: string){
        this.browserName = browserName
        this.version = version
    }
    openURL(){
        console.log(`The ${this.browserName} is opening the URL in version ${this.version}`)
    }
    closeBrowser(){
        console.log(`The ${this.browserName} is closing the browser`)
    }
    navigateBack(){
        console.log(`The ${this.browserName} is navigating back`)
    }
}

class Chrome extends Browser{
    constructor(version: string){
        super("Google Chrome", "114.0.5735.133")
    }
    openIncognito(){
        console.log(`The ${this.browserName} is opening the incognito mode`)
    }
    clearCache(){
        console.log(`The ${this.browserName} is clearing the cache`)
    }
}

const chromeObj = new Chrome("114.0.5735.133")
chromeObj.openURL()
chromeObj.openIncognito()
chromeObj.clearCache()
chromeObj.navigateBack()
chromeObj.closeBrowser()

class Edge extends Browser{
    constructor(version: string){
        super("Microsoft Edge", version)
    }
    takeSnap(){
        console.log(`The ${this.browserName} is taking a snapshot of the webpage`)
    }
    clearCookies(){
        console.log(`The ${this.browserName} is clearing the cookies`)
    }
}

const edgeObj = new Edge("114.0.1823.67")
edgeObj.openURL()
edgeObj.takeSnap()
edgeObj.clearCookies()
edgeObj.navigateBack()
edgeObj.closeBrowser()

class Safari extends Browser{
    constructor(version: string){
        super("Apple Safari", version)
    }
    readerMode(){
        console.log(`The ${this.browserName} is enabling the reader mode for better readability`)
    }
    fullScreenMode(){
        console.log(`The ${this.browserName} is switching to full screen mode`)
    }
}

const safariObj = new Safari("16.5")
safariObj.openURL()
safariObj.readerMode()
safariObj.fullScreenMode()
safariObj.navigateBack()
safariObj.closeBrowser()