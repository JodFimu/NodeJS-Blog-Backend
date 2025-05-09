import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog API",
            version: "1.0.0",
            description: "API para gestion de Blog",
            contact:{
                name: "Jose Figueroa",
                email: "jfigueroa-2023015h@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/Blog/v1"
            }
        ]
    },
    apis:[
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}