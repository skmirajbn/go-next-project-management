package middleware

import "github.com/gin-gonic/gin"

func Authenticate(c *gin.Context) {
	if c.Request.Header["Authorization"] == nil {
		c.AbortWithStatusJSON(401, gin.H{"message": "Unauthorized"})
	}
	c.Next()
}
