package routes

import (
	"gobackend/controllers"
	"gobackend/middleware"

	"github.com/gin-gonic/gin"
)

func SetupApiRoutes(router *gin.Engine) *gin.Engine {
	auth := router.Group("/auth")
	auth.Use(middleware.Authenticate)
	{
		user := auth.Group("/user")
		{
			user.GET("/", controllers.GetUser)
		}
	}

	return router
}
