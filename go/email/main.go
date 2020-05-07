package main //包
// node_mail go email
import (
	"log"
	"net/smtp"

	"github.com/jordan-wright/email"
)

func main() { // 入口函数
	e := email.NewEmail() // := 定义并且附值
	e.From = "shunwuyu <754211506@qq.com>"
	// [] ? Array? 多个用户发邮件 { }集合
	e.To = []string{"543882743@qq.com", "1772796436@qq.com", "1141340018@qq.com"}
	e.Subject = "你在家还好吗？" //标题
	// byte? go 类型 byte
	e.Text = []byte("至从考试一别， 已有两月， 我长发已及腿，我想你也是") //内容
	e.AttachFile("26k.jpg")                       //附件
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "754211506@qq.com", "wurzijtahyqebdie", "smtp.qq.com"))

	if err != nil {
		// console.log()
		// console.error()
		//打印错误 Fatal
		log.Fatal(err)
	}
}
