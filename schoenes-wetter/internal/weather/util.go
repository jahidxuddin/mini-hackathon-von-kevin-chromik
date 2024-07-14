package weather

import (
	"io"
	"net/http"
)

func GetIpFromUser() (string, error) {
	res, err := http.Get("https://api.ipify.org?format=text")
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return "", err
	}

	return string(body), nil
}
