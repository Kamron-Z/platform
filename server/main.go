package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/auth", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"login":    "admin",
			"password": "admin",
		})
	})
	r.Run()
}
