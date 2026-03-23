package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// We'll need to define an Upgrader
// this will require a Read and Write buffer size
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func reader(conn *websocket.Conn) {
	for {
		// read in a message
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		// print out that message for clarity
		fmt.Println(string(p))

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}

	}
}
func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }

	// upgrade this connection to a WebSocket
	// connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}
	// helpful log statement to show connections
	log.Println("Client Connected")

	reader(ws)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Home Page")
}

func initRoutes() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/ws", wsEndpoint)
}
func main() {
	fmt.Println("APKash Backend started on port 8080")
	initRoutes()

	////uri := os.Getenv("MONGODB_URI")
	//uri := "mongodb://localhost:27017"
	//docs := "www.mongodb.com/docs/drivers/go/current/"
	//
	//if uri == "" {
	//	log.Fatal("Set your 'MONGODB_URI' environment variable. " +
	//		"See: " + docs +
	//		"usage-examples/#environment-variable")
	//}
	//client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(uri))
	//if err != nil {
	//	panic(err)
	//}
	//defer func() {
	//	if err := client.Disconnect(context.TODO()); err != nil {
	//		panic(err)
	//	}
	//}()
	//coll := client.Database("sample_mflix").Collection("movies")
	//title := "Back to the Future"
	//var result bson.M
	//err = coll.FindOne(context.TODO(), bson.D{{"title", title}}).
	//	Decode(&result)
	//if err == mongo.ErrNoDocuments {
	//	fmt.Printf("No document was found with the title %s\n", title)
	//	return
	//}
	//if err != nil {
	//	panic(err)
	//}
	//jsonData, err := json.MarshalIndent(result, "", "    ")
	//if err != nil {
	//	panic(err)
	//}
	//fmt.Printf("%s\n", jsonData)
	//log.Fatal(http.ListenAndServe(":8080", nil))
}
