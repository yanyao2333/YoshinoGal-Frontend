const { spawn } = require('child_process');
function startGoServer() {
    // 生成随机端口号
    const port = Math.floor(Math.random() * (65535 - 1024) + 1024);
    console.log(`使用 ${port} 端口运行 Yoshino-Gal 后端服务`);

    process.env.PORT = String(port);

    const goServer = spawn('./go-bin/yoshino_gal_0.1.0.exe', [`-port=${port}`]);

    goServer.stdout.on('data', (data) => {
        console.log(`Go Server: ${data}`);
    });

    goServer.stderr.on('data', (data) => {
        console.log(`Go Server: ${data}`);
    });

    goServer.on('close', (code) => {
        if (code === 114514) {
            console.log('端口被占用，重新尝试');
            startGoServer(); // 端口被占用，重新调用函数以使用新的随机端口
        } else {
            console.log(`后端返回代码 ${code}，启动失败`);
        }
    });
}

startGoServer();