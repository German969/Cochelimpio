function transicion(curva,ms,callback){ 
    this.ant=0.01; 
    this.done_=false; 
    var _this=this; 
    this.start=new Date().getTime(); 
    this.init=function(){ 
        setTimeout(function(){ 
                if(!_this.next()){ 
                    callback(1); 
                    _this.done_=true; 
                    window.globalIntervalo=0; 
                    return; 
                } 
                callback(_this.next()); 
                _this.init(); 
            },13); 
    } 
    this.next=function(){ 
        var now=new Date().getTime(); 
        if((now-this.start)>ms) 
            return false; 
        return this.ant=curva((now-this.start+.001)/ms,this.ant); 
    } 
}
