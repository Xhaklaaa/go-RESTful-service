package handlers

import (
	"log"
)

type Goodbye struct {
	l *log.Logger
}

func NewGoodbye(l *log.Logger) *Goodbye {
	return &Goodbye{l}
}

// func (g *Goodbye) ServeHTTP(w http.ResponseWriter, r *http.Request) {
// 	rw.Write([]byte("Goodbye, World!"))
// }
