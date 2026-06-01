export interface SwiggyRules{
    // Unimplemented methods are grouped under the interface and are implemented in the class file
    menu() : void
    acceptOrder() : void
    prepareFood() : void
}

export interface ZomatoRules{
    trackOrder() : void
    cancelOrder() : void
}