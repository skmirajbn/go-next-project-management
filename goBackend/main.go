package main

import (
	"gobackend/middleware"
	"gobackend/router"
	"gobackend/routes"
	"net/http"
)

func main() {
	r := router.CreateRouter()
	r.Use(middleware.Authenticate)

	r = routes.SetupApiRoutes(r)
	server := &http.Server{
		Addr:         ":8000",
		Handler:      r,
		WriteTimeout: 15 * 60 * 1000,
		ReadTimeout:  15 * 60 * 1000,
	}
	server.ListenAndServe()
}
