package cli

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"time"

	"github.com/jahidxuddin/hackathon-kevin-chromik/internal/weather"
)

var currentWeatherData weather.CurrentWeatherData

func Run() {
	// loop()
}

func init() {
	ip, err := weather.GetIpFromUser()
	if err != nil {
		fmt.Println(err)
	}

	data, err := weather.GetWeatherDataByIp(ip)
	if err != nil {
		fmt.Println(err)
	}

	currentWeatherData = data

	fmt.Printf("%v °C\n", currentWeatherData.Temp)
	fmt.Printf("%v kmh", currentWeatherData.WindSpeed)
}

func loop() {
	for {
		isUpdated := update()
		if isUpdated {
			render()
		}
		time.Sleep(1000 * time.Millisecond)
	}
}

func update() bool {
	return true
}

func render() {
	clearConsole()
}

func clearConsole() {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "linux", "darwin":
		cmd = exec.Command("clear")
	case "windows":
		cmd = exec.Command("cmd", "/c", "cls")
	}
	cmd.Stdout = os.Stdout
	cmd.Run()
}
