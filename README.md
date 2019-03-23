# MyTs
typescript 练习


{
    "compilerOptions": {
        "module":"es2015",
        "noImplicitAny": true,
        "sourceMap": true,
        "isolatedModules": true,
        "jsx":"react",
        "target":"es2015",
        "strictNullChecks": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "downlevelIteration":true,
        "moduleResolution": "node",  
        "types":["node"],
        "typeRoots" : ["./typings"],
        "baseUrl": ".", 
         "paths": {
              "@js/*": ["./src/js/*"],
              "@css/*": ["./src/css/*"]
         },
        "lib": ["es2015","dom"]
    },
    "files":[
        "./src/App.tsx"

    ]
    
}
