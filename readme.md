# 간단한 메일 테스터

## 설정

- `config.json` 파일을 아래와 같이 생성한다

`
{
	"email" : "your@email.com",
	"password" : "password",
	"smtp" : "smtp.gmail.com",
	"from" : "NAME <your@email.com>",
	"to" : "other@email.com",
	"title" : "mail test"
}
`

## 실행법

`node send.js template/demo.html`
