// db/db.go
package db

import (
	"gobackend/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error
	// Replace the below DSN with your actual database credentials
	dsn := "host=db-service user=user password=password dbname=auth_db port=5432 sslmode=disable"
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to the database")
	}
	DB.AutoMigrate(&models.User{}) // Automatically create the users table
}
