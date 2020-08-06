const apiData = {
	"swagger": "2.0",
	"info": {
		"description": "This is a sample server Petstore server.  ",
		"version": "1.0.5",
		"title": "Swagger Petstore",
		"termsOfService": "http://swagger.io/terms/",
		"contact": {
			"email": "apiteam@swagger.io"
		},
		"license": {
			"name": "Apache 2.0",
			"url": "http://www.apache.org/licenses/LICENSE-2.0.html"
		}
	},
	"host": "petstore.swagger.io",
	"basePath": "/v2",
	"tags": [{
		"name": "pet",
		"description": "Everything about your Pets",
		"externalDocs": {
			"description": "Find out more",
			"url": "http://swagger.io"
		}
	}, {
		"name": "store",
		"description": "Access to Petstore orders"
	}, {
		"name": "user",
		"description": "Operations about user",
		"externalDocs": {
			"description": "Find out more about our store",
			"url": "http://swagger.io"
		}
	}],
	"schemes": ["https", "http"],
	"paths": {
		"/pet/{petId}/uploadImage": {
			"post": {
				"tags": ["pet"],
				"summary": "uploads an image",
				"description": "",
				"operationId": "uploadFile",
				"consumes": ["multipart/form-data"],
				"produces": ["application/json"],
				"parameters": [{
					"name": "petId",
					"in": "path",
					"description": "ID of pet to update",
					"required": true,
					"type": "integer",
					"format": "int64"
				}, {
					"name": "additionalMetadata",
					"in": "formData",
					"description": "Additional data to pass to server",
					"required": false,
					"type": "string"
				}, {
					"name": "file",
					"in": "formData",
					"description": "file to upload",
					"required": false,
					"type": "file"
				}],
				"responses": {
					"200": {
						"description": "successful operation",
						"schema": {
							"$ref": "#/definitions/ApiResponse"
						}
					}
				},
				"security": [{
					"petstore_auth": ["write:pets", "read:pets"]
				}]
			}
		}
	}
}


export default apiData;

