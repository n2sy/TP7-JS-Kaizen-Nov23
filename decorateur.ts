function verifierArguments(target : any, key : string, descriptor : TypedPropertyDescriptor<any>) {
    //console.log("Target : ", target );
    console.log("Key : ", key );
    //console.log("descriptor : ", descriptor.value );

    const orginalMethod = descriptor.value;
    descriptor.value = function(...args : any[]) {
       
        
        console.log(args);
        
        const paramNames = (orginalMethod as any)
        .toString().match(/\(([^)]*)\)/)[1].split(", ") || [];
       
        console.log(paramNames);

        if(typeof args[0] == "number") {
            for(let i = 1; i<paramNames.length; i++) {
                const paramName = paramNames[i];
                if(typeof args[i] != "number") {
                    throw new Error(`Le paramètre ${paramName} de la méthode ${key} doit être un nombre`)
                }
            }
        }
        else if(typeof args[0] == "string") {
            for(let i = 1; i<paramNames.length; i++) {
                const paramName = paramNames[i];
                if(typeof args[i] != "string") {
                    throw new Error(`Le paramètre ${paramName} de la méthode ${key} doit être un string`)
                }
            }
        }
        
        
        return orginalMethod.apply(this. args);
    };
    return descriptor;


    
}



class ExempleClasse {

    @verifierArguments
    addition(a : number, b : any) : number {
        return a + b;
    }

    @verifierArguments
    concatener(ch1 : string, ch2 : any) : string {
        return ch1.concat(ch2);
    }
}

const e = new ExempleClasse();
e.addition(3, 5);
//e.addition(3, true);
e.concatener("javascript", 3);