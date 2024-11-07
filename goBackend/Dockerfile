FROM golang:1.23-alpine

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

# Install air
RUN go install github.com/air-verse/air@latest

COPY . .

EXPOSE 8000

CMD ["air", "-c", ".air.toml"]
