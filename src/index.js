// 监听回车
document.querySelector('input').addEventListener("keydown", e => {
    if (e.code === "Enter") {
        handleSubmit();
    }
});

// 生成回答
function handleSubmit() {
    const input = document.querySelector('input');
    makeLi(input.value);
    makeResponse(input.value);
    input.value = "";
}

// 生成我的问题
function makeLi(value) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = "我：" + value;
    ul.appendChild(li);
}

// 生成机器人回答
function makeResponse(value) {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");

    const initialText = "机器人：";
    let text = initialText;
    let count = 0;

    li.innerHTML = text;
    ul.appendChild(li);

    const timer = setInterval(() => {
        if (count >= 6) {
            li.innerHTML = initialText + makeRealResponse(value);
            clearInterval(timer);
            return;
        }

        text = Array.from({ length: count % 3 + 1 }).fill(".").reduce((a, b) => a + b, initialText);
        li.innerHTML = text;

        count++;
    }, 500)
}

// 生成真正的回答内容
function makeRealResponse(text) {
    // AI 核心代码，这行代码值1个小目标个小目标，还得是美金。
    return text
        .replace("吗", "")
        .replace("？", "!")
        .replace("？", "!");
}