import React, { useState } from "react";
import axios from "axios";
import { Card, Input, Space } from "antd";
import style from "./style.module.css";

const { Search } = Input;

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/ask", {
        question,
      });
      setAnswer(response.data.answer);
    } catch (error) {
      setAnswer("Произошла ошибка на стороне сервера, попробуйте позже");
    }
  };

  return (
    <div className={style.app}>
      <div className={style.containe}>
        <Card
          title="Задай свой вопрос ChatGPT"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <div className={style.card_top}>
            <label>Вопрос:</label>
            <Space direction="vertical">
              <Search
                placeholder="Введите вопрос"
                onSearch={handleAsk}
                style={{ width: 200 }}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Space>
          </div>
          {answer && (
            <div>
              <p>Ответ:</p>
              <p>{answer}</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default App;
